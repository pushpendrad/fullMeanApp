var loginController = angular.module('LoginController',[]);
console.log("inside Login Controller");

loginController.controller('loginCtrl',['$scope','$http', function($scope,$http){
	    $scope.login= function(){
            console.log($scope.user.userName);
            console.log($scope.user.password);
	
            $http.get('/alm/register/'+ $scope.user.userName).success(function(response){
                var dBUser = response;
                    console.log(dBUser);  
                    //console.log('/alm/register/' + $scope.user.userName);
                    if(dBUser.password == $scope.user.password){
                        console.log("Login Successful");
                        //redirect to list page
                }
                else {  
                          console.log("Login Unsuccessful");
                //redirect to login page again
            }
            
    });   
        };  
        }  
    ]);
