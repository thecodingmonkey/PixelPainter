$(document).ready(function() 
{
//  alert('hello');
    var currentColor = "#000";
    var dragMode = false;
    var gridWidth = 40;
    var gridHeight = 10;

function PixelPainter(width,height){

  var container = $("<div>").addClass("container");

  var Paint = { 
    
    controls: $("<div>"),
    artboard: $("<div>")

  };

 
  Paint.controls.width(90);
 Paint.controls.height(200);
  

   Paint.artboard.width(450);
  // Paint.artboard.height(10);



  for(var i=0;i< width*height;i++){


    var pixel = $("<div>");
    pixel.addClass("pixel");
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




  var colors = ["#000","#FFF",

"#FFF900", "#FCD221", "#FFF746", "#EFCE5F", "#285D00", "#2D6800",
"#AFF609", "#62F100", "#8CF500", "#50B213", "#60F357", "#8EDF6D",
"#46944E", "#5CEF75", "#635F04", "#336A38", "#DF1C1C", "#E1361A",
"#E97016", "#ED8A13", "#C9272E", "#550E0E", "#7A2121", "#BA521D",
"#E6643C", "#B31D2E", "#CF7A5E", "#DD217A", "#851E1C", "#E1539F",
"#A64344", "#D46665", "#ECA0AC", "#EB875E", "#D821FF", "#9A1C68",
"#B357C9", "#B75576", "#DC6557", "#DF8946", "#000C61", "#270F62",
"#0C134C", "#0009FE", "#541162", "#5321C7", "#4D7DF2", "#57F9FA",
"#296F6F", "#2A2868", "#34A4FB", "#1F71FD", "#9AC6D5", "#3B938B",
"#77B9F6", "#98AECF", "#564771", "#4E4CE2", "#101838", "#423FB7",
"#546170", "#356298", "#255F5F", "#56CCB9", "#8C8C8C", "#BFC0BF"];

  colors.forEach(function(val){

    var color = $("<div>");

    color.width(width + "px");
    color.height(height + "px");
    color.css("background-color", val);
    color.css("border","1px solid black");
    color.css("display","inline-block");

    color.click(function(){

      currentColor =  $(this).css("background-color");

    });

     

    Paint.controls.append(color);


  });


  var erase = $("<button>");
  erase.width(100);
  erase.height(50);
  erase.html("erase");
  erase.css({"display":"block"});
  
  var clear = $("<button>"); 
  clear.width(100);
  clear.height(50);
  clear.html("clear"); 
  clear.css({"display":"block"});
  
  Paint.controls.append(erase).append(clear);

  erase.on("click",function(){

  currentColor = "";


  });

  clear.on("click",function(){

   $(".pixel").css("background-color","");


  });

  return Paint;

}





var pixelPainter = PixelPainter(20,20);
$("#controls").append(pixelPainter.controls);
$("#artboard").append(pixelPainter.artboard);
});


















 



