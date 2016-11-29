var myApp=angular.module("myApp",[]);



myApp.controller("countrycontroller",function($scope){


     $scope.goPage=function(name){
     	  console.log(name);
         var url="./tpl/"+name+".html";

         $scope.page=url;
     }
})
