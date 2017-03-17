angular.module('myApp')
.controller('mainCtrl', function($scope, mainService){

    $scope.thisAppIsBroken = "This angular app is working";
//    $scope.searchedBook = mainService.getBook();

    // $scope.getBook = function(){
    //   var data = mainService.getBook();
    //
    //   data.then(function(data){
    //     $scope.data = data;
    //     console.log(data);
    //   })
    // }
    //
    // $scope.results = mainService.getBook();
    //
    // mainService.getBook().then(function(data){
    //   $scope.results = data.data.data;
    // })

    $scope.bookResult = function(){
      mainService.getBook().then(function(data){
        $scope.results = data;
      });
    }

});
