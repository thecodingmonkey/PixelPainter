$(document).ready(function() {
//  alert('hello');

  var pixelSize = 20;
  var currentColor = "#000";
  var dragMode = false;
//  var pixelPainter = null;

  function PixelPainter(height, width) {
    var result = {};

    result.controls = $("<div>");
    result.artboard = $("<div>");

    // add 2 to width because of the border
    result.artboard.width(pixelSize * (2+width) );

    var i;

    var fillColorStart = function() {
      $(this).css("background-color", currentColor);
      dragMode = true;
    };

    var fillColorDrag = function() {
      if (dragMode) {
        $(this).css("background-color", currentColor);
      }
    };

    var fillColorStop = function() {
      dragMode = false;
    };


    for(i=0; i < height*width; i++) {
      var pixel = $("<div>");
      pixel.css("border", "1px black solid");
      pixel.width(pixelSize + "px");
      pixel.height(pixelSize + "px");
      pixel.css("display", "inline-block");

      pixel.on("mousedown", fillColorStart);
      pixel.on("mouseup", fillColorStop);
      pixel.on("mouseenter", fillColorDrag);

      result.artboard.append(pixel);
    }

    return result;
  }


  var pixelPainter = PixelPainter(20,20);
  $("#controls").append(pixelPainter.controls);
  $("#artboard").append(pixelPainter.artboard);
});