var currentIndex = 0;
var isUpdating = false;
var nextProjectElement, currentProjectElement;
var projects;


function nextproj() {

    goOut(currentIndex);

    currentIndex++;
    var nextIndex = currentIndex;
    // nextIndex++;

    if (nextIndex > projects.length - 1) {
        nextIndex = 0;
        currentIndex = nextIndex;
    }
   goIn(nextIndex);
}

$(document).ready(function () {
    projects = document.querySelectorAll('.pro-page');
    var bNext = document.getElementsByClassName("pr-viewpro");
    for (var i = 0; i < bNext.length; i++) {
        bNext[i].addEventListener('click', nextproj);
    }

});

function goOut(ci) {

    var image = $(".pro-page:eq(" + ci + ") > .pr-img:eq(0)")[0];
    var title = $(".pro-page:eq(" + ci + ") > .pro-container > .infoproject > .project-tittle:eq(0)")[0];
    var content = $(".pro-page:eq(" + ci + ") > .pro-container > .infoproject > .project-content:eq(0)")[0];
    var bg = $(".pro-page:eq(" + ci + ") > .full-img:eq(0)")[0];
    var usedtools = $(".pro-page:eq(" + ci + ") > .pro-container > .infoproject > .pro-usedtools:eq(0)")[0];


    // //PARA REMOVER EL CURRENT PRINCIPAL , SE DEBE ESCOGEER EL ULTIMO EN TERMINAR, APARENTEMENTE O EL PRIMERO .__.
    console.log(image);
    console.log(title);
    console.log(content);
    console.log(bg);


    var outTimeline = new TimelineLite({
        onUpdate: function () {
            // isUpdating = true;
        },
        onComplete: function () {
            removeClass($(".pro-page:eq(" + ci + ")")[0], "cur");

            // isUpdating = false;
            // console.log("acaba ingreso");
            // projects[ci].style.visibility = "hidden";
        }
    });
    //
    outTimeline.addLabel("out");
    // outTimeline.
    outTimeline.add(
        TweenMax.to(title, .5, {
            x: -200,
            opacity: 0, clearProps: 'opacity, x'
        }), "out"
    );
    outTimeline.add(
        TweenMax.to(bg, .5, {
            opacity: 0, clearProps: 'opacity, x'
        }), "out"
    );

    outTimeline.add(
        TweenMax.to(content, .5, {
            x: -200,
            opacity: 0, clearProps: 'opacity, x'
        }), "out");

    outTimeline.add(
        TweenMax.to(usedtools, .5, {
            x: -200,
            opacity: 0, clearProps: 'opacity, x'
        }), "out");

    outTimeline.add(
        TweenMax.to(image, .5, {
            x: -200,
            opacity: 0, clearProps: 'opacity, x'
        }), "out");

    outTimeline.play();

}

function removeCurrentClass(element) {
    removeClass(element, "current-element");
}

function goIn(nextIn) {
    addClass($(".pro-page:eq(" + currentIndex + ")")[0], "cur");

    var image = $(".pro-page:eq(" + nextIn + ") > .pr-img:eq(0)")[0];
    var usedtools = $(".pro-page:eq(" + nextIn + ") > .pro-container > .infoproject > .pro-usedtools:eq(0)")[0];
    var title = $(".pro-page:eq(" + nextIn + ") > .pro-container > .infoproject > .project-tittle:eq(0)")[0];
    var content = $(".pro-page:eq(" + nextIn + ") > .pro-container > .infoproject > .project-content:eq(0)")[0];
    var bg = $(".pro-page:eq(" + nextIn + ") > .full-img:eq(0)")[0];


    var inTimeLine = new TimelineMax({
        onUpdate: function () {
        },
        onComplete: function () {

        }
    });
    //
    inTimeLine.addLabel("ani");

    inTimeLine.fromTo(title, .5, {
        opacity: 0,
        scale: .8
    }, {
        opacity: 1,
        scale: 1,
        clearProps: 'opacity, scale'
    }, "ani");

    inTimeLine.fromTo(bg, .5, {
        opacity: 0
    }, {
        opacity: .3,
        // scale: 1,
        clearProps: 'opacity, scale'
    }, "ani");

    inTimeLine.fromTo(image, .5, {
        opacity: 0,
        scale: .8
    }, {
        opacity: .5,
        scale: 1,
        clearProps: 'opacity, scale'
    }, "ani");

    inTimeLine.fromTo(usedtools, .5, {
        opacity: 0,
        scale: .8
    }, {
        opacity: .6,
        scale: 1,
        clearProps: 'opacity, scale'
    }, "ani");


    inTimeLine.fromTo(content, .5, {
        opacity: 0,
        scale: .8
    }, {
        opacity: 1,
        scale: 1,
        clearProps: 'opacity, scale'
    }, "ani");

    inTimeLine.play();
}


///////////about line tools del who i am

var $tickerWrapper = $(".tickerwrapper-2");
var $list = $tickerWrapper.find(".list-2");
var $clonedList = $list.clone();

var listWidth = 20;

$list.find("li").each(function (i) {
    listWidth += $(this, i).outerWidth(true);
});

var endPos = 0;

$list.add($clonedList).css({
    "width": (listWidth) + "px"
    // "position":"relative"
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

//TimelineMax
var infinite = new TimelineMax({force3D: true, repeat: -1, paused: false});
var time = 300;

infinite.addLabel("tick");
infinite.fromTo($list, time, {x: 0, y: "2%"}, {x: +listWidth + listWidth, ease: Linear.easeNone}, 0, "tick");
infinite.fromTo($clonedList, time * 1.5, {x: -listWidth + 20}, {
    x: +listWidth + listWidth, ease: Linear.easeNone
}, 0, "tick");










