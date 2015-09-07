console.log("Inside Master Controller");
var meanApp = angular.module('meanApp',['ngRoute','HomeController','HomePageController']);

meanApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      }).
      when('/homePage', {
        templateUrl: 'views/homePage.html',
        controller: 'homePageCtrl'
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
        redirectTo: '/homePage'
      });
  }]);