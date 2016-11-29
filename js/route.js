var myApp=angular.module("myApp",["ngRoute"]);


myApp.config(function($routeProvider){
     $routeProvider.when("/home",{//   /home是显示在地址栏的路由名称
     	templatesUrl:"./tpl/home.html"
     })
})
