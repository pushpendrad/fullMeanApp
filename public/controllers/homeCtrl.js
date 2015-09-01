var homecontroller = angular.module('HomeController',[]);
console.log("inside Home COntroller");
homecontroller.controller('homeCtrl',['$scope','$http', function($scope,$http){
        $http.get('/alm/projectdetails').success(function(response){
            $scope.projectDetails = response;
        });
         
    }]);
    