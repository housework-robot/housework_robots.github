# Anatomy of Mushibot's Teleoperation

## 1. Objectives

In this blog, we will discuss and implement teleoperation for Mushibot, a wheel-legged robot. The teleoperation consists of the following steps, 

     1. We construct a http website in a ubuntu computer, 
        using expressjs and embeddedjs templates. 
     

     2.1 The mushibot connects to the wifi network, and gets a IP address.

     2.2 The mushibot starts up a websocket server. 

     2.3 The mushibot connects to the website as a http client, 
         and posts its IP address to the website. 


     3.1 A human user uses a browser to open the webpage of the website. 
         When the browser opens the webpage, 
         the webpage's javascript connects to the mushibot's as a websocket client.
         
         Notice that the websocket connection links the human user's browser to the remote mushibot directly, 
         rather than indirectly via the website, 
         to prevent the website from being a traffic bottleneck. 
         
     3.2 The human user clicks the control buttons in the webpage,
         and the webpage's javascript sends the control commands, 
         like "forward", "left", "jump", with parameters to the mushibot.

     3.2 The websocket server running in the mushibot receives the commands, parses them, 
         and then control the motion of the mushibot. 


&nbsp;
## 2. Website with ExpressJS

We construct an experimental http website using expressjs for the web server,
and embeddedjs templates for the webpages.

The webpage contains some buttons to remotely control the mulshibot to go forward or backforward, turn left or right, jump etc. 

The expressjs web server hosts the webpages. 
When a human user uses his browser to visit the website, his browser downloads the webpages and displays them in his browser.

When the user's browser opens the webpages, the browser executes the javascript code in the webpage. 
One task of the javascript is to set up the websocket connection from the browser to the remote mushibot, 

The javascript running in the user's browser is the websocket client,
and the mushibot is the websocket server.

### 2.1 ExpressJS web server

We used [express-js](https://expressjs.com/en/starter/hello-world.html) 
and [embedded-js templates](https://github.com/mde/ejs) 
to construct an experimental website. 

#### 1. Pass parameters to EmbeddedJS webpage

Here is a fragment of the source code of 
[the express-js web server](./S06E08_src/src/Mushibot20250120/test/teleop_website/app.js). 

~~~
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
// app.use(express.static('public'));

var ip = require("ip");
var server_ip = ip.address();
console.log("website_ip: '" + server_ip + "'");

var mushibot_ip = "192.168.0.123";

app.get("/", (req, res) => {
    res.render(
        'index', {robot_ip: mushibot_ip, website_ip: server_ip}
    );
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
~~~

1. `app.set('view engine', 'ejs')`

   We used embedded-js templates to create the webpages, rather than the plain HTML file.

2. `app.get("/", (req, res) => { res.render('index', {robot_ip: mushibot_ip}); });`

   The express-js web server will compile and send `index.ejs` which is made by embedded-js,
   to the user's browser,
   when his browser wants to open the website, and sends http request to GET `/`. 

   The express-js will pass a parameter object to the `index.ejs` webpage,
   the parameter object contains several parameters including `robot_ip` and `website_ip`.

3. `require("ip")` imports a package `ip`.

   `ip.address()` gets the IP address, like 192.168.0.xxx, in the local network.
   

#### 2. Receive mushibot status and write into datafile

~~~
const bodyParser = require("body-parser");
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

function now_str() {
    var now = new Date();
    var now_year = now.getFullYear().toString();

    var now_month =  (now.getMonth() + 1).toString();
    now_month = now_month > 10? now_month.toString() : "0".concat(now_month.toString());

    var now_date = now.getDate().toString();
    now_date = now_date > 10? now_date.toString() : "0".concat(now_date.toString());

    var now_hour = now.getHours();
    now_hour = now_hour > 10? now_hour.toString() : "0".concat(now_hour.toString());

    var now_minute = now.getMinutes();
    now_minute = now_minute > 10? now_minute.toString(): "0".concat(now_minute.toString());
    
    var now_full_str = now_year.concat("_", now_month, now_date, "_", now_hour, now_minute);
    console.log("Now time is: '" + now_full_str + "'");

    return now_full_str;
}

var fs = require("fs");
var now_full_str = now_str();
var latest_datafile = "data/" + now_full_str + ".jsonl";

app.get("/", (req, res) => {
    var now_full_str = now_str();
    latest_datafile = "data/" + now_full_str + ".jsonl";

    fs.writeFile(latest_datafile, "", function (err) {
        if (err) throw err;
        console.log("The latest datafile will be named as: '" + latest_datafile + "'.");
    });
});


app.post("/post_status", (req, res) => {
    var req_str = JSON.stringify(req.body) + "\n";
    fs.appendFile(latest_datafile, req_str, function (err) {
        if (err) {
            console.log(`Cannot append to file: "${latest_datafile}"`);
        }
        else {
            res.send(`Data appended to file: "${latest_datafile}"`);
        } 
    });
    
    // res.redirect('/');  
});
~~~

1. `bodyParser = require("body-parser")` imports a package `body-parser`,

   `app.use(bodyParser.json())` the ExpressJS engine uses this package to parse the HTTP body in JSON.

2. `function now_str()` gets the current time, in the format of YYYY_MMDD_hhmm,

   For example, 2025_0124_1502. 

3. `fs = require("fs")` imports a `fs` package to handle files,

   `fs` packages can reate file, read, write, append, delete, and rename it.

4. In `app.get("/", ...)`, the ExpressJS web server create a new datafile.

   `fs.writeFile(latest_datafile, "",...`, creates a new datafile, but actually don't write anything into it.

5. In `app.post("/post_status", ...)`, the ExpressJS web server adds a new data point to the existent datafile.

   Everytime the ExpressJS web server receives a new POST payload, it serializes the payload into a string in JSON format.

   Each line of the datafile is an independent data point in json format.


#### 3. Cross-origin resource sharing (CORS)

~~~
const cors = require('cors');
app.use(cors({origin: true, credentials: true}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
~~~

Suppose the ExpressJS web server runs in the localhost, and we want to open the webpage in the browser running in the same machine, 
the browser cannot open the webpage, because of CORS. 

The workaround the CORS blocking, a solution is to use a package `cors`.


&nbsp;
### 2.2 EmbeddedJS webpage

#### 1. Receive parameters from ExpressJS

As mentioned in the previous section, the express-js web server passes a parameter object to the embedded-js webpage, 
one parameter is `robot_ip`, 
and the embedded-js webpage can use it by `<%= robot_ip %>`. 

Here is a fragment of [the embedded-js webpage](./S06E08_src/src/Mushibot20250120/test/teleop_website/views/index.ejs#L310). 

~~~
<script>
        window.INITIAL_STATE = {
            ROBOT_IP: "<%= robot_ip %>", 
            NOW_STR: "<%= now_str %>",
            WEBSITE_IP: "<%= website_ip %>"    
        };


        function socket_init() {         
            console.log("Connecting to mushibot, IP = " + window.INITIAL_STATE.ROBOT_IP);
            console.log("Website IP = " + window.INITIAL_STATE.WEBSITE_IP);
            console.log("Now timestamp = " + window.INITIAL_STATE.NOW_STR);

            // 初始化websocket客户端content
            // socket = new WebSocket('ws://' + window.INITIAL_STATE.ROBOT_IP + ':81/'); // sta模式
            websocket_connect_with_retries();
        }
...
</script> 
~~~

1. `window.INITIAL_STATE`
  
   We assigned a variable `INITIAL_STATE` to the global variable `window`,
   to make it convenient for the javascript to use the variable.

2. `window.INITIAL_STATE = {ROBOT_IP: ...}`
  
   We asked `INITIAL_STATE` to contain a object, and in the object there is key-value pairs
   including `ROBOT_IP`, `NOW_STR` and `WEBSITE_IP`.

3. `window.INITIAL_STATE = {ROBOT_IP: "<%= robot_ip %>", ...}`
  
   As mentioned above, the express-js web server passes a parameter `robot_ip` to the embedded-js webpage.

   The javascript can use the `robot_ip` parameter by `<%= robot_ip %>`.

   By the way, [the title of the webpage](./S06E08_src/src/Mushibot20250120/test/teleop_website/views/index.ejs#L265)
   also use `robot_ip` parameter.

   ~~~
   <h3> 已经与机器人 ( IP = <%= robot_ip %> ) 连线了 </h3>
   ~~~

4. `new WebSocket('ws://' + window.INITIAL_STATE.ROBOT_IP + ':81/')`

   Javascript used `window.INITIAL_STATE.ROBOT_IP` to initialize a websocket client.

   `window.INITIAL_STATE.ROBOT_IP`'s value is from `<%= robot_ip %>`.

   `<%= robot_ip %>` parameter is passed to the embedded-js webpage by the express-js web server.

   The value of the `<%= robot_ip %>` parameter is received by the the express-js web server from the mushibot.

   The mushibot sends the `robot_ip` by http POST to the express-js web server.


&nbsp;
#### 2. WebSocket client

~~~
        var tries = 3;
        function websocket_bind_events() {
            socket.onopen = () => {
                console.log(`WebSocket.onopen(), readyState: '${socket.readyState}'`);
            };
            socket.onerror = () => {
                console.log(`WebSocket.onerror(), readyState: '${socket.readyState}'`);

                if(tries > 0) {
                    tries--;
                    setTimeout(() => {websocket_connect_with_retries();}, 1000);  
                } else {
                    let test_http_get = "http://" + window.INITIAL_STATE.WEBSITE_IP + ":3000/hello/邓侃";
                    console.log("test_http_get: '" + test_http_get + "'");
                    throw new Error("Maximum websocket retries reached, report to webserver.");
                }
            };
        };

        function websocket_connect_with_retries() {
            let ws_url = 'ws://' + window.INITIAL_STATE.ROBOT_IP + ':81/';

            console.log("Try to connect to: '" + ws_url + "'");
            socket = new WebSocket(ws_url);

            setTimeout(websocket_bind_events, 1000);
            console.log(`WebSocket.new(), readyState: '${socket.readyState}'`);
        }


        function websocket_send(payload_str) {
            if (socket.readyState == socket.OPEN) {
                console.log(payload_str);
                socket.send(payload_str);
            }
            else {            
                websocket_connect_with_retries();

                if (socket.readyState == socket.OPEN) {
                    console.log(payload_str);
                    socket.send(payload_str);
                }
                else {   
                    console.log("无法连接到 websocket server，已经向 webserver 汇报了。");
                }            
            }
        }
~~~

1. `socket.onopen` and `socket.onerror`, are two asynchronous websocket client events.

   `function websocket_bind_events()` is the handler, waiting for those events and handling them.

2. In case `socket.onerror` receives message that `new WebSocket(ws_url)` fails,
   that means the browser cannot set up the websocket connection to the mushibot's websocket server. 

   The browser will try to `new WebSocket(ws_url)`, i.e. try to connect 3 times.

   The time interval is totally 2000 milisecond, because

   * In `function websocket_bind_events()`, there is `setTimeout(() => {websocket_connect_with_retries();}, 1000);`,
  
   * In `function websocket_send()`, there is `setTimeout(websocket_bind_events, 1000);`.
  
3. Referring to [`websocket.js`](https://github.com/websockets/ws/blob/master/lib/websocket.js#L38),
   `websocket.readyState` has `CONNECTING`, `OPEN`, `CLOSING', `CLOSED`, 4 states.

   Only when `if (socket.readyState == socket.OPEN)`, the browser is ready to send data to and receive data from the mushibot. 

4. In `function websocket_bind_events()`, when the event handler receives `socket.onopen()` event,
   it doesn't guarantee that the socket's `readyState` is `OPEN`, that means the socket is ready to use.

   It may take quite long, usually more 30 seconds, for `new WebSocket(ws_url)` to complete its `CONNECTING` stage. 



&nbsp;
## 3. Robot 3-tier system architecture

To make the mushibot system more modular, 
we massively reconstruct [the previous system](./S06E07_src/src/Mushibot20250114)
into a 3-tier system architecture. 

1. [The upper_tier](./S06E08_src/src/Mushibot20250120/src/upper_tier)

   The upper tier consists of the source codes that are not related to the mushibot.
   That means when the mushibot changes its motors, servos, wheels, IMU, even its legs and mechanical structure,
   the upper tier's source codes don't have to update.

   The upper tier's source codes rely on Arduino-ESP32 modules.
   Only when we change the mushbot's CPU from ESP32 to other chips, we have to update the upper tier's source code. 

2. [The middle tier](./S06E08_src/src/Mushibot20250120/src)

   The middle tier consists of `main.cpp` and other source codes.
   The middle tier is the bridge between the upper tier and the lower tier.


3. [The lower tier](./S06E08_src/src/Mushibot20250120/src/lower_tier)

   The lower tier consists of the source codes that are closely related to the mushibot.
   That means when the mushibot changes its motors, servos, wheels, IMU, even its legs and mechanical structure,
   the lower tier's source codes have to update to keep aligned with those changes.

   For example, [`motion_controller`](./S06E08_src/src/Mushibot20250120/src/lower_tier/motion_controller.h)
   relies on reading the IMU data, controlling the wheel motor speeds, and controlling the angular positions of the leg servos. 
   And these reading and controlling rely on the electronic components of [the mushibot system](./S06E03_anatomy_wheel_legged_bot.md)
   
     
&nbsp;
### 3.1 Http client in the upper tier

In [the previous blog](./S06E07_mushibot_wifi_ws_http.md#4-https-client), 
we explained how we implemented [https client](./S06E07_src/src/Mushibot20250114/src/wswifi.cpp#L171) for https GET. 

This time, we implemented http client for both GET and POST.

[The following source code fragment](./S06E08_src/src/Mushibot20250120/src/upper_tier/telecomm_channel.cpp#L237) 
implements http client for POST, with payload in json. 

~~~
String TelecommChannel::http_post(String http_url, JsonDocument payload_json) {
    HTTPClient http_client;
    int http_res_code;
    String http_res_str;

    if (WiFi.status() == WL_CONNECTED) {
        http_client.begin(http_url + "/post_json");
        http_client.addHeader("Content-Type", "application/json");

        String payload_str; 
        payload_json["datatype"] = "json";
        serializeJson(payload_json, payload_str);

        http_res_code = http_client.POST(payload_str);

        if (http_res_code == HTTP_CODE_OK) {            
            http_res_str = http_client.getString();
            Log.verboseln("The following content is retrieved from '%s' by 'HTTP POST':", http_url.c_str());
            Log.verboseln(http_res_str.c_str());
            Log.verboseln("The above content is retrieved from '%s' by 'HTTP POST'.\n", http_url.c_str());
        }
        else {
            Log.warningln("Cannot access '%s' for http POST, http code is: '%d'\n", 
                http_url.c_str(), http_res_code);
        }

        http_client.end();
    }

    return http_res_str;
}
~~~

1. `if (WiFi.status() == WL_CONNECTED)`

   Here we assumed that the mushibot has already connected to the wifi.

   [`String TelecommChannel::connect_wifi(String ssid, String password)`](./S06E08_src/src/Mushibot20250120/src/upper_tier/telecomm_channel.cpp#L133)
    handles the connection to the wifi. 

2. `http_client.begin(http_url + "/post_json")`

   The http client connects to our teleoperation website whose URL is `http_url`.

   Referring to the express-js web server's source code,
   [the route "/post_json"](./S06E08_src/src/Mushibot20250120/test/teleop_website/app.js#L55)
   is dedicated for http POST requests.

3. `http_client.addHeader("Content-Type", "application/json")`

   We must specify in the http request header, that the `Content-Type` is `application/json`.

   In this way, we trigger the express-js web server to ask
   [the "bodyParser" to process](./S06E08_src/src/Mushibot20250120/test/teleop_website/app.js#L13)
   the http POST request's body as a json payload.

4. `serializeJson(payload_json, payload_str)`

   Serialize the json payload `payload_json`, into a String `payload_str`.

5. `http_client.POST(payload_str)`

   Our `http_client` is an instance of
   [`arduino-esp32 HTTPClient`](https://github.com/espressif/arduino-esp32/blob/master/libraries/HTTPClient/src/HTTPClient.h).

   Referring to its source code
   of ["sendRequest"](https://github.com/espressif/arduino-esp32/blob/master/libraries/HTTPClient/src/HTTPClient.cpp#L562),
   both GET and POST, the request payload must be a string.

6. `String http_res_str = http_client.getString()`

   When [our express-js web server](./S06E08_src/src/Mushibot20250120/test/teleop_website/app.js#L58)
   receives and handles the http POST request from the mushibot, it sends back response in string. 


&nbsp;
### 3.2 `main.cpp` in the middle tier

All the global variables and functions are defined in 
[`main.cpp`](./S06E08_src/src/Mushibot20250120/src/main.cpp)

All the network event handlers are implemented here as global functions, for two reasons,

1. It is NOT allowed to use
   [any member functions for any system interrupt services](https://isocpp.org/wiki/faq/pointers-to-members#memfnptr-vs-fnptr-more)
    including network event handlers.

3. To make it convenient to maintain, we move all the global variables and functions in `main.cpp`.

&nbsp;

For example, 

1. in the upper tier
   [`TelecommChannel::setup_telecomm()`](./S06E08_src/src/Mushibot20250120/src/upper_tier/telecomm_channel.cpp#L61)
   takes charge of receiving remote commands via [`WebSocketsServer`](./S06E08_src/src/Mushibot20250120/src/upper_tier/telecomm_channel.h#L50), 

   ~~~
   void TelecommChannel::setup_telecomm() {
       ...
       // Setup the websocket. 
       websocket.begin();
       websocket.onEvent(handle_WebsocketEvents);
       Log.traceln("WebSocketsServer is ready.\n");
       ...
   ~~~

2. The callback function for the websocket events is [`handle_WebsocketEvents()`](./S06E08_src/src/Mushibot20250120/src/main.cpp#L44),
   defined in `main.cpp`. 

   `handle_WebsocketEvents()` wants to call 
   [`TeleopProtocol::parse_command(String &teleop_command)`](./S06E08_src/src/Mushibot20250120/src/upper_tier/teleop_protocol.cpp#L11)
   to parse the remote command payload, and store the commands in `TeleopProtocol` member variables. 

   ~~~
   void handle_WebsocketEvents(
       uint8_t num,
       WStype_t type,
       uint8_t * payload,
       size_t length) 
   {
       // Figure out the type of WebSocket event
       switch (type) {
           ...
           case WStype_TEXT:     
               if (length > 0) {
                   char payload_chars[length];
                   sprintf(payload_chars, "%s", payload);
                   String payload_str = String(payload_chars);

                   Log.noticeln("WebSocket Client: '%u', Payload: '%s'.\n", num, payload_str.c_str());
                   protocol.parse_command(payload_str);
               }
            ...
     ~~~


&nbsp;

Now the challenge is that as an event handler, `handle_WebsocketEvents()` can not be a member function of any class 
[as previously mentioned](https://isocpp.org/wiki/faq/pointers-to-members#memfnptr-vs-fnptr-more). 

As a solution, 

1. We initialize an object instance of 
   [`TeleopProtocol protocol = TeleopProtocol()`](./S06E08_src/src/Mushibot20250120/src/upper_tier/teleop_protocol.cpp)
   in [`main.cpp`](./S06E08_src/src/Mushibot20250120/src/main.cpp#L12) as a global variable. 

2. We define [`handle_WebsocketEvents()`](./S06E08_src/src/Mushibot20250120/src/main.cpp#L44) in `main.cpp`.
   as a global function.

And now, it is perfectly legal for the global function `handle_WebsocketEvents()` to call the global variable `protocol`.

~~~
#include "upper_tier/teleop_protocol.h"
TeleopProtocol protocol = TeleopProtocol();

void handle_WebsocketEvents(
  uint8_t num,
  WStype_t type,
  uint8_t * payload,
  size_t length) 
{
  // Figure out the type of WebSocket event
  switch (type) {
      ...
      case WStype_TEXT:     
          if (length > 0) {
              char payload_chars[length];
              sprintf(payload_chars, "%s", payload);
              String payload_str = String(payload_chars);

              Log.noticeln("WebSocket Client: '%u', Payload: '%s'.\n", num, payload_str.c_str());
              protocol.parse_command(payload_str);
          }
      ...
   ~~~
    


&nbsp;
### 3.3 `robot_commander` in the middle tier

After the commands from a remote human user have been received by 
[`TelecommChannel`](./S06E08_src/src/Mushibot20250120/src/upper_tier/telecomm_channel.cpp#L61), 
parsed and stored in 
[`TeleopProtocol`](./S06E08_src/src/Mushibot20250120/src/main.cpp#L44),
[`RobotCommander`](./S06E08_src/src/Mushibot20250120/src/robot_commander.cpp#L19) 
dispatches the tasks to the related functions of 
[`MotionController`](./S06E08_src/src/Mushibot20250120/src/lower_tier/motion_controller.h).

`RobotCommander` is a bridge between `TeleopProtocol` of the upper tier, and `MotionController` of the lower tier.

[RobotCommander accesses TeleopProtocol](./S06E08_src/src/Mushibot20250120/src/robot_commander.cpp#L3)
as a global variable. 

~~~
extern TeleopProtocol protocol;
~~~

Meanwhile, [RobotCommander uses MotionController](./S06E08_src/src/Mushibot20250120/src/robot_commander.h#L19)
as a member variable. 

~~~
MotionController motion_controller = MotionController();
~~~

Two questions here,

1. How about adding a member variable to `RobotCommander` class, as a pointer to the global variable `TeleopProtocol`?

   Yes, it is legal.

   But to avoid the confusion about the origin of `TeleopProtocol` instance, we decide to keep it simple.
   We use all global variables in the `extern` way,
   rather than a member variable pointing to any global variables. 

2. How about asking `main.cpp` to initialize an object instance for `MotionController` as another global variable,
   and then asking `RobotCommander` to access `MotionController` in the same way as `TeleopProtocol`?

   Yes, it is legal.

   But we decide to keep the amount of global variables and global functions as small as possible,
   in order to make the system more modular.

   That is to say, in case we can use member variables and member functions,
   we don't use them as global variables and global functions. 


&nbsp;
### 3.4 `motion_controller` in the lower tier

[`motion_controller`](./S06E08_src/src/Mushibot20250120/src/lower_tier/motion_controller.h) in the lower tier
will consist of various motion control algorithms. 
     
For the time being, `motion_controller` is a skeleton. 
With more and more motion control algorithms, `motion_controller` will grow big. 

Sooner or later, algorithms may not be powerful enough for mushibot. By then, we will use AI models for the motion control.

Sometimes we use the terms "algorithm" and "AI model" interchangeably, but more often, 
we use "AI models" for those complex algorithms, especially when their internal workflows are not deterministic. 


&nbsp;
## 4. Future work

Implement the various motion control algorithms, including 

1. How to stand upright or squat down, and keep balanced.
2. How to jump high or jump long.
3. How to roll over and stand up after falling down.
4. How to run steadily across the rugged ground。


&nbsp;
## 5. Demo

Click the following image to view a video of a simple demo.

The demo shows the entire dataflow, 

1. A human user clicked a button on the webpage of the teleoperation website, to send a command to the mushibot.
   
2. The mushibot received the remote command via Websocket, and printed out the log in the Serial Monitor.

3. Following the command, the mushibot moved his legs and wheels.

   [![Mushibot's teleoperation from a website](https://img.youtube.com/vi/CrvC4N_4zzU/hqdefault.jpg)](https://www.youtube.com/watch?v=CrvC4N_4zzU)    


   



