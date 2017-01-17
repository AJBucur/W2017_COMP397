//get canvas element
var canvas;

//get 2D context out of canvas element
var context;

//get width,height of canvas element
var width;
var height;


function init(canvasID){
    var canvas = document.getElementById(canvasID);
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
}

alert("width:" + width + '\n' + "height:" + height);