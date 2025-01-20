#include "motion_controller.h"

MotionController::MotionController()
{

}

MotionController::~MotionController()
{

}


void MotionController::setup_motion() 
{
    mushibot.setup_mushibot();
}


void MotionController::loop_motion() 
{
    mushibot.loop_mushibot();
    
}



void MotionController::jump()
{
    Log.verboseln("jump_flag: %d, uncontrolable: %d, LQR_speed: %F", 
        jump_flag, uncontrolable, LQR_speed);

    if (jump_flag == 0)
    {
        if(uncontrolable || abs(LQR_speed) > 2) 
        {
            return;
        }

        ID[0] = 1;
        ID[1] = 2;
        ACC[0] = 0;
        ACC[1] = 0;
        Speed[0] = 0;
        Speed[1] = 0;
        Position[0] = 2048 + 12 + 8.4 * (80 - 32);
        Position[1] = 2048 - 12 - 8.4 * (80 - 32);

        Log.verboseln("ID [%d, %d], Position [%d, %d], Speed [%d, %d], ACC [%d, %d] \n",
            ID[0], ID[1], Position[0], Position[1], Speed[0], Speed[1], ACC[0], ACC[1]);

        mushibot.sms_sts.SyncWritePosEx(ID, 2, Position, Speed, ACC);
        delay(1000);

        jump_flag = 1;
    }
    if (jump_flag > 0)
    {
        if ((jump_flag > 30) && (jump_flag < 35))
        {
            ID[0] = 1;
            ID[1] = 2;
            ACC[0] = 0; 
            ACC[1] = 0;
            Speed[0] = 0;
            Speed[1] = 0;
            Position[0] = 2048 + 12 + 8.4 * (40 - 32);
            Position[1] = 2048 - 12 - 8.4 * (40 - 32);

            Log.verboseln("ID [%d, %d], Position [%d, %d], Speed [%d, %d], ACC [%d, %d] \n",
                ID[0], ID[1], Position[0], Position[1], Speed[0], Speed[1], ACC[0], ACC[1]);
            
            mushibot.sms_sts.SyncWritePosEx(ID, 2, Position, Speed, ACC);
            delay(1000);

            jump_flag = 40;
        }

        if (jump_flag > 200)
        {
            jump_flag = 0; // 已准备好再次跳跃
        }

        jump_flag++;
    }   
}

float MotionController::loop_pitch()
{
    // LQR平衡算式，实际使用中为便于调参，讲算式分解为4个P控制，采用PIDController方法在commander中实时调试
    // QR_u = LQR_k1*(LQR_angle - angle_zeropoint) + LQR_k2*LQR_gyro + LQR_k3*(LQR_distance - distance_zeropoint) + LQR_k4*LQR_speed;

    // 给负值是因为按照当前的电机接线，正转矩会向后转
    LQR_distance = (-0.5) * (mushibot.motor1.shaft_angle + mushibot.motor2.shaft_angle);
    LQR_speed = (-0.5) * (mushibot.motor1.shaft_velocity + mushibot.motor2.shaft_velocity);
    LQR_angle = (float) mushibot.mpu6050.getAngleY();
    LQR_gyro = (float) mushibot.mpu6050.getGyroY();

    // 计算自平衡输出
    angle_control = pid_angle(LQR_angle - angle_zeropoint);
    gyro_control = pid_gyro(LQR_gyro);

    if (abs(LQR_speed) < 0.5)
    {
        distance_zeropoint = LQR_distance; // 位移零点重置
    }

    // 不理解这段话的逻辑 2024-12-26
    if (abs(LQR_speed) > 15) // 被快速推动时的原地停车处理
    {
        distance_zeropoint = LQR_distance; // 位移零点重置
    }

    // 计算位移控制输出
    distance_control = pid_distance(LQR_distance - distance_zeropoint);
    speed_control = pid_speed(LQR_speed);

    // 轮部离地检测
    robot_speed_last = robot_speed; // 记录连续两次的轮部转速
    robot_speed = LQR_speed;

    // 若轮部角速度、角加速度过大或处于跳跃后的恢复时期，认为出现轮部离地现象，需要特殊处理
    if (abs(robot_speed - robot_speed_last) > 10 || abs(robot_speed) > 50 || (jump_flag != 0))
    {
        distance_zeropoint = LQR_distance;    // 位移零点重置
        LQR_u = angle_control + gyro_control; // 轮部离地情况下，对轮部分量不输出；反之，正常状态下完整输出平衡转矩
        // pid_lqr_u.error_prev = 0;              // 输出积分清零
        pid_lqr_u.reset();
    }
    else
    {
        LQR_u = angle_control + gyro_control + distance_control + speed_control;
    }

    // 触发条件：轮部位移控制正常介入、不处于跳跃后的恢复时期
    // 不理解这段话的逻辑 2024-12-26
    if (abs(LQR_u) < 5 && abs(distance_control) < 4 && (jump_flag == 0))
    {
        LQR_u = pid_lqr_u(LQR_u); // 补偿小转矩非线性
        angle_zeropoint -= pid_zeropoint(lpf_zeropoint(distance_control)); // 重心自适应
    }
    else
    {
        // pid_lqr_u.error_prev = 0; // 输出积分清零
        pid_lqr_u.reset();
    }

#if 0
    // 平衡控制参数自适应
    if (wrobot.height < 50)
    {
        pid_speed.P = 0.7;
    }
    else if (wrobot.height < 64)
    {
        pid_speed.P = 0.6;
    }
    else
    {
        pid_speed.P = 0.5;
    }
#endif

    return LQR_u;
}