var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/PixelPainter');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var Schema = mongoose.Schema;

var imageSchema = new Schema({
  name: String,
  width: Number,
  height: Number,
  pixels: Array
});

var Image = mongoose.model('Image', imageSchema);

app.get('/load', function (req, res) {
});

app.post('/save', function (req, res) {
  var imageData = req.body.image;

  console.log(imageData);

});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});