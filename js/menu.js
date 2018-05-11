var buttonmenus = document.querySelectorAll('.menubtns');


addEventListenerList(buttonmenus, 'click', function (e) {
    //apaga el menú

    //se envia por parametro la nueva pagina que se quiere mostrar.

    switch (e.currentTarget.dataset.in) {
        case 'mnHome':
            outMenu(".p-home");
            break;
        case 'mnAbout':
            outMenu(".p-about");
            break;
        case 'mnProject':
            outMenu(".p-projects");
            break;
        case 'mnContact':
            outMenu(".p-contact");
            break;
    }
});

document.getElementById("menubt").addEventListener("click", function () {
    inMenu();
});

var currentPageAcive;

function inMenu() {
    console.log('se muestra el menú');
    addClass(document.querySelector('.pagemenu'), "menuactive");
    currentPageAcive = document.querySelector('.is-current');
    var pagemenu = $('.pagemenu');

    var inMn = new TimelineLite({
        onUpdate: function () {
            // isUpdating = true;
        },
        onComplete: function () {
            isAnimating = false;
            initautoMenu();
        }
    });

    inMn.fromTo(pagemenu, 1, {
        y: "-100%"
    }, {
        scale: 1,
        y: "0%",
        ease: Power3.easeOut
        // clearProps: 'opacity, scale'
    }, "pack");

    inMn.play();
}

function initautoMenu() {
    var text = $(".mn-autotext");
    var infinite = new TimelineMax({force3D: true, repeat: -1, paused: false});
    infinite.fromTo(text, 50, {}, {
        clearProps: 'opacity, scale',
        x: "-500%",
        ease: Linear.easeNone
    }, "tick");
}


function outMenu(pageclass) {
    var pagemenu = $('.pagemenu');
    addClass(document.querySelector(pageclass), "is-current");
    var inMn = new TimelineLite({
        onUpdate: function () {
            // isUpdating = true;
        },
        onComplete: function () {
            removeClass(document.querySelector('.pagemenu'), "menuactive");
            console.log();
            removeClass(currentPageAcive, "is-current");
        }
    });

    inMn.fromTo(pagemenu, 1, {}, {
        scale: 1,
        y: "100%",
        ease: Power3.easeIn
        // clearProps: 'opacity, scale'
    }, "pack");

    inMn.play();

}