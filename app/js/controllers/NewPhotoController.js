'use strict';

photoApp.controller('NewPhotoController',
  function NewPhotoController($scope) {
      $scope.savePhoto = function(photo, newPhotoForm) {
        console.log(newPhotoForm);
        if(newPhotoForm.$valid) {
          window.alert('photo: ' + photo.city + ' saved!');
        }
      }
      $scope.cancelNewPhoto = function() {
        window.location = "/PhotosList.html";
      }
  }
);
