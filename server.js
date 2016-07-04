var express = require("express"),
    mongoose = require("mongoose"),
    schemas = require("./server/models/character.js"),
    bodyParser = require("body-parser"),
    charCtrl = require("./server/controllers/charCtrl.js");

mongoose.connect("mongodb://localhost:27017/dnd");
var app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())

app.use("/client", express.static(__dirname + "/client"));

//App requests
app.get("/home", function(req, res){
  res.sendFile(__dirname + "/views/home.html");
});

//API Requests
app.get("/api/character", charCtrl.listChars);
app.put("/api/character/:name", charCtrl.updateChar);
app.post("/api/character", charCtrl.createChar);

// Listen on a port
var port  = process.env.PORT || 3000
app.listen(port, function(){
  console.log("Listening on port " + port);
});
