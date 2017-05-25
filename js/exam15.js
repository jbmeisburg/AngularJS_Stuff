var app15 = angular.module('app15', []);

app15.controller('mainCtrl', function($scope, $http) {

  $scope.getData = function(){
    $http.get("playerData.json").success(
      function(data){
        $scope.players = data;
      }
    );
  }

});
