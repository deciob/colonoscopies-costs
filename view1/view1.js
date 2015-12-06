'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($http, $scope) {

  $http.get('./data/2013.06.02.NYTColonscopyData.csv').then(function(res) {

    var data = d3.csv.parse(res.data, function(d) {
      return {
        city: d.City,
        state: d.State,
        low: +d.Low,
        high: +d.High,
      };
    });

    var nestedData = [[], []];
    data.forEach(function(d) {
      nestedData[0].push([d.city, d.low]);
      nestedData[1].push([d.city, d.high]);
    });

    $scope.barData = nestedData;

    //console.log(JSON.stringify($scope.barData, null, 2));

  }, function(err) {

  });

});
