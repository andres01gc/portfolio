var inicioFin = false;
$('.main-view').mousemove(function (e) {
    if (inicioFin) {
        parallaxIt_(e, '.up', +60, 0);
        parallaxIt_(e, '.down', -90, 0);
        //     parallaxIt(e, '.bar', -15, 10);
    }
});


var $this = $('.main-view');

// function parallaxIt(e, target, movX, movY) {
//     var relX = e.pageX - $this.offset().top;
//     var relY = e.pageY - $this.offset().left;
//
//     TweenMax.to(target, 2, {
//         x: (relX - $this.width() / 2) / $this.width() * movX,
//         y: (relY - $this.height() / 2) / $this.height() * (movY)
//     });
// }

function parallaxIt_(e, target, movX, movY) {
    var relY = e.pageX - $this.offset().left;
    var relX = e.pageY - $this.offset().top;

    TweenMax.to(target, 2, {
        x: (relX - $this.width() / 2) / $this.width() * movX,
        y: (relY - $this.height() / 2) / $this.height() * (movY)
    });
}

var current = $('.current');


$(document).ready(function () {
    startPage();
    initAutoTxt();
    var messenger = new Messenger($('.ph2'));

});

function startPage() {
    var autotxt = $('.home-cont-autotext');
    var logo = $('.logo');
    var splitline = $('.home-line');
    var menuhome = $('.home-menu');
    var homebg = $('.homebg');
    var phrase = $('.home-phrase');
    var ph2 = $('.ph2');

    //elementos que se van a animar al inicio
    var initTl = new TimelineLite({
        onUpdate: function () {
        },
        onComplete: function () {
            inicioFin = true;
            console.log("caskndvañlksndv");
        }
    });





    initTl.fromTo(homebg, 1, {
            opacity: -1,
            scale: 1.5,
            height: "150%",

            rigth: "50%"
        },
        {
            ease: Circ.easeOut, opacity: .9,
            height: "100%",
            scale: 1,
            rigth: "0%", ease: Circ.easeOut,

            clearProps: 'scale'
        },
        "imgs"
    );

    initTl.fromTo(autotxt, 2, {
            opacity: -1,
            width: .0

        },
        {
            opacity: .3,
            width: "100%",
            scale: 1,
            clearProps: 'scale'
        },
        "imgs"
    );

    initTl.fromTo(logo, 3, {
        opacity: 0,
        scale: .1,
        rotation: "+=45"

    }, {
        opacity: 1,
        scale: 1,
        rotation: "0",
        clearProps: 'opacity, scale',
        ease: Circ.easeOut
    });



    initTl.fromTo(splitline, 1, {
        opacity: 0,
        // scale: 0,
        left: "50%",
        width: "0" // rotation: "+=45"
    }, {
        opacity: .5,
        scale: 1,
        left: "0%",
        width: "100%",
        // rotation: "-=45",
        clearProps: 'opacity, scale'
    }, "2");



    initTl.fromTo(phrase, 1, {
        opacity: 0,
        scale: .9,
        y: -10
    }, {
        width: "100%",
        y: 0, scale: 1,

        opacity: .8,
        clearProps: ' scale'
    }, "2");

    initTl.fromTo(ph2, 2, {
        opacity: 0,
        scale: .9,
        y: -10
    }, {
        width: "100%",
        y: 0, scale: 1,

        opacity: .8,
        clearProps: ' scale'
    }, "2");

    initTl.delay(1);


    initTl.fromTo(menuhome, 2, {
            opacity: 0,
            y: 300,
            scale: 0
        },
        {
            opacity: .8,
            y: 0,
            scale: 1,
            ease: Circ.easeOut,
            clearProps: 'scale'
        },
        "2"
    );

    initTl.play();

}

function initAutoTxt() {
    var $tickerWrapper = $(".home-cont-autotext");
    var txt = $('.home-autotext');

    var cloneTxt = txt.clone();

    cloneTxt.addClass("cloned").appendTo($tickerWrapper);

    var infinite = new TimelineMax({force3D: true, repeat: -1, paused: false});

    infinite.fromTo(txt, 50, {}, {
        x: txt.width(), ease: Linear.easeNone,
        clearProps: 'opacity, scale'
    }, "tick");
    infinite.fromTo(cloneTxt, 50 * 2, {x: -txt.width()}, {
        x: txt.width(), ease: Linear.easeNone,
        clearProps: 'opacity, scale'
    }, "tick");
}

//
// function initMessengr() {
//
//     console.clear();
//
// }


//código tomado de https://codepen.io/bionik/pen/dzBweB por lauri
var Messenger = function (el) {
    'use strict';
    var m = this;

    m.init = function () {
        m.codeletters = "&*+%?£@$";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
            'Interactive media designer',
            'Experimental developer',
            'just call me Gc.'
        ];

        setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function (length) {
        var random_text = '';
        while (random_text.length < length) {
            random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
        }

        return random_text;
    };

    m.animateIn = function () {
        if (m.current_length < m.messages[m.message].length) {
            m.current_length = m.current_length + 2;
            if (m.current_length > m.messages[m.message].length) {
                m.current_length = m.messages[m.message].length;
            }

            var message = m.generateRandomString(m.current_length);
            $(el).html(message);

            setTimeout(m.animateIn, 20);
        } else {
            setTimeout(m.animateFadeBuffer, 20);
        }
    };

    m.animateFadeBuffer = function () {
        if (m.fadeBuffer === false) {
            m.fadeBuffer = [];
            for (var i = 0; i < m.messages[m.message].length; i++) {
                m.fadeBuffer.push({c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i)});
            }
        }

        var do_cycles = false;
        var message = '';

        for (var i = 0; i < m.fadeBuffer.length; i++) {
            var fader = m.fadeBuffer[i];
            if (fader.c > 0) {
                do_cycles = true;
                fader.c--;
                message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
            } else {
                message += fader.l;
            }
        }

        $(el).html(message);

        if (do_cycles === true) {
            setTimeout(m.animateFadeBuffer, 50);
        } else {
            setTimeout(m.cycleText, 2000);
        }
    };

    m.cycleText = function () {
        m.message = m.message + 1;
        if (m.message >= m.messages.length) {
            m.message = 0;
        }

        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');

        setTimeout(m.animateIn, 200);
    };

    m.init();
};


function outHome(el) {

    var autotxt = $('.home-cont-autotext');
    var logo = $('.logo');
    var splitline = $('.home-line');
    var menuhome = $('.home-menu');
    var homebg = $('.homebg');
    var phrase = $('.home-phrase');
    var ph2 = $('.ph2');
    var up = $('.up');
    var down = $('.down');


    var outh = new TimelineLite({

        onUpdate: function () {
            // isUpdating = true;
        },
        onComplete: function () {
            isAnimating = false;
            removeClass(el, 'is-current');
            console.log("terminó!");
            inAbout(document.querySelector('.p-about'));//entra !
        }
    });

    outh.fromTo(menuhome, .8, {
        // scale: 1
    }, {
        scale: .4,
        opacity: 0, y: 50,
        ease: Power3.easeIn
        // clearProps: 'opacity, scale'
    }, "pack");


    outh.fromTo($(".ph-content"), .4, {
        // scale: 1
    }, {
        scale: .8,
        opacity: 0,
        ease: Power3.easeIn
        // clearProps: 'opacity, scale'
    }, "pack");


    // outh.fromTo(phrase, .2, {
    //     // scale: 1
    // }, {
    //     scale: .1,
    //     opacity: 0,
    //     ease: Power3.easeIn,
    //     clearProps: 'opacity, scale'
    // }, "pack");


    outh.fromTo(up, 1, {
        // scale: 1
    }, {
        // opacity: 0,
        // scale: 2,
        opacity: 0,
        x: "-100%",
        ease: Power3.easeIn
        // backgroundPosition: "500px",
        // backgroundScale: 2,

        // clearProps: 'opacity, scale'
    }, "pack");

    outh.fromTo(down, 1, {
        // scale: 1
    }, {
        // opacity: 0,
        // scale: 2,
        opacity: 0,
        x: "100%",
        ease: Power3.easeIn

        // backgroundPosition: "500px",
        // backgroundScale: .3,

        // clearProps: 'opacity, scale'
    }, "pack");


    outh.fromTo(autotxt, 1, {
        // scale: 1
    }, {
        // opacity: 0,
        scale: .9,
        opacity: 0,
        y: 30,
        ease: Power3.easeOut

        // backgroundPosition: "500px",
        // backgroundScale: 2,

        // clearProps: 'opacity, scale'
    }, "pack");

    outh.fromTo(splitline, 1, {
        // scale: 1
    }, {
        // opacity: 0,
        scale: 1.2,
        // opacity: 0,
        x: "140%",
        ease: Power3.easeOut

        // backgroundPosition: "500px",
        // backgroundScale: 2,

        // clearProps: 'opacity, scale'
    });


    outh.play();
}



