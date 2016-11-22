/**
 * Now let's start our AngularJS app...
 * which uses RequireJS to load  packages and code
 *
 */


  define([
      './common/js/router.js',
      './auth/AuthApp.js'
    ],
    function (routes, AuthApp)
    {
      console.log(AuthApp)
      /**
       * Specify main application dependencies...
       * one of which is the Authentication module.
       *
       * @type {Array}
       */
      
      var app, appName = 'app';
      app = angular.module(appName,
          [ "ui.router",AuthApp]
      );
      app.config(routes);
      app.controller("IndexController",['$scope',function($scope){
        $scope.title = "s"
      }])
      document.body.innerHTML = "<div ng-app = 'app'><div ui-view></div></div>";
      angular.bootstrap( document.body, [ appName ]);
      return app;
    }
  );


