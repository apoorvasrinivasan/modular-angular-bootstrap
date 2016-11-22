
 define([
   './js/AuthService.js',
   './js/LoginController.js',
   './js/SignupController.js',
  ],
  function (AuthService, LoginController,SignupController )
  {
   var moduleName = "auth.Authenticate";
   var authModule = angular.module(moduleName,[])
    .config([
     '$stateProvider',
        function($stateProvider) {
          $stateProvider.
           state('auth', {
            url: '/auth',
            template:"<div ui-view></div>"
          })
          .state('auth.login',{
            url:"/login",
            controller:'LoginController',
            templateUrl: '/auth/views/login.html',
          })
          .state('auth.signup',{
            url:"/signup",
            controller:'SignupController',
            templateUrl: '/auth/views/signup.html',
          });
        }
    ])
    .service('AuthService',AuthService)

    .controller( "LoginController",LoginController )
    .controller( "SignupController",SignupController );
    

    return moduleName ;
  });
