'use strict';

photoApp.controller('PhotosController',
  function PhotosController($scope) {
    $scope.photos = [
      {
        country: "Cambodia",
        imageUrl: "https://static.pexels.com/photos/9283/landscape-nature-sky-blue-large.jpg",
        likeCount: 0
      },
      {
        country: "France",
        imageUrl: "https://static.pexels.com/photos/92658/pexels-photo-92658-large.jpeg",
        likeCount: 0
      },
      {
        country: "South Africa",
        imageUrl: "https://static.pexels.com/photos/5301/landscape-nature-sky-clouds-large.jpg",
        likeCount: 0
      }
    ]
  }
);
