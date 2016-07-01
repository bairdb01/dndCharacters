var app = angular.module("dndManager", ["ngAnimate", "ngMaterial", "ngResource"]);


app.controller("ManagerController", ["$scope", "$resource",
  function($scope, $resource){

    var Character = $resource("/api/character");

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

    // Save the character to the database
    $scope.saveChar = function(){
      var char = new Character($scope.character);
      console.log(JSON.stringify(char));
      char.$save(function(result){
        console.log("Saved " + JSON.stringify(result));
      })
    };
  }
]);
