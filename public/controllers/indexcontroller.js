var meanApp = angular.module('meanApp',['ngRoute','HomeController','HomeService']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      }).
      /*
      when('/login', {
        templateUrl: 'login.html',
        controller: 'loginCtrl'
      }).
       
        when('/edit/:id', {
        templateUrl: 'edit.html',
        controller: 'EditCtrl'
      }). 
      */
      otherwise({
        redirectTo: '/home'
      });
  }]);



myApp.controller('homeCtrl',['$scope','$http','$location',function($scope,$http,$location){
    console.log("hello world from controller");
    
    $scope.goToAdd = function()
    {
        $location.url('/add');
    }
    $scope.goToList = function()
    {
        $location.url('/list');
    }
    
}]);
