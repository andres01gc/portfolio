var maskDer = $(".imder");

var maskIzq = $(".imizq");


$(".main-view").mousemove(function (event) {
    var msg = "Handler for .mousemove() called at ";
    // msg += event.pageX + ", " + event.pageY;

    var angle = 7;

    var upValue = 60;
    var downValue = 40;

    document.getElementById('mizq').style.clipPath = " polygon(0 0," + upValue + "% 0," + downValue + "% 100%, 0 100%)";
    document.getElementById('mider').style.clipPath = "polygon(" + upValue + "% 0, 100% 0, 100% 100%,"+downValue+"% 100%)";

    // maskIzq.css("");
    // maskIzq.append( "<div>" + msg + "</div>" );
});