//get canvas element
var canvas;

//get 2D context out of canvas element
var context;

//get width,height of canvas element
var width;
var height;

function drawBoard(){
    context.beginPath();

    //context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 2;

    /*
    context.moveTo(100,0);
    context.lineTo(100,300);

    context.moveTo(200,0);
    context.lineTo(200,300);

    context.lineTo(100,100);
    context.lineTo(0,100);
    context.lineTo(0,0);
    */

   /* var w3 = width / 3;
    for (y = 1; y < 3; y++){
        context.moveTo(0, w3 * y);
        context.lineTo(width, w3 * y);
    }

    var h3 = height / 3;
    for (x = 1; x < 3; x++){
        context.moveTo(h3 * x, 0);
        context.lineTo(h3 * x, height);
    }*/

    var h3 = height / 3;
    var w3 = width / 3;
    for (i = 1; i <3 ; i++){
        context.moveTo(0, h3 * i); //initially moves to (0, 100)
        context.lineTo(width, h3 *i); //draws a line 'width' long(300) at 0, 100

        context.moveTo(w3 * i, 0); //initially moves to (100, 0)
        context.lineTo(w3 * i, height); //draws a line 'height' long(300) at 100, 0
    }

    context.stroke();
    context.closePath();
}

function init(canvasID){
    canvas = document.getElementById(canvasID);
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    canvas.addEventListener('click', clickHandler);

    drawBoard();
    drawX(250,50);
    drawX(150,175);
}

function drawX(x, y){
    context.beginPath();
    context.strokeStyle = '#FF0000';
    context.lineWidth = 4;

    var w3 = width / 3;
    var h3 = height / 3;

    var ix = Math.floor(x/w3);
    var iy = Math.floor(y/h3);

    var x0 = ix * w3;
    var x1 = x0 + w3;

    var y0 = iy * h3;
    var y1 = y0 + h3;

    context.moveTo(x0, y0);
    context.lineTo(x1, y1);

    context.moveTo(x1, y0);
    context.lineTo(x0, y1);


    context.stroke();
    context.closePath();
}


function clickHandler(event){
    var x = event.clientX; //x position of cursor within document
    var y = event.clientY;//y position of cursor within document
    var x1 = canvas.offsetLeft; //value for x offseft from the left of the canvas
    var y1 = canvas.offsetTop; //value for y offseft from the top of the canvas

    console.log('x: ' + x);
    console.log('y: ' + y);
    console.log('x1: ' + (x - x1));
    console.log('y1: ' + (y - y1));
    drawX(x - x1,y - y1); //offsets from X and Y from where the canvas elements starts
}
//alert("width:" + width + '\n' + "height:" + height);