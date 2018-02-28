var routes = document.querySelectorAll('.main-route');
var duration = .4;
var isAnimating = false;
var currentElement = document.querySelector('.is-current');

// https://static.pexels.com/photos/140945/pexels-photo-140945.jpeg
addEventListenerList(routes, 'click', function (e) {
    currentElement = document.querySelector('.is-current');
    if (!isAnimating) {
        isAnimating = true;
        changeRoute(e.currentTarget.dataset.in);
    }
});

function changeRoute(nRoute) {
    switch (nRoute) {
        case 'goHome':
            showHome(currentElement);
            break;
        case 'goAbout':
            showAbout(currentElement);
            break;
        case 'goProjects':
            showProjects(currentElement);
            break;
        case 'goContact':
            //ocultar ese primer proyecto! SOLUCION TEMPORAL TODO
            showContact(currentElement);
            break;
    }
}

function showContact(e) {
    currentElement = document.querySelector('#nav-buttons').style.visibility = "visible";
    scaleDown(e);//saca de la escena el actual
    scaleUp(document.querySelector('.p-contact'));//entra !
}

function showHome(e) {
    currentElement = document.querySelector('#nav-buttons').style.visibility = "hidden";
    scaleDown(e);//saca de la escena el actual
    scaleUp(document.querySelector('.p-home'));//entra !
}

function showProjects(e) {
    currentElement = document.querySelector('#nav-buttons').style.visibility = "visible";
//visualizar un primer proyecto
//     currentElement = document.querySelector('.project-page').style.visibility = "visible";
    scaleDown(e);//saca de la escena el actual
    scaleUp(document.querySelector('.p-projects'));//entra !
}

function showAbout(e) {
    currentElement = document.querySelector('#nav-buttons').style.visibility = "visible";
    // console.log("all+a");
    outHome(e);//saca de la escena el actual
}

function scaleUp(el) {
    // console.log("all+a");
    addClass(el, 'is-current');
    TweenLite.fromTo(el, duration, {
        opacity: 0,
        scale: .8
    }, {
        opacity: 1,
        scale: 1,
        clearProps: 'opacity, scale', onComplete: function () {
            isAnimating = false;
        }
    });
}

function scaleDown(el) {
    addClass(el, 'is-current');
    TweenLite.fromTo(el, .5, {
        opacity: 1,
        scale: 1
    }, {
        opacity: 0,
        scale: .8,
        clearProps: 'opacity, scale',
        onComplete: function () {
            isAnimating = false;
            removeClass(el, ['is-onTop', 'is-current']);

            if (el.classList.contains('p-projects')) {
                console.log("wuy");

                document.querySelector(".current").style.visibility = "hidden";
            } else {
                console.log(el.classList);
            }
        }
    });
}


function outHome(el) {
    addClass(el, 'is-current');


    // var logo = $('.logo');
    var imgup = $('.up');
    var nameup = $('.home-myname');
    var splitline = $('.home-split-line');
    var imgdown = $('.down');
    var namedown = $('.home-myname-down');
    // var name = $('.home-myname-down');
    // var current = $('.current');

    var outh = new TimelineLite({

        onUpdate: function () {
            // isUpdating = true;
        },
        onComplete: function () {
            isAnimating = false;
            removeClass(el, ['is-onTop', 'is-current']);
            scaleUp(document.querySelector('.p-about'));//entra !

            if (el.classList.contains('p-projects')) {
                // console.log("wuy");

                document.querySelector(".current").style.visibility = "hidden";
            } else {
                // console.log(el.classList);
            }
        }

    });


    outh.fromTo(imgup, .8, {
        opacity: 1,
        scale: 1
    }, {
        opacity: 0,
        width: 0,
        clearProps: 'opacity, scale'
    }, "pack");

    outh.fromTo(imgdown, .8, {
        opacity: 1,
        scale: 1
    }, {
        opacity: 0,
        width: 0,
        x: 400,
        clearProps: 'opacity, scale'
    }, "pack");


    outh.fromTo(nameup, 1, {
        // opacity: 1,
        // scale: 1
    }, {
        opacity: 0,
        // width: 0,
        x: -400,

        clearProps: 'opacity, scale'
    }, "pack");

    outh.fromTo(namedown, 1, {
        // opacity: 1,
        // scale: 1
    }, {
        opacity: 0,
        // width: 0,
        x: 400,
        clearProps: 'opacity, scale'
    }, "pack");


    outh.fromTo(splitline, .3, {
        // opacity: 1,
        // scale: 1
    }, {
        opacity: 0,
        // width: 0,
        width: 0,
        clearProps: 'opacity, scale'
    }, "pack");

    outh.play();

}

// utils
function addClass(el, className) {
    [].concat(className).forEach(function (n) {
        el.classList.add(n);
    });
}

function removeClass(el, className) {
    [].concat(className).forEach(function (n) {
        el.classList.remove(n);
    });
}

function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

$('#parallax').parallax();
(function () {

})();