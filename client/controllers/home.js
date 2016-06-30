'use strict';

var app = angular.module("dndManager", ["ui.bootstrap", "ngAnimate"]);


app.controller("ManagerController", ["$scope",
  (function($scope){

    $scope.charName = "Temp Name";
    $scope.notes = "Notes...";
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
      {name : "Strength"},
      {name : "Dexterity"},
      {name : "Constitution"},
      {name : "Intelligence"},
      {name : "Wisdom"},
      {name : "Charisma"}
    ];

    $scope.saveChar = function(){
      console.log("Saved " + $scope.charName);
    };

  })
]);
