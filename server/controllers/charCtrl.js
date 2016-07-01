var Character = require("../models/character");

module.exports.createChar = function (req, res) {
  var char = new Character(req.body);
  // Save to the database
  char.save(function(err, result){
    if (err) throw err;
    res.json(result);
  });
};
