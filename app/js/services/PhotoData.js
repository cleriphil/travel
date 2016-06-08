photoApp.factory('photoData', function($resource){
  return {
    getPhoto: function() {
      return $resource('/data/photo/:id', {id:'@id'}).get({id:1});
    }
  };
});
