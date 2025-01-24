const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


const multer = require("multer");
// for parsing multipart/form-data
const upload = multer();


const bodyParser = require("body-parser");
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

const cors = require('cors');
app.use(cors({origin: true, credentials: true}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});



var ip = require("ip");
var server_ip = ip.address();
console.log("website_ip: '" + server_ip + "'");

var content = "";
var mushibot_ip = "192.168.0.123";



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

    res.render(
        'index', {robot_ip: mushibot_ip, now_str: now_full_str, website_ip: server_ip}
    );
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


app.post("/post_json", (req, res) => {
    mushibot_ip = (req.body)["robot_ip"];
    console.log(`Robot local IP address: "${mushibot_ip}"`);
    res.send(`Robot local IP address: "${mushibot_ip}"`);
    // res.redirect('/');
});


app.post("/post_text", (req, res) => {
    if ((req.body)["datatype"] == "text") {
        content = (req.body)["content"];
        console.log(`Input submitted: "${content}"`);
        res.send(`Input submitted: "${(req.body)["content"]}"`);
    }
    else {
        res.send(`[ERROR] posted datatype: "${content}"`);
    }

});


app.post("/submit", (req, res) => {
    content = req.body.input;
    console.log(`Input submitted: "${content}"`);
    res.send(`Input submitted: "${content}"`);
});


app.get("/hello/:name", (req, res) => {
    content = req.params.name
    console.log(`Hello ${content}!`);
    res.send(`{\"Content\": \"Hello ${content}!\"}`);
}); 

app.get("/hello", (req, res) => {
    content = req.query.name
    console.log(`Hello ${content}!`);
    res.send(`Hello ${content}!`);
}); 


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
