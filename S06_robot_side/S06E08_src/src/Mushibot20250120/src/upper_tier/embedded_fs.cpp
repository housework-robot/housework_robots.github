#include "embedded_fs.h"


EmbeddedFS::EmbeddedFS() {
}

EmbeddedFS::~EmbeddedFS() {
}

void EmbeddedFS::setup_embeddedfs() {
    // LittleFS.begin(bool formatOnFail, const char *basePath, uint8_t maxOpenFiles, const char *partitionLabel)
    // if (!LittleFS.begin(true, "/littlefs", 10U, "littlefs")) {
    if (!LittleFS.begin(true, "/spiffs", 10U, "spiffs")) {
    // if (!SPIFFS.begin(true, "/spiffs", 10U, "spiffs")) {
    // if (!SPIFFS.begin(true)) {
        Log.warningln("LittleFS mount failed.");
        return;
    }
    else {
        Log.traceln("Successfully mounts LittleFS at '%s'. ",
            LittleFS.mountpoint()
        );        
    }   

    // Verify that the SPIFSS file system works well.
    // List file directory with 3 levels. 
    list_dir("/", 3);  Log.traceln("\n");

    write_file("/subdir/test.txt", "Hello: 20250106, 22:04");
    read_file_to_serial("/subdir/test.txt");
    
    std::vector<String> cert_list = list_certificates();
    Log.verboseln("Following is the certificates in filesystem: ");
    for (int i = 0; i < cert_list.size(); i++) {
        Log.verboseln(" [%d] %s", i, cert_list[i].c_str());
    }
    Log.verboseln("\n");
}

void EmbeddedFS::loop_embeddedfs() {

}



std::vector<String> EmbeddedFS::list_certificates() {
    std::vector<String> cert_list;

    File root = LittleFS.open("/cert_store");

    File file = root.openNextFile();
    while (file) {
        cert_list.push_back(file.name());

        file = root.openNextFile();
    }

    return cert_list;
}

void EmbeddedFS::list_dir(String dir_name, int levels) {
    const char *_dir_name = dir_name.c_str();
    Log.traceln("Listing directory: '%s'", dir_name);
    // Serial.printf("-- Notice that SPIFSS doesn't recognize directories, but it can find the files inside subdirs. --\n\n");

    File root = LittleFS.open(_dir_name);
    // File root = LittleFS.open(_dir_name);
    if (!root) {
        Log.warningln("Failed to open directory: %s.", _dir_name);
        return;
    }
    if (!root.isDirectory()) {
        Log.warningln("'%s' not a directory.", _dir_name);
        return;
    }

    File file = root.openNextFile();
    while (file) {

        if (file.isDirectory()) {
            Log.traceln("  DIR : '%s'", file.name());
            
            if (levels) {
                list_dir(file.path(), levels - 1);
            }
        } else {
            Log.traceln("  FILE: '%s', SIZE: %d ", file.name(), file.size());
        }
        file = root.openNextFile();
    }
}


void EmbeddedFS::create_dir(String dir_path) {
    const char *_dir_path = dir_path.c_str();

    if (LittleFS.mkdir(_dir_path)) {
        Log.traceln("Successfully create directory: '%s'.", _dir_path);
    } else {
        Log.warningln("Fail to create directory: '%s'.", _dir_path);
    }
}

void EmbeddedFS::delete_dir(String dir_path) {
    const char *_dir_path = dir_path.c_str();

    if (LittleFS.rmdir(_dir_path)) {
        Log.traceln("Successfully delete directory: '%s'.", _dir_path);
    } else {
        Log.warningln("Fail to delete directory: '%s'.", _dir_path);
    }
}


void EmbeddedFS::write_file(String file_dirname, String msg) {
    const char *_file_dirname = file_dirname.c_str();
    const char *message = msg.c_str();
    String sub_msg = msg.substring(0, 5);

    File file = LittleFS.open(_file_dirname, FILE_WRITE);
    if (!file) {
        Log.warningln("Failed to open file '%s' for writing.", _file_dirname);
        return;
    }

    if (file.print(message)) {
        Log.traceln("Successfully write '%s...' to file '%s'.", sub_msg, _file_dirname);
    } else {
        Log.warningln("Failed to write to file '%s'.", _file_dirname);
    }
    file.close();
}

void EmbeddedFS::append_file(String file_dirname, String msg) {
    const char *_file_dirname = file_dirname.c_str();
    const char *message = msg.c_str();
    String sub_msg = msg.substring(0, 5);

    File file = LittleFS.open(_file_dirname, FILE_APPEND);
    if (!file) {
        Log.warningln("Failed to open file '%s' for appending.", _file_dirname);
        return;
    }

    if (file.print(message)) {
        Log.traceln("Successfully append '%s...' to file '%s'.", sub_msg, _file_dirname);
    } else {
        Log.warningln("Failed to append to file '%s'.", _file_dirname);
    }
    file.close();
}

void EmbeddedFS::rename_file(String file_dirname1, String file_dirname2) {
    const char *_file_dirname1 = file_dirname1.c_str();
    const char *_file_dirname2 = file_dirname2.c_str();

    if (LittleFS.rename(_file_dirname1, _file_dirname2)) {
        Log.traceln("Successfully rename file '%s' to file '%s'.", 
            _file_dirname1, _file_dirname2);
    } else {
        Log.warningln("Failed to rename file '%s' to file '%s'.", 
            _file_dirname1, _file_dirname2);
    }
}

void EmbeddedFS::delete_file(String file_dirname) {
    const char *_file_dirname = file_dirname.c_str();

    if (LittleFS.remove(_file_dirname)) {
        Log.traceln("Successfully delete file '%s'.", _file_dirname);
    } else {
        Log.warningln("Failed to delete file '%s'.", _file_dirname);
    }
}


String EmbeddedFS::read_file(String file_dirname) {
    const char *_file_dirname = file_dirname.c_str();
    String file_content;

    File file = LittleFS.open(_file_dirname);
    if (!file || file.isDirectory()) {
        Log.warningln("Failed to open file '%s' for reading.", _file_dirname);
        return "";
    }

    if (file.available()) {
        file_content = file.readString();
    }
    file.close();

    return file_content;
}


// The purpose of this function is to show how to read bytes from file.
// In most case, you have to write your own read_file() to implement your own workflow.
void EmbeddedFS::read_file_to_serial(String file_dirname) {
    const char *_file_dirname = file_dirname.c_str();

    File file = LittleFS.open(_file_dirname);
    if (!file || file.isDirectory()) {
        Log.warningln("Failed to open file '%s' for reading.", _file_dirname);
        return;
    }

    Log.traceln("");
    Log.traceln("Read from file '%s': ", _file_dirname);

    String file_content;
    while (file.available()) {
        char c = file.read();
        file_content += c;
    }
    file.close();

    Log.traceln("%s", file_content.c_str());
    Log.traceln("End of file '%s'.\n", _file_dirname);
}
