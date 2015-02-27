$(document).ready(function() 
{
//  alert('hello');
    var currentColor = "#000";

function PixelPainter(width,height){


  var Paint = { 

    controls: $("<div>"),
    artboard: $("<div>")

  };

  Paint.artboard.width(200);
  Paint.artboard.height(200);


  for(var i=0;i< width*height;i++){


    var pixel = $("<div>");
    pixel.width(width + "px");
    pixel.height(height + "px");
    pixel.css("border","solid 1px #000");
    pixel.css("display","inline-block");

    pixel.on("mousedown",mouseDown);
    pixel.on("mouseenter",mouseDrag);
    pixel.on("mouseup",mouseUp);



    Paint.artboard.append(pixel);

  }

  function mouseDown(){


    $(this).css("background-color",currentColor);
    dragMode = true;
  }

  function mouseUp(){

    $(this).css("background-color", currentColor);
    dragMode = false;

  }

  function mouseDrag(){

    if(dragMode){

      $(this).css("background-color",currentColor);
    }
  } 

  // var colors = ["#000","#FFF"];

  // colors.map(function(val){

  //   var color = $("div");

  //   color.width(width + "px");
  //   color.height(height + "px");
  //   color.css("background-color", val);
  //   color.css("border","1px solid black");
  //   color.css("display","inline-block");

  //   var currentColor = $(this).css("background");

  //   Paint.controls.append(color);
  // });

  

  return Paint;

}





var pixelPainter = PixelPainter(20,20);
$("#controls").append(pixelPainter.controls);
$("#artboard").append(pixelPainter.artboard);
});