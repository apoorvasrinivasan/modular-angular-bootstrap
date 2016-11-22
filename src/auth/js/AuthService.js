
  define( [
    ], function (){
    var service =  function($http){
      this.login = function(){
        return $http({
          method: 'GET',
          url: '/api/v1/login/',
          headers:{
            "Content-Type":"application/json",
            Authorization:"Basic YmxhaEBibGFoLmNvbTpwYXNzd29yZA=="
          }
        }).
        error(function(data, status){
          err(data, status);

        })
      };
      this.logout = function(){
        return $http({
                method: 'GET',
                url: '/api/v1/logout/',
              }).
              error(function(data, status){
                err(data, status);

              })
      }
      this.reg = function(data){
        return $http({
                method: 'POST',
                url: '/api/v1/signup/',
                data:data,
                headers:{
                  ContentType:"application/json"
                }
              }).
              error(function(data, status){
                err(data, status);

              })
      }
   // console.log(AuthService)

   }

   return  ['$http',service];
})
    function err(data, status){}