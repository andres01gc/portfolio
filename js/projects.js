var currentIndex = 0;
var isUpdating = false;
var nextProjectElement, currentProjectElement;
var projects;


function nextproj() {
    console.log("next proj");

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
    console.log("slkvnañlskdnñalksndvñalkvd    " + projects.length);
    var bNext = document.getElementsByClassName("project-next");
    for (var i = 0; i < bNext.length; i++) {
        bNext[i].addEventListener('click', nextproj);
    }

});

function goOut(ci) {


    // remo
    // projects[ci + 1].style.visibility = "visible";
    // $(".project-page:eq(0)")[0].
    // removeClass($(".project-page:eq(0)")[0], "current");

    var image = $(".pro-page:eq(" + ci + ") > .project-image:eq(0)")[0];
    var title = $(".pro-page:eq(" + ci + ") > .upside > .project-tittle:eq(0)")[0];
    var content = $(".pro-page:eq(" + ci + ") > .downside > .project-content:eq(0)")[0];
    var bg = $(".pro-page:eq(" + ci + ") > .full-img:eq(0)")[0];

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

    var image = $(".pro-page:eq(" + nextIn + ") > .project-image:eq(0)")[0];
    var title = $(".pro-page:eq(" + nextIn + ") > .upside > .project-tittle:eq(0)")[0];
    var content = $(".pro-page:eq(" + nextIn + ") > .downside > .project-content:eq(0)")[0];
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
        opacity: .1,
        // scale: 1,
        clearProps: 'opacity, scale'
    }, "ani");

    inTimeLine.fromTo(image, .5, {
        opacity: 0,
        scale: .8
    }, {
        opacity: 1,
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



