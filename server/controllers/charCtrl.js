var Character = require("../models/character");

//Save a character to the database
module.exports.createChar = function (req, res) {
  var char = new Character(req.body);
  // Save to the database
  char.save(function(err, results){
    if (err) throw err;
    res.json(results);
  });
};

// Return a list the characters in the database
module.exports.listChars = function(req, res){
  var chars = [];
  Character.find({}, function(err, results){
    if (err) throw err;
    res.json(results);
  })
};
