var app4 = angular.module('app4', []);

app4.controller('eventCtrl', function($scope) {

  $scope.dayTimeButton = true;

  $scope.capitals = [
    {"City": "Atlanta",
    "State": "Georgia"},
    {"City": "Louisville",
    "State": "Kentucky"},
    {"City": "Albany",
    "State": "New York"},
    {"City": "Jefferson City",
    "State": "Missouri"}
  ];

  });
