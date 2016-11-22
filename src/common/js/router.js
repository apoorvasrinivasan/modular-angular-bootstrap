define([],function(){
  var routes = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
    .otherwise('404');
  $stateProvider
    .state('/', {
      url:'/',
      templateUrl: '/common/views/index.html',
      controller:"IndexController"
    })
    .state('404', {
      url:'/404',
      templateUrl: '/common/views/404.html'
    })
        
  }
   return  ['$stateProvider', '$urlRouterProvider', routes]
})
