'use strict';

photoApp.controller('photosController',
  function photosController($scope) {
    $scope.photos = [
      {
        country: "Cambodia",
        imageUrl: "",
        likeCount: 0
      },
      {
        country: "France",
        imageUrl: "",
        likeCount: 0
      },
      {
        country: "South Africa",
        imageUrl: "",
        likeCount: 0
      }
    ]
  }
);
