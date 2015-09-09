var loginController = angular.module('LoginController',[]);
console.log("inside Login Controller");


loginController.controller('loginCtrl',['$scope','$http', function($scope,$http){
	    $scope.signUp = function(){
    	   /*


    	   findone() method of the mongodb need to be implemented inside the registeration router
    	   
        	$http.post('/alm/register',$scope.user).success(function(response){
            	console.log(response);
				$scope.registerStatus = "Registered!";
        	}).
        	error(function(err){
        		console.log(err);
				$scope.registerStatus = "Not registered.";
        	}); */
    	};  
    }]);


