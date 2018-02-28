/////////////////////////////////////////////////////////////////////////////////////////
var shape = new Image();
var elements = [];
var ctx;


function init() {
    //carga las imagenes
        shape.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';

    setup();
    initShapes();
}


function setup() {
    ctx = document.getElementById('canvas-home').getContext('2d');
    // ctx.globalCompositeOperation = 'destination-over';
    // ctx.resize

    window.requestAnimationFrame(draw);
    ctx.translate(0, 0);
}

function draw() {
    var ctx = document.getElementById('canvas-home').getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 1920, 1080); // clear canvas

    for (var i =0; i < elements.length; i++) {

        elements[i].draw(ctx);
    }
    window.requestAnimationFrame(draw);
}

var x = 0;

function initShapes() {
    for (var i = 0; i < 40; i++) {
        this.elements.push(createParticle(Math.random() * 1920,Math.random() * 1080 ));
    }
    console.log("testing");
}


init();


//
// // //UNA EXCELENTE FORMA DE CREAR UN OBJETO! :3 like a class

function createParticle(x, y) {
    return {
        x: x,
        y: y,

        draw: function (ctx) {
            // ctx.drawImage(shape, this.x, this.y, 300, 300);
            //
            // console.log("drawing");
            // ctx.drawImage(shape, this.x, this.y);
            //

        }
    }
}
