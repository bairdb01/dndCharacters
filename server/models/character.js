var mongoose   = require("mongoose");
var dbURL = "mongodb://localhost:27017/dnd"

// Schema for the character object
var charSchema = new mongoose.Schema({
  name : String,
  class : String,
  notes : String,
  stats : [
    {name : String, value : Number},
    {name : String, value : Number},
    {name : String, value : Number},
    {name : String, value : Number},
    {name : String, value : Number},
    {name : String, value : Number}
  ]
}, {strict: true});

module.exports =  mongoose.model("Character", charSchema);
