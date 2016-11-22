require.config({
  paths:{
    angular:'/common/js/vendor/angular/angular',
    angularrouter:'/common/js/vendor/angular/angular-ui-router',
    base64:'/common/js/vendor/angular/base64',
    app:'/app',
  },
  shim:{
    'app':{
      deps:['angular', 'angularrouter', 'base64']
    },
    'base64':{
      deps:['angular'],
    },
    'angularrouter':{
      deps:['angular']
    }
  }
});
require( [ "app" ], function( app ){});