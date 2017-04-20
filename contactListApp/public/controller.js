var app = angular.module("myApp",[]);

app.controller("myController",['$scope','$http', function($scope,$http)
{
   var refresh = function()
   {
  $http.get('/cl').success(function(response){
    $scope.conList = response;

    $scope.contact = "";
  });
}; // end of refresh function

refresh();

  $scope.addContact = function()
  {
     $http.post('/cl',$scope.contact).success(function(response)
   {
     console.log(response);
     refresh();
   });  // end of  $http.post()
 }; // end of addContact()


    $scope.remove = function(id)
    {
       $http.delete('/cl/'+id).success(function(response){
         console.log(response);
         refresh();
       });
    }//end of $http.remove


 $scope.edit = function(id)
 {
    $http.get('/cl/' +id).success(function(response){
        $scope.contact = response;
       console.log(response);

    }
   );
 }//end of edit() function


 $scope.update = function()
 {
    $http.put('/cl/'+$scope.contact._id , $scope.contact).success(function(response){
      refresh();
    });
 }

} // end of app.controller's bracket
]);
