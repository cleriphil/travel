'use strict';

photoApp.controller('photosController',
  function photosController($scope) {
    $scope.photos = [
      {
        place: "Cambodia",
        imageUrl: ""
      },
      {
        place: "France",
        imageUrl: ""
      },
      {
        place: "South Africa",
        imageUrl: ""
      }
    ]
  }
);
