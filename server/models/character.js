var mongoose   = require("mongoose");
var dbURL = "mongodb://localhost:27017/dnd"

// Schema for the character object
var charSchema = new mongoose.Schema({
  name : {type : String, unique : true, required : true},
  class : {type : String, required : true},
  notes : String,
  stats : [
    {name : String, value : {type : Number, default : 0}},
    {name : String, value : {type : Number, default : 0}},
    {name : String, value : {type : Number, default : 0}},
    {name : String, value : {type : Number, default : 0}},
    {name : String, value : {type : Number, default : 0}},
    {name : String, value : {type : Number, default : 0}}
  ]
}, {strict: true});

module.exports =  mongoose.model("Character", charSchema);
