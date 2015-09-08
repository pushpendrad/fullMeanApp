console.log("Inside Master Controller");
var meanApp = angular.module('meanApp',['ngRoute','HomeController','HomePageController']);

meanApp.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      }).
      when('/homePage', {
        templateUrl: 'views/homePage.html',
        controller: 'homePageCtrl'
      }).
      when('/tabs', {
        templateUrl: 'views/tabs.html',
        controller: 'homePageCtrl'
      }).
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      }).
       /*
        when('/edit/:id', {
        templateUrl: 'edit.html',
        controller: 'EditCtrl'
      }). 
      */
      otherwise({
        redirectTo: '/homePage'
      });
      $httpProvider.defaults.headers.post["Content-Type"] = "Application/JSON";
  }]);