var routes = document.querySelectorAll('.main-route');
var duration = .4;
var isAnimating = false;


addEventListenerList(routes, 'click', function (e) {
    currentElement = document.querySelector('.is-current');

    if (!isAnimating) {
        isAnimating = true;
        changeRoute(e.currentTarget.dataset.in);
    }
});


function changeRoute(nRoute) {
    console.log(nRoute);
    switch (nRoute) {
        case 'goAbout':
            showAbout(currentElement);
            break;
        case 'goProjects':
            showProjects(currentElement);
            break;
        case 'goContact':
            showContact(currentElement);
            break;
    }
}

function showContact(e) {
    // currentElement = document.querySelector('#nav-buttons').style.visibility = "visible";
    // scaleDown(e);//saca de la escena el actual
    // scaleUp(document.querySelector('.p-contact'));//entra !
    outHome(e, '.p-contact');
}

function showHome(e) {
    // currentElement = document.querySelector('#nav-buttons').style.visibility = "hidden";
    // scaleDown(e);//saca de la escena el actual
    // scaleUp(document.querySelector('.p-home'));//entra !

}

function showProjects(e) {
//     document.querySelector('#nav-buttons').style.visibility = "visible";
// //visualizar un primer proyect
//
//     scaleDown(e);//saca de la escena el actual
//     scaleUp(document.querySelector('.p-projects'));//entra !
    outHome(e, '.p-projects');
}

function showAbout(e) {
    // hace visible la barra de navegacion
    // currentElement = document.querySelector('#nav-buttons').style.visibility = "visible";
    // console.log("all+a");
    outHome(e, '.p-about');//saca de la escena el actual

}

function inAbout(el) {
    addClass(el, 'is-current');
    // //
    // // console.log("inicia la entrada de about");

    // var img = $(".mask");
    var fullimg = $(".ab-img-container");
    // var splitline = $(".v-l");
    // var autxt = $(".ab-autoText");
    // var tittle = $(".ab-ttl-1");
    // var content = $(".ab-content");
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
    //
    // inth.fromTo(splitline, 1, {
    //     webkitClipPath: 'polygon(20% 0, 20% 0, 100% 100%, 100% 100%)',
    //     width: 0
    // }, {
    //     webkitClipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
    //     width: "100%",
    //     ease: Power3.easeIn
    // });
    //
    inth.fromTo(fullimg, 1.5, {
            opacity: 0
            // scale: 0
        }, {
            opacity: 1,
            ease:
            Power3.easeIn,
            clearProps: 'opacity, scale'
        }
    );
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

function outAbout() {


}

function scaleUp(el) {
    addClass(el, 'is-current');

    // console.log("all+a");
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

// $('#parallax').parallax();
// (function () {
//
// })();


/////////////////////////////////////////////////////ABOUT WHO I AM


// google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 3.5,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(3.4372200, -76.5225000), // New York
        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"stylers": [{"visibility": "off"}]}, {
            "featureType": "water",
            "stylers": [{"visibility": "on"}, {"color": "#2f343b"}]
        }, {
            "featureType": "landscape",
            "stylers": [{"visibility": "on"}, {"color": "#703030"}]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{"visibility": "on"}, {"color": "#2f343b"}, {"weight": 1}]
        }]
        , disableDefaultUI: true
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(3.4372200, -76.5225000),
        map: map,
        title: 'Aquí, vé!'
    });
}



