var homePageController = angular.module('HomePageController',[]);
console.log("inside HomePage COntroller");
homePageController.controller('homePageCtrl',['$scope','$http', 
	function($scope,$http){
	    $scope.signUp = function(){
    	    console.log($scope.user);
        	$http.post('/alm/register',$scope.user).success(function(response){
            	console.log(response);
        	});
    	};  
    }]);