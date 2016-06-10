'use strict';

photoApp.controller('PhotosController',
  function PhotosController($scope, photoData, $log) {
    $scope.sortorder = 'country';

    photoData.getPhoto()
      .success(function(photos) {
        $scope.photos = photos;
        $log.warn(photos);
      })
      .error(function (data, status, headers, config){
        $log.warn(data, status, headers(), config);
      });

    $scope.like = function(photo) {
      photo.likeCount++;
    }
  }
);
