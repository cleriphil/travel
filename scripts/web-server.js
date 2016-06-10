var express = require('express');
var path = require('path');
var photos = require('./photosController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/data/photo/:id', photos.get);
app.post('/data/photo/:id', photos.save);

app.listen(8000);
console.log('Listening to port 8000...');

//bash server.sh
//npm install body-parser
