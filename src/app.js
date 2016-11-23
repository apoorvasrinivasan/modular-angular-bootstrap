/**
 * Now let's start our AngularJS app...
 * which uses RequireJS to load  packages and code
 *
 */


  define([
      './common/js/router.js',
      './common/js/Mainmenu.js',
      './auth/AuthApp.js'
    ],
    function (routes,MenuApp, AuthApp)
    {
      /**
       * Specify main application dependencies...
       * one of which is the Authentication module.
       *
       * @type {Array}
       */
      
      

      var app, appName = 'app';
      app = angular.module(appName,
          [ "ui.router",MenuApp, AuthApp]
      );
      app.config(routes);
      app.controller("IndexController",['$scope',function($scope){
        $scope.title = "s"
      }])

      angular.bootstrap( document.body, [ appName ]);
      return app;
    }
  );


