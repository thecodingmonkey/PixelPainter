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

app.get('/load/:filename', function (req, res) {
  console.log(req.params.filename);

  Image.find({ name: req.params.filename  }, function(err, data) {
    if (err) throw err;

    res.json(data);
  });
});

app.post('/save', function (req, res) {
  var imageData = req.body['image[]'];
  var filename = req.body.filename;

  var data = new Image({
    name: filename,
    pixels: imageData,
    width: 20,
    height: 20
  });

  data.save(function(err) {
    if (err) throw err;
    res.redirect("/load/" + filename);
  });

// console.log(imageData[0]);
//  console.log(req.body);


});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});