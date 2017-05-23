var app8 = angular.module('app8', ['weatherFilters']);

app8.controller('mainCtrl', function($scope) {

  $scope.students = [
    {name: "George Stewart", gpa: 3.5},
    {name: "Andrew Kang", gpa: 4.0},
    {name: "Sombuddo Unce", gpa: 1.0},
    {name: "Bud Uglee", gpa: 4.5}
  ];

  $scope.student = {
    gpas:[
      {name: "George Stewart", gpa: 3.5},
      {name: "Andrew Kang", gpa: 4.0},
      {name: "Sombuddo Unce", gpa: 1.0},
      {name: "Bud Uglee", gpa: 4.5}
    ]
  };

  $scope.currDate = new Date();

  $scope.randomStr = "Lorem ipsum dolor sit amet blady blah";

  $scope.randArray = [
    "This",
    "Is",
    "Random",
    "Humor",
    "Hope",
    "Everyone",
    "Is",
    "Enjoying",
    "It"
  ];

  $scope.weather = [
    {day: "Monday", rain:false},
    {day: "Tuesday", rain:true}
  ];

});
