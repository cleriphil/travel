var fs = require('fs');

module.exports.get = function(req, res) {
  var photo = fs.readFileSync('app/data/photo/' + req.params.id + '.json', 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.send(photo);
};

module.exports.save = function(req, res) {
  var photo = req.body;
  fs.writeFileSync('app/data/photo/' + req.params.id + '.json', JSON.stringify(photo));
  res.send(photo);
};
