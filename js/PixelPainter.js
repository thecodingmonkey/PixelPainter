$(document).ready(function() {
//  alert('hello');

  var pixelSize = 20;
  var currentColor = "#000";
  var dragMode = false;
  var colors = ["#000", "#fff"];
//  var pixelPainter = null;

  function PixelPainter(height, width) {
    var result = {};

    result.controls = $("<div>");
    result.controls.width(200);
    result.controls.height(200);

    result.artboard = $("<div>");

    // init controls
    var swatch = $("<div>");

    colors.map( function(val) {
      var swatchColor = $("<div>");
      swatchColor.css("border", "1px black solid");
      swatchColor.width(pixelSize + "px");
      swatchColor.height(pixelSize + "px");
      swatchColor.css("display", "inline-block");
      swatchColor.css("background-color", val);
      swatchColor.click(function() {
        val.css("border", "1px black solid");

        currentColor = $(this).css("background-color");
//        $(this).css('border', "1px black gray");
//        console.log(currentColor);
      });

      swatch.append(swatchColor);  
    });

    result.controls.append(swatch);



    // init canvas    

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
      pixel.on("mouseenter", fillColorDrag);
      pixel.on("mouseup", fillColorStop);

      result.artboard.append(pixel);
    }

    return result;
  }


  var pixelPainter = PixelPainter(20,20);
  $("#controls").append(pixelPainter.controls);
  $("#artboard").append(pixelPainter.artboard);
});