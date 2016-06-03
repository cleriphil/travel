'use strict';

photoApp.controller('PhotosController',
  function PhotosController($scope) {
    $scope.sortorder = 'country';
    $scope.photos = [
      {
        city: "Paris",
        country: "France",
        continent: "Europe",
        imageUrl: "https://static.pexels.com/photos/9283/landscape-nature-sky-blue-large.jpg",
        likeCount: 0,
        hashTags: [],
        dateAdded: ""
      },
      {
        city: "Larnaca",
        country: "Cyprus",
        continent: "Europe",
        imageUrl: "https://static.pexels.com/photos/92658/pexels-photo-92658-large.jpeg",
        likeCount: 0,
        hashTags: [],
        dateAdded: ""
      },
      {
        country: "South Africa",
        city: "Cape Town",
        continent: "Africa",
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
