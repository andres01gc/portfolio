$('.main-view').mousemove(function (e) {
    parallaxIt(e, '.homemenu', -30, -60);
    parallaxIt(e, '.home-msg-1', -30, 0);
    // // parallaxIt(e, '.home-msg-2', -10);
    parallaxIt(e, '.home-line', 40, 60);
    parallaxIt(e, '.home-rect', -30, 20);
    // // parallaxIt(e,    '.home-img', -20);
    //
    parallaxIt(e, '.up', 40, 0);
    parallaxIt(e, '.down', -40, 0);

    parallaxIt(e, '.bar', -10, 10);

    parallaxIt(e, '.home-myname-down', -40, 5);
    parallaxIt(e, '.home-myname', 30, 6);

});

var $this = $('.main-view');

function parallaxIt(e, target, movX, movY) {
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 2, {
        x: (relX - $this.width() / 2) / $this.width() * movX,
        y: (relY - $this.height() / 2) / $this.height() * (movY)
    });
}

////////////////////////////////////////////////////////////////////////////////////////////
var logo = $('.logo');
var imgup = $('.up');
var nameup = $('.home-myname');
var splitline = $('.home-split-line');
var imgdown = $('.down');
var namedown = $('.home-myname-down');
var current = $('.current');

$(document).ready(function () {
    startPage();
});


function startPage() {

    //elementos que se van a animar al inicio


    var initTl = new TimelineLite({

        onUpdate: function () {
            // isUpdating = true;
        },
        onComplete: function () {
            // isUpdating = false;
            // removeCurrentClass(title);
            // removeCurrentClass(content);
            // removeCurrentClass(image);
            // removeClass(currentProject, "current");
            // currentProject.style.visibility = "hidden";
        }
    });


    // initTl.addLabel("imgs");//
    initTl.fromTo(imgup, 1, {
            opacity: .3,
            width: 0
            // scale: .01
            // rotation: "+=45"
            // left: 500
        },
        {
            left: 0,
            opacity: .6,
            width: "100%",

            clearProps: 'scale'
        }
        ,
        "imgs"
    )
    ;

    initTl.fromTo(imgdown, 1, {
            opacity: .3,
            // scale: .01
            width: 0
            // right: -200
            // transformOrigin:"100% 50%"
            // position: 800
            // rotation: "+=45"
        }, {
            right: 0,
            width: "100%",
            // opacity: .2,
            opacity: .5,
            position: 800,
            // x: 200,
            // // rotation: "-=45",
            clearProps: ' scale'
        },
        "imgs"
    )
    ;


    initTl.delay(2);

    initTl.fromTo(splitline, .5, {
        opacity: 0,
        scale: .01// rotation: "+=45"
    }, {
        opacity: .1,
        scale: 1,
        // rotation: "-=45",
        clearProps: 'opacity, scale'
    });


    initTl.addLabel("ani");
    initTl.fromTo(nameup, 1, {
        opacity: 0
        // scale: .01
        // rigth: -200,
        // x:200,
        // rotation: "+=45"
    }, {
        // opacity: .2,
        // rigth: 0,
        x: 100,
        opacity: .05,
        // // rotation: "-=45",
        clearProps: ' scale'
    }, "ani");

    initTl.fromTo(namedown, 1, {
        opacity: 0
        // scale: .01

        // rotation: "+=45"
    }, {
        // opacity: .2,
        opacity: .05,
        x:-100,
        // // rotation: "-=45",
        clearProps: 'scale,x'
    }, "ani");


    initTl.delay(2);
    initTl.fromTo(logo, 2, {
        opacity: 0,
        scale: .1,
        rotation: "+=45"

    }, {
        opacity: 1,
        scale: 1,
        rotation: "-=45",
        clearProps: 'opacity, scale'
    });

    initTl.play();
}