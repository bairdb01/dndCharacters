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

module.exports.updateChar = function(req, res){
  Character.update({name: {$eq : req.body.name}}, req.body, function(err, raw){
    if (err) throw err;
    //raw JSON {ok : 0/1, nModified : Number, n : #}
    res.json(raw);
  })
};
