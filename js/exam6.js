var app6 = angular.module('app6', []);

app6.controller('heroCtrl', function($scope, $rootScope) {
  $scope.hero = [
    {realName: "Wade Winston Wilson", heroName: "Deadpool"},
    {realName: "Barry Allen", heroName: "Flash"},
    {realName: "Oliver Queen", heroName: "Green Arrow"},
    {realName: "Rachel Roth", heroName: "Raven"},
    {realName: "Peter Parker", heroName: "Spiderman"}

  ];

  $scope.getHeroData = function(){
    heroSearch($scope.heroName);
  };

  function heroSearch(name) {
    $scope.heroData = "Not found";
    for (var i = 0; i < $scope.hero.length; i++) {
      if ($scope.hero[i].heroName === name) {
        $scope.heroData = $scope.hero[i].realName +
        " is " + $scope.hero[i].heroName;

      }
    }
  }

  $scope.$on("heroUpdated", function(event, args){
    $scope.hero.push({
      realName: args.realName, heroName: args.heroName
    });
  });

  $scope.addHeroData = function(realName, heroName){
    $rootScope.$broadcast("heroUpdated",
  {
    realName: realName, heroName: heroName
  });
  console.log("Real: " + realName + "Hero: " + heroName);
};

});
