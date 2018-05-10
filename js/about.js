var maskDer = $(".imder");
var maskIzq = $(".imizq");
// ;
$(".main-view").mousemove(function (event) {
    // msg += event.pageX + ", " + event.pageY;
    var angle = 7;

    // parte izq
    // var upValue1_y = 0;
    // var downValue1_y = 0;

    // var upValue2_y = 50;
    // var downValue2_y = 50;

    // parte der
    var upValue1_y = 100;
    var downValue1_y = 100;

    var upValue2_y = 70;
    var downValue2_y = 30;

    document.getElementById('mizq').style.clipPath = " polygon(0 0," + upValue1_y + 1 + "% 0," + downValue1_y + 1 + "% 100%, 0 100%)";
    document.getElementById('mider').style.clipPath = "polygon(" + upValue1_y + "% 0, " + upValue2_y + "% 0, " + downValue2_y + "% 100%," + downValue1_y + "% 100%)";
    // maskIzq.css("");
    // maskIzq.append( "<div>" + msg + "</div>" );
});

var pantalla_about = 0;

document.getElementById("bb").addEventListener("wheel", myFunction);

console.log();
var paginas_about = $(".p_about");
addClass(paginas_about[0], 'ab_current');

function myFunction() {
    removeClass(paginas_about[pantalla_about], 'ab_current');
    pantalla_about++;

    if (pantalla_about > 2) {
        pantalla_about = 0;
    }
    addClass(paginas_about[pantalla_about], 'ab_current');
    // console.log('testing');
    console.log(paginas_about);


}

// $(".main-view").scroll(function (event) {
//     var st = $(this).scrollTop();
//
//     console.log('probando scroll ' + st);
//
//     if (st > lastScrollTop) {
//         // downscroll code
//     } else {
//         // upscroll code
//     }
//     lastScrollTop = st;
// });

