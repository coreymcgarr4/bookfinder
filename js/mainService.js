angular.module('myApp')
.service('mainService', function($http){

  this.getBook = function(){

    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/books/v1/volumes?q=wheel+of+time' //+ 'key=AIzaSyA94ZeIB-pkII-ZrynwLYqquyfOqF-XO4c' //+ "&fields=items(title,author)"
    }).then(function(response){
      return response.data;
    });
  };
});
