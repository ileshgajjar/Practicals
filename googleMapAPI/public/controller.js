var app = angular.module('myApp',[]);

app.controller('myController',['$scope','$http',function($scope,$http){

   $scope.getDistance = function()
   {
     $http.post('/getDist',$scope.code).
       success(function(res) {
           console.log(res);
           $scope.distance = res;
       }).error(function() {
           console.error("error in posting");
       });
   }

}]);
