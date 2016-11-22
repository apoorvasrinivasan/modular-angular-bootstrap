'use strict';
 define( [

  ], 
  function ( ){
    var SignupController = function( $rootScope, $scope,AuthService){
       var userdata = {
         email:$scope.username,
         password:$scope.password
       }
       $scope.submit = function()
      {
        // console.log(AuthService.login)
        AuthService.reg(userdata);
      }
    }
  
 
 return ['$rootScope', '$scope','AuthService', SignupController ];
})