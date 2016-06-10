photoApp.factory('photoData', function ($http) {
  return {
    getPhoto: function() {
      return $http({method: 'GET', url: '/data/photo/1'});
    }
  };
});
