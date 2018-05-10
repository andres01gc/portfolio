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

function inAbout(el) {
    addClass(el, 'is-current');
    // // console.log("inicia la entrada de about");

    var m_der = $("#mder");
    var fullimg = $("#mizq");
    // var splitline = $(".v-l");
    var nm = $(".abb-c-name");
    var txt = $(".t1");
    var tnext = $(".txt-nxt");
    //
    // var dsgn = $(".dsgn");
    // var bck = $(".bck");
    // var frnt = $(".frnt");
    // var pkgmngr = $(".pkgmngr");
    // var lnggs = $(".lnggs");
    // var frmwks = $(".frmwks");
    //
    // // console.log(splitline);
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

    // var ST = new SplitText(nm, {type: "words,chars"}), chars = ST.chars, l = ST.chars.length;

    inth.fromTo(fullimg, 1.5, {
            opacity: 0
            // scale: 1.5
        }, {
            opacity: 1,
            // scale: 1,

            ease:
            Power3.easeIn,
            clearProps: 'opacity, scale'
        }, 'a'
    );

    inth.fromTo(nm, 4, {
        // webkitClipPath: 'polygon(20% 0, 20% 0, 100% 100%, 100% 100%)'
        // width: 0
        y: 200,
        opacity: -5
    }, {
        // webkitClipPath: "polygon(" + upValue1_y + "% 0, " + upValue2_y + "% 0, " + downValue2_y + "% 100%," + downValue1_y + "% 100%)"
        y: 0,
        opacity: 1,
        ease: Power3.easeOut
    }, 'a');

    inth.fromTo(txt, 4, {
        // webkitClipPath: 'polygon(20% 0, 20% 0, 100% 100%, 100% 100%)'
        // width: 0
        x: -200,
        opacity: -3
    }, {
        // webkitClipPath: "polygon(" + upValue1_y + "% 0, " + upValue2_y + "% 0, " + downValue2_y + "% 100%," + downValue1_y + "% 100%)"
        x: 0,
        opacity: 1,
        ease: Power3.easeOut
    }, 'a');


    inth.fromTo(tnext, 5, {
        // webkitClipPath: 'polygon(20% 0, 20% 0, 100% 100%, 100% 100%)'
        // width: 0
        y: -200,
        opacity: -3
    }, {
        // webkitClipPath: "polygon(" + upValue1_y + "% 0, " + upValue2_y + "% 0, " + downValue2_y + "% 100%," + downValue1_y + "% 100%)"
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
            webkitFilter:"blur(1.5em)",
            ease: Power3.easeIn
        });
    };

    TweenLite.to(arr1, 3, arr2);

    inth.fromTo(m_der, 2, {
        opacity: 2
    }, {
        opacity: 1
        // webkitClipPath: "polygon(" + upValue1_y + "% 0, " + upValue2_y + "% 0, " + downValue2_y + "% 100%," + downValue1_y + "% 100%)"
        // width: "100%",
        // ease: Power3.easeIn
    }, 'a');

    //


    // inth.fromTo(img, 2, {
    //     opacity: 0
    // }, {
    //     opacity: .2
    //     // ease: Power3.easeIn
    // }, "s");
    //
    // inth.fromTo(tittle, 1, {
    //     opacity: -1,
    //     x: 20
    // }, {
    //     width: "100%",
    //     opacity: 1,
    //     x: 0,
    //     ease: Power3.easeIn
    //     // clearProps: 'opacity, scale'
    // }, "s");
    //
    // inth.fromTo(content, 1, {
    //         opacity: -2,
    //         // width: "90%",
    //         y: -20
    //
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         // width: "30%",
    //         ease:
    //         Power3.easeIn
    //         // clearProps: 'opacity, scale'
    //     },
    //     "s"
    // );
    //
    // inth.fromTo(dsgn, .5, {
    //         opacity: -0,
    //         y: -20
    //
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         // width: "30%",
    //         ease:
    //         Power3.easeIn
    //         // clearProps: 'opacity, scale'
    //     }
    // );
    //
    // inth.fromTo(bck, .5, {
    //         opacity: -0,
    //         y: -20
    //
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         // width: "30%",
    //         ease:
    //         Power3.easeIn
    //         // clearProps: 'opacity, scale'
    //     }
    // );
    // inth.fromTo(frnt, .5, {
    //         opacity: -0,
    //         y: -20
    //
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         // width: "30%",
    //         ease:
    //         Power3.easeIn
    //         // clearProps: 'opacity, scale'
    //     }
    // );
    // inth.fromTo(pkgmngr, .5, {
    //         opacity: -0,
    //         y: -20
    //
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         // width: "30%",
    //         ease:
    //         Power3.easeIn
    //         // clearProps: 'opacity, scale'
    //     }
    // );
    // inth.fromTo(lnggs, .5, {
    //         opacity: -0,
    //         y: -20
    //
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         // width: "30%",
    //         ease:
    //         Power3.easeIn
    //         // clearProps: 'opacity, scale'
    //     }
    // );
    // inth.fromTo(frmwks, .5, {
    //         opacity: -0,
    //         y: -20
    //
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         // width: "30%",
    //         ease:
    //         Power3.easeIn
    //         // clearProps: 'opacity, scale'
    //     }
    // );
    inth.play();
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

