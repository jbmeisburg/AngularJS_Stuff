var app3 = angular.module('app3', []);

app3.controller('gListCtrl', function($scope) {

  $scope.groceries= [
    {item: "Tomatoes", purchased: false},
    {item: "Bread", purchased: false},
    {item: "Eggs", purchased: false},
    {item: "Hummus", purchased: false},
    {item: "Beer", purchased: false},
    {item: "Digestives", purchased: false},
    {item: "Formula", purchased: false},
    {item: "Ben & Jerry's", purchased: false}
  ];

  $scope.getList = function(){
    return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html"
  };

});
