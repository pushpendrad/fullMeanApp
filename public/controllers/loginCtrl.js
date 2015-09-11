var loginController = angular.module('LoginController',[]);
console.log("inside Login Controller");

loginController.controller('loginCtrl',['$scope','$http', function($scope,$http){
	    $scope.login= function(){
            console.log($scope.user.userName);
            console.log($scope.user.password);
        };  
    }]);