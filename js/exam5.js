var app5 = angular.module('app5', []);

app5.controller('gListCtrl', function($scope){

  $scope.groceries = [
    {item: "Tomatoes", purchased: false},
    {item: "Hummus", purchased: false},
    {item: "Beer", purchased: false},
    {item: "Potatoes", purchased: false},
    {item: "Turkey", purchased: false},
    {item: "Digestives", purchased: false},
    {item: "Formula", purchased: false},
    {item: "Chocolate", purchased: false}
  ];

  $scope.addItem = function(newItem) {
    if(!(newItem === undefined || newItem === "")){
      $scope.groceries.push({
        item: newItem, purchased: false
      });
      $scope.missingNewItemError = "";
    } else {
      $scope.missingNewItemError = "Please enter an item you Philistine";
    }
  };

});

app5.controller('userCtrl', function($scope) {
    $scope.user = [{
      fName: "Mario",
      lName: "Mario",
      street: "555 Five Blvd",
      subscribe: "Subscribe",
      delivery: "Email"
    }];

    $scope.saveUser = function(userInfo){
      if ($scope.userForm.$valid) {
        $scope.user.push({
          fName: userInfo.fName, lName: userInfo.lName, street:
          userInfo.street, subscribe: userInfo.subscribe,
          delivery: userInfo.delivery
        });
        console.log("User Saved");
      } else {
        console.log("Error: Couldn't Save User");
      }
    };

});
