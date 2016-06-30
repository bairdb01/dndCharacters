var mongoose   = require("mongoose");
var dbURL = "mongo://localhost:3000"

// Schema for the character object
var charSchema = new mongoose.Schema({
  name : String,
  class : String,
  str : Number,
  dex : Number,
  con : Number,
  int : Number,
  wis : Number,
  cha : Number,
  notes : String
});

module.exports =  mongoose.model("Character", charSchema);
