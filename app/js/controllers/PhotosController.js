'use strict';

photoApp.controller('PhotosController',
  function PhotosController($scope) {
    $scope.sortorder = 'country';
    $scope.photos = [
      {
        country: "France",
        city: "Paris",
        imageUrl: "https://static.pexels.com/photos/9283/landscape-nature-sky-blue-large.jpg",
        likeCount: 0,
        hashTags: [],
        dateAdded: ""
      },
      {
        country: "Cyprus",
        city: "Larnaca",
        imageUrl: "https://static.pexels.com/photos/92658/pexels-photo-92658-large.jpeg",
        likeCount: 0,
        hashTags: [],
        dateAdded: ""
      },
      {
        country: "South Africa",
        city: "Cape Town",
        imageUrl: "https://static.pexels.com/photos/5301/landscape-nature-sky-clouds-large.jpg",
        likeCount: 0,
        hashTags: [],
        dateAdded: ""
      }
    ]

    $scope.like = function(photo) {
      photo.likeCount++;
    }
  }
);
