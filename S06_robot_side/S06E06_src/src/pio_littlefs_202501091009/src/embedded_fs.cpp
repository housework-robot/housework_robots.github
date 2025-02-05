#include "embedded_fs.h"
#include <LittleFS.h>
// #include <SPIFFS.h>


EmbeddedFS::EmbeddedFS() {
}

EmbeddedFS::~EmbeddedFS() {
}

void EmbeddedFS::setup_embeddedfs() {
    // LittleFS.begin(bool formatOnFail, const char *basePath, uint8_t maxOpenFiles, const char *partitionLabel)
    if (!LittleFS.begin(true, "/littlefs", 10U, "littlefs")) {
    // if (!LittleFS.begin(true, "/littlefs", 10U, "spiffs")) {
    // if (!SPIFFS.begin(true, "/spiffs", 10U, "spiffs")) {
    // if (!SPIFFS.begin(true)) {
        Serial.printf("\n[WARN] SPIFFS mount failed. \n");
        return;
    }
    else {
        Serial.printf("\n[INFO] Successfully mounts SPIFFS at '%s'. \n",
            "LittleFS.mountpoint()"
        );        
    }   

    // Verify that the SPIFSS file system works well.
    // List file directory with 3 levels. 
    list_dir("/", 3);
    write_file("/subdir/test.txt", "Hello: 20250106, 22:04");
    read_file_to_serial("/subdir/test.txt");
}

void EmbeddedFS::loop_embeddedfs() {

}


void EmbeddedFS::list_dir(String dir_name, int levels) {
    const char *_dir_name = dir_name.c_str();
    Serial.printf("\n[INFO] Listing directory: '%s'\n", dir_name);

    File root = LittleFS.open(_dir_name);
    // File root = LittleFS.open(_dir_name);
    if (!root) {
        Serial.printf("\n[WARN] Failed to open directory: %s.\n", _dir_name);
        return;
    }
    if (!root.isDirectory()) {
        Serial.printf("\n[WARN] '%s' not a directory. \n", _dir_name);
        return;
    }

    File file = root.openNextFile();
    while (file) {

        if (file.isDirectory()) {
            Serial.print("  DIR : ");
            Serial.println(file.name());
            
            if (levels) {
                list_dir(file.path(), levels - 1);
            }
        } else {
            Serial.printf("  FILE: '%s', SIZE: %d \n", file.name(), file.size());
        }
        file = root.openNextFile();
    }
}


void EmbeddedFS::create_dir(String dir_path) {
    const char *_dir_path = dir_path.c_str();

    if (LittleFS.mkdir(_dir_path)) {
        Serial.printf("\n[INFO] Successfully create directory: '%s'.\n", _dir_path);
    } else {
        Serial.printf("\n[WARN] Fail to create directory: '%s'.\n", _dir_path);
    }
}

void EmbeddedFS::delete_dir(String dir_path) {
    const char *_dir_path = dir_path.c_str();

    if (LittleFS.rmdir(_dir_path)) {
        Serial.printf("\n[INFO] Successfully delete directory: '%s'.\n", _dir_path);
    } else {
        Serial.printf("\n[WARN] Fail to delete directory: '%s'.\n", _dir_path);
    }
}


void EmbeddedFS::write_file(String file_dirname, String msg) {
    const char *_file_dirname = file_dirname.c_str();
    const char *message = msg.c_str();
    String sub_msg = msg.substring(0, 5);

    File file = LittleFS.open(_file_dirname, FILE_WRITE);
    if (!file) {
        Serial.printf("\n[WARN] Failed to open file '%s' for writing.\n", _file_dirname);
        return;
    }

    if (file.print(message)) {
        Serial.printf("\n[INFO] Successfully write '%s...' to file '%s'.\n", sub_msg, _file_dirname);
    } else {
        Serial.printf("\n[WARN] Failed to write to file '%s'.\n", _file_dirname);
    }
    file.close();
}

void EmbeddedFS::append_file(String file_dirname, String msg) {
    const char *_file_dirname = file_dirname.c_str();
    const char *message = msg.c_str();
    String sub_msg = msg.substring(0, 5);

    File file = LittleFS.open(_file_dirname, FILE_APPEND);
    if (!file) {
        Serial.printf("\n[WARN] Failed to open file '%s' for appending.\n", _file_dirname);
        return;
    }

    if (file.print(message)) {
        Serial.printf("\n[INFO] Successfully append '%s...' to file '%s'.\n", sub_msg, _file_dirname);
    } else {
        Serial.printf("\n[WARN] Failed to append to file '%s'.\n", _file_dirname);
    }
    file.close();
}

void EmbeddedFS::rename_file(String file_dirname1, String file_dirname2) {
    const char *_file_dirname1 = file_dirname1.c_str();
    const char *_file_dirname2 = file_dirname2.c_str();

    if (LittleFS.rename(_file_dirname1, _file_dirname2)) {
        Serial.printf("\n[INFO] Successfully rename file '%s' to file '%s'.\n", 
            _file_dirname1, _file_dirname2);
    } else {
        Serial.printf("\n[WARN] Failed to rename file '%s' to file '%s'.\n", 
            _file_dirname1, _file_dirname2);
    }
}

void EmbeddedFS::delete_file(String file_dirname) {
    const char *_file_dirname = file_dirname.c_str();

    if (LittleFS.remove(_file_dirname)) {
        Serial.printf("\n[INFO] Successfully delete file '%s'.\n", _file_dirname);
    } else {
        Serial.printf("\n[WARN] Failed to delete file '%s'.\n", _file_dirname);
    }
}


// The purpose of this function is to show how to read bytes from file.
// In most case, you have to write your own read_file() to implement your own workflow.
void EmbeddedFS::read_file_to_serial(String file_dirname) {
    const char *_file_dirname = file_dirname.c_str();

    File file = LittleFS.open(_file_dirname);
    if (!file || file.isDirectory()) {
        Serial.printf("\n[WARN] Failed to open file '%s' for reading.\n", _file_dirname);
        return;
    }

    Serial.printf("\n[INFO] Read from file '%s': \n", _file_dirname);
    while (file.available()) {
        Serial.write(file.read());
    }
    file.close();
    Serial.printf("\n[INFO] End of file '%s'.\n", _file_dirname);
}
