console.log("Inside Master Controller");
var meanApp = angular.module('meanApp',['ngRoute','HomeController','HomePageController','LoginController']);

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
<<<<<<< HEAD
	when('/mytabpane', {
        templateUrl: 'views/mytabpane.html',
      }).
      /*
=======
>>>>>>> controller
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      }).
      otherwise({
        redirectTo: '/homePage'
      });
      $httpProvider.defaults.headers.post["Content-Type"] = "Application/JSON";
  }]);