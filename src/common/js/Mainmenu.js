define( [], 
  function (){
    var moduleName = "mainMenu";
    var menuModule = angular.module(moduleName,[])
    .service('menuService',function(){
      var _menu = [];

      this.getItems =  function() {
        return _menu;
      }
      
      this.setMenu = function(menu){
        _menu  = menu;
      }
      this.add = function(item){
        _menu.push(item);
      }
    })
    .controller("MenuController", ['menuService', '$scope',function(menuService, $scope){
      menuService.setMenu([
        {name : "Menu 1"},
        {name : "Menu 2"}
      ])
      menuService.add({name :"Menu 3"})
      $scope.menu = menuService.getItems();
    }])
   
  

  return  moduleName;
})
