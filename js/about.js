var maskDer = $(".imder");

var maskIzq = $(".imizq");


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

    document.getElementById('mizq').style.clipPath = " polygon(0 0," + upValue1_y+1 + "% 0," + downValue1_y+1 + "% 100%, 0 100%)";
    document.getElementById('mider').style.clipPath = "polygon(" + upValue1_y + "% 0, " + upValue2_y + "% 0, " + downValue2_y + "% 100%," + downValue1_y + "% 100%)";

    // maskIzq.css("");
    // maskIzq.append( "<div>" + msg + "</div>" );
});