'use strict';
 define( [

  ], 
  function (){
    var LoginController = function( $rootScope, $scope,AuthService){
       $scope.username = "sdfsef";
       $scope.password = "";
       $scope.submit = function()
      {
        // console.log(AuthService.login)
        AuthService.login().then(function(data){
          localStorage.token = $base64.encode(data.data._items[0].token + ':');
        })
      }
    }
  
 
 return ['$rootScope', '$scope','AuthService', LoginController ];
})
