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

    removeClass($(".pro-page:eq(" + currentIndex + ")")[0], "cur");

    // remo
    // projects[ci + 1].style.visibility = "visible";
    // $(".project-page:eq(0)")[0].
    // removeClass($(".project-page:eq(0)")[0], "current");

    // var image = $(".project-page:eq(" + currentIndex + ") > .project-image:eq(0)")[0];
    // var title = $(".project-page:eq(" + currentIndex + ") > .upside > .project-tittle:eq(0)")[0];
    // var content = $(".project-page:eq(" + currentIndex + ") > .downside > .project-content:eq(0)")[0];
    //
    // // console.log(image);
    // // console.log(title);
    // // console.log(content);
    // // // Title animation
    // //PARA REMOVER EL CURRENT PRINCIPAL , SE DEBE ESCOGEER EL ULTIMO EN TERMINAR, APARENTEMENTE O EL PRIMERO .__.
    //
    // var outTimeline = new TimelineLite({
    //     onUpdate: function () {
    //         // isUpdating = true;
    //     },
    //     onComplete: function () {
    //         isUpdating = false;
    //         console.log("acaba ingreso");
    //         projects[ci].style.visibility = "hidden";
    //     }
    // });
    //
    // outTimeline.addLabel("out");
    // // outTimeline.
    // outTimeline.add(
    //     TweenMax.to(title, .5, {
    //         x: -200,
    //         opacity: 0, clearProps: 'opacity, x'
    //     }), "out"
    // );
    // outTimeline.add(
    //     TweenMax.to(content, .5, {
    //         x: -200,
    //         opacity: 0, clearProps: 'opacity, x'
    //     }), "out");
    //
    // outTimeline.add(
    //     TweenMax.to(image, .5, {
    //         x: -200,
    //         opacity: 0, clearProps: 'opacity, x'
    //     }), "out");
    //
    // outTimeline.play();

}

function removeCurrentClass(element) {
    removeClass(element, "current-element");
}

function goIn(nextIn) {
    addClass($(".pro-page:eq(" + currentIndex + ")")[0], "cur");

    // console.log(" qdfasdvasñdvlm");
    //
    // addClass(projects[nextIn], "current");
    //
    // // projects[nextIn].style.visibility = "visible";
    // var image = $(".project-page:eq(" + nextIn + ") > .project-image:eq(0)")[0];
    // var title = $(".project-page:eq(" + nextIn + ") > .upside > .project-tittle:eq(0)")[0];
    // var content = $(".project-page:eq(" + nextIn + ") > .downside > .project-content:eq(0)")[0];
    //
    // console.log(image);
    // console.log(title);
    // console.log(content);
    //
    //
    // var inTimeLine = new TimelineMax({
    //     onUpdate: function () {
    //     },
    //     onComplete: function () {
    //
    //     }
    // });
    //
    // inTimeLine.addLabel("ani");
    //
    // inTimeLine.fromTo(title, .5, {
    //     opacity: 0,
    //     scale: .8
    // }, {
    //     opacity: 1,
    //     scale: 1,
    //     clearProps: 'opacity, scale'
    // }, "ani");
    // inTimeLine.fromTo(image, .5, {
    //     opacity: 0,
    //     scale: .8
    // }, {
    //     opacity: 1,
    //     scale: 1,
    //     clearProps: 'opacity, scale'
    // }, "ani");
    // inTimeLine.fromTo(content, .5, {
    //     opacity: 0,
    //     scale: .8
    // }, {
    //     opacity: 1,
    //     scale: 1,
    //     clearProps: 'opacity, scale'
    // }, "ani");
    //
    // inTimeLine.play();
}



