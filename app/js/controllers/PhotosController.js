'use strict';

photoApp.controller('PhotosController',
  function PhotosController($scope, photoData, $log, $filter) {
    $scope.sortorder = 'country';

    photoData.getPhoto()
      .success(function(photos) {
        $scope.photos = photos;
        $log.warn(photos);
      })
      .error(function (data, status, headers, config){
        $log.warn(data, status, headers(), config);
      });

    $scope.like = function(id) {
      var idFilter = $filter('filter');
      var photo = idFilter($scope.photos, {id: id})[0];
      photo.likeCount++;
      angular.element(document.getElementById('photo' + photo.id))[0].disabled = true;
    }

    $scope.insertRecord = function(photo) {
      if($scope.clicked){

        return;
      }
      $scope.clicked = true;
    }
  }
);

//like can only be done once by a user
