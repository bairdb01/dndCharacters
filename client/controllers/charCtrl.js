//TODO:
//  Add a delete character button
//  Allow image link/upload
//  Exp Counter/Bar
//  Character Race
//  Dice roll for stats
//  Stat modifiers

var app = angular.module("dndManager", ["ngMaterial", "ngResource"]);

// TODO: merge update and create into the $save function
app.factory("Resource", ["$resource", function($resource){
  var data = $resource("/api/character/:name", {}, {
    update:{method:"PUT", params: {name : "@name", action : "update", format : ".json"}}
  });
  return data;
}]);


app.controller("ManagerController", ["$scope", "$resource", "Resource",
  function($scope, $resource, Resource){

    var Character = Resource;

    $scope.classes = [
      "Barbarian",
      "Bard",
      "Cleric",
      "Druid",
      "Fighter",
      "Wizard",
      "Monk",
      "Paladin",
      "Ranger",
      "Sorcerer",
      "Rogue",
      "Warlock"
    ];

    $scope.stats = [
      {"name" : "Strength", "value" : 0},
      {"name" : "Dexterity", "value" : 0},
      {"name" : "Constitution", "value" : 0},
      {"name" : "Intelligence", "value" : 0},
      {"name" : "Wisdom", "value" : 0},
      {"name" : "Charisma", "value" : 0}
    ]

    $scope.character = {
      "name" : "",
      "class" : "",
      "notes" : "Notes",
      "stats" : $scope.stats
    }

    $scope.chars = loadChars();

    // Load any previous characters from the database
    function loadChars(){
      Character.query(function(results){
        $scope.chars = results;
      });
    }

    // Set display to a new character
    $scope.loadChar = function (index){
      /** Need to confirm loss of data **/
      loadChars();
      $scope.character = $scope.chars[index];
      console.log($scope.character)
    };

    $scope.saveChar = saveChar;

    // Save the character to the database
    $scope.addChar = function(){
      // Verify that all required fields are filled
      var verified = verifyFields();
      if (verified){
        console.log(verified);
        return;
      }

      // Create character in database
      var char = new Character($scope.character);
      char.$save(function(result){
        console.log("Saved " + JSON.stringify(result));
        loadChars();
      });

    };

    // Check if empty fields
    function verifyFields(){
      if ($scope.character.name == "")
        return "Character requires a name";
      if ($scope.character.class == "") {
        return "Character requires a class";
      }
    }

    // Check if character already exists
    function charExists() {
      for (var index in $scope.chars){
        if($scope.chars[index].hasOwnProperty("name")) {
          if ($scope.chars[index].name == $scope.character.name) {
            console.log($scope.chars[index].name + " already exists!");
            return true;
          }
        }
      }
    }

    // Update a character in the database
    function updateChar(){
      var char = new Character();
      Character.update($scope.character.name, $scope.character);
    }

    // The save button method: either create new character or update
    function saveChar(){
      if (charExists()) {
        // Update rather than create a character
        updateChar();
        return;
      } else {
        // Create character in db
        $scope.addChar();
      }
    }

  }
]);
