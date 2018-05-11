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

    // document.getElementById('mizq').style.clipPath = "polygon(0 0," + upValue1_y + 1 + "% 0," + downValue1_y + 1 + "% 100%, 0 100%)";
    // document.getElementById('mider').style.clipPath = "polygon(" + upValue1_y + "% 0, " + upValue2_y + "% 0, " + downValue2_y + "% 100%," + downValue1_y + "% 100%)";
    // maskIzq.css("");
    // maskIzq.append( "<div>" + msg + "</div>" );
});

var pantalla_about = 0;

// document.getElementById("bb").addEventListener("wheel", );

// console.log();
var paginas_about = $(".p_about");
addClass(paginas_about[0], 'ab_current');

function myFunction() {
    removeClass(paginas_about[pantalla_about], 'ab_current');
    pantalla_about++;

    if (pantalla_about > 2) {
        pantalla_about = 0;
    }

    switch (pantalla_about) {
        case 0:


            break;

        case 1:
            outAboutA();
            break;

        case 2:
            break;

    }
}

function inAboutA(el) {
    addClass(el, 'is-current');

    var m_der = $("#mder");
    var fullimg = $("#mizq");
    var line = $(".v-l");
    var nm = $(".abb-c-name");
    var txt = $(".t1");
    var tnext = $(".txt-nxt");


    var inth = new TimelineLite({
        onUpdate: function () {
        },
        onComplete: function () {
        }
    });

    var upValue1_y = 100;
    var downValue1_y = 100;

    var upValue2_y = 70;
    var downValue2_y = 30;


    inth.fromTo(fullimg, 1.5, {
            opacity: 0
            // scale: 1.5
        }, {
            opacity: 1,
            ease:
            Power3.easeIn,
            clearProps: 'opacity, scale'
        }, 'a'
    );

    inth.fromTo(nm, 4, {
        y: 200,
        opacity: -5
    }, {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut
    }, 'a');

    inth.fromTo(txt, 4, {
        x: -200,
        opacity: -3
    }, {
        x: 0,
        opacity: 1,
        ease: Power3.easeOut
    }, 'a');


    inth.fromTo(tnext, 5, {
        y: -200,
        opacity: -3
    }, {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut
    }, 'a');

    var arr1 = [500, 0, 100, 0, 100, 100, 150, 100];
    var arr2 = [62, 0, 100, 0, 100, 100, 19, 100];

    arr2.onUpdate = function () {
        TweenMax.set('#mder', {
            webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
            opacity: 1,
            ease: Power3.easeIn
        });
    };

    TweenLite.to(arr1, 2, arr2);

    inth.fromTo(m_der, 2, {
        opacity: 2
    }, {
        opacity: 1
    }, 'a');
    //
    inth.fromTo(line, 3, {
        opacity: 2,
        height: 0
    }, {
        opacity: 1,
        height: '50%',
        ease: Power3.easeOut
    }, "a");
    inth.play();
}

function outAboutA() {
    // addClass(el, 'is-current');

    var m_der = $("#mder");
    var fullimg = $("#mizq");
    var line = $(".v-l");
    var nm = $(".abb-c-name");
    var txt = $(".t1");
    var tnext = $(".txt-nxt");

    var inth = new TimelineLite({
        onUpdate: function () {
        },
        onComplete: function () {
            removeClass(paginas_about[0], 'ab_current');
        }
    });

    // TODO CAMBIAR IMAGEN EN ESTE

    // inth.fromTo(fullimg, 1.5, {
    //         opacity: 1
    //         // scale: 1.5
    //     }, {
    //         opacity: 0,
    //         ease:
    //         Power3.easeIn,
    //         clearProps: 'opacity, scale'
    //     }, 'a'
    // );

    inth.fromTo(nm, 3, {
        y: 0,
        opacity: 1
    }, {
        y: 200,
        opacity: -5,
        ease: Power3.easeOut
    }, 'a');

    inth.fromTo(txt, 3, {
        x: 0,
        opacity: 1
    }, {
        x: -200,
        opacity: -3,
        ease: Power3.easeOut
    }, 'a');


    inth.fromTo(tnext, 3, {
        y: 0,
        opacity: 1
    }, {
        y: -200,
        opacity: -3,
        ease: Power3.easeOut
    }, 'a');

    // var arr2 = [500, 0, 100, 0, 100, 100, 150, 100];
    // var arr1 = [62, 0, 100, 0, 100, 100, 19, 100];
    //
    // arr2.onUpdate = function () {
    //     TweenMax.set('#mder', {
    //         webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
    //         opacity: 1,
    //         ease: Power3.easeIn
    //     });
    // };

    // TweenLite.to(arr1, 3, arr2);

    inth.fromTo(m_der, 2, {
        opacity: 1
    }, {
        opacity: 2
    }, 'a');
    //
    inth.fromTo(line, 2, {
        opacity: 1,
        height: '50%'
    }, {
        opacity: 2,
        height: 0,
        ease: Power3.easeOut
    }, "a");
    inth.play();
}

function inAboutB() {
    addClass(paginas_about[1], 'ab_current');

    var m_der = $("#mder");
    var nm = $(".d_side");
    var txt = $(".txt_l");
    var d_tools = $(".ab-dsgntools");


    var inth = new TimelineLite({
        onUpdate: function () {
        },
        onComplete: function () {
        }
    });

    var upValue1_y = 100;
    var downValue1_y = 100;

    var upValue2_y = 70;
    var downValue2_y = 30;

    inth.fromTo(d_tools, 3, {
            opacity: -1,
            y: 200
            // scale: 1.5
        }, {
            opacity: 1,
            y: 0,
            ease: Power3.easeOut,
            clearProps: 'opacity, scale'
        }, 'a'
    );

    inth.fromTo(nm, 4, {
        y: 200,
        opacity: -5
    }, {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut
    }, 'a');

    inth.fromTo(txt, 4, {
        x: -200,
        opacity: -3
    }, {
        x: 0,
        opacity: 1,
        ease: Power3.easeOut
    }, 'a');

    // var arr1 = [500, 0, 100, 0, 100, 5, 150, 100];
    // var arr2 = [62, 0, 100, 0, 100, 100, 19, 100];
    //
    // arr2.onUpdate = function () {
    //     TweenMax.set('#mder', {
    //         webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
    //         opacity: 1,
    //         ease: Power3.easeIn
    //     });
    // };
    //
    // TweenLite.to(arr1, 3, arr2);

    inth.fromTo(m_der, 2, {
        opacity: 2
    }, {
        opacity: 1
    }, 'a');
    inth.play();
}

function outAboutB() {

    var m_der = $("#mder");
    var nm = $(".d_side");
    var txt = $(".txt_l");
    var tnext = $(".txt-nxt");
    var d_tools = $(".ab-dsgntools");

    var inth = new TimelineLite({
        onUpdate: function () {
        },
        onComplete: function () {
            removeClass(paginas_about[1], 'ab_current');
        }
    });

    var upValue1_y = 100;
    var downValue1_y = 100;

    var upValue2_y = 70;
    var downValue2_y = 30;

    inth.fromTo(d_tools, 3, {
            opacity: 1,
            y: 0,
            ease: Power3.easeOut

        }, {
            opacity: -1,
            y: 200
        }, 'a'
    );
    inth.fromTo($("#s2"), 2, {
            opacity: 1,
            y: 0,
            ease: Power3.easeOut

        }, {
            opacity: -1,
            y: 200
        }, 'a'
    );
    inth.fromTo(nm, 4, {
        y: 0,
        opacity: 1
    }, {
        y: 200,
        opacity: -5,
        ease: Power3.easeOut
    }, 'a');

    inth.fromTo(txt, 4, {
        x: 0,
        opacity: 1
    }, {
        x: -200,
        opacity: -3,
        ease: Power3.easeOut
    }, 'a');


    inth.fromTo(tnext, 5, {
        y: 0,
        opacity: 1
    }, {
        y: -200,
        opacity: -3,
        ease: Power3.easeOut
    }, 'a');

    // var arr1 = [500, 0, 100, 0, 100, 5, 150, 100];
    // var arr2 = [62, 0, 100, 0, 100, 100, 19, 100];
    //
    // arr2.onUpdate = function () {
    //     TweenMax.set('#mder', {
    //         webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
    //         opacity: 1,
    //         ease: Power3.easeIn
    //     });
    // };
    //
    // TweenLite.to(arr1, 3, arr2);

    // inth.fromTo(m_der, 2, {
    //     opacity: 2
    // }, {
    //     opacity: 1
    // }, 'a');

    inth.play();
}

function inAboutC() {
    addClass(paginas_about[2], 'ab_current');

    var m_der = $("#mder");
    var nm = $(".r_side");
    var txt = $(".txt_r");
    var tnext = $(".txt-nxt");
    var d_tools = $(".ab-devtools");


    var inth = new TimelineLite({
        onUpdate: function () {
        },
        onComplete: function () {
        }
    });

    var upValue1_y = 100;
    var downValue1_y = 100;

    var upValue2_y = 70;
    var downValue2_y = 30;

    inth.fromTo(d_tools, 3, {
            opacity: -1,
            y: 200
            // scale: 1.5
        }, {
            opacity: 1,
            y: 0,
            ease: Power3.easeOut,
            clearProps: 'opacity, scale'
        }, 'a'
    );

    inth.fromTo(nm, 4, {
        y: 200,
        opacity: -5
    }, {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut
    }, 'a');

    inth.fromTo(txt, 4, {
        x: -200,
        opacity: -3
    }, {
        x: 0,
        opacity: 1,
        ease: Power3.easeOut
    }, 'a');


    inth.fromTo(tnext, 5, {
        y: -200,
        opacity: -3
    }, {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut
    }, 'a');

    inth.fromTo(m_der, 2, {
        opacity: 2
    }, {
        opacity: 1
    }, 'a');
    inth.play();
}

document.getElementById("tnext").addEventListener("click", atoB);
document.getElementById("s2").addEventListener("click", btoC);


function atoB() {
    outAboutA();
    inAboutB();
}

function btoC() {
    outAboutB();
    inAboutC();
}