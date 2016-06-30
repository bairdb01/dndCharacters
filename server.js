var express = require("express"),
    schemas = require("./models/character.js");
var app = express();


app.use("/client", express.static(__dirname + "/client"));

//App requests
app.get("/home", function(req, res){
  res.sendFile(__dirname + "/views/home.html");
});

// app.post("/", function(req, res){
  // var newChar = new Character;
  // newChar.name = ;
  // newChar.class = ;
  // newChar.str = ;
  // newChar.dex = ;
  // newChar.con = ;
  // newChar.int = ;
  // newChar.wis = ;
  // newChar.cha = ;
  // newChar.notes = ;
// })

// Listen on a port
var port  = process.env.PORT || 3000
app.listen(port, function(){
  console.log("Listening on port " + port);
});
