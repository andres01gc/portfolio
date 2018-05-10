var routes = document.querySelectorAll('.main-route');
var duration = .4;
var isAnimating = false;

//inicia las animicaciónes para saltar de una a otra pantalla principal
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

/////////////////////////////////////////////////////ABOUT WHO I AM

// TODO revisar el problema de google map
function init() {
    // // Basic options for a simple Google Map
    // // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var mapOptions = {
    //     // How zoomed in you want the map to start at (always required)
    //     zoom: 3.5,
    //     // The latitude and longitude to center the map (always required)
    //     center: new google.maps.LatLng(3.4372200, -76.5225000), // New York
    //     // How you would like to style the map.
    //     // This is where you would paste any style found on Snazzy Maps.
    //     styles: [{"stylers": [{"visibility": "off"}]}, {
    //         "featureType": "water",
    //         "stylers": [{"visibility": "on"}, {"color": "#2f343b"}]
    //     }, {
    //         "featureType": "landscape",
    //         "stylers": [{"visibility": "on"}, {"color": "#703030"}]
    //     }, {
    //         "featureType": "administrative",
    //         "elementType": "geometry.stroke",
    //         "stylers": [{"visibility": "on"}, {"color": "#2f343b"}, {"weight": 1}]
    //     }]
    //     , disableDefaultUI: true
    // };
    // // Get the HTML DOM element that will contain your map
    // // We are using a div with id="map" seen below in the <body>
    // var mapElement = document.getElementById('map');
    // // Create the Google Map using our element and options defined above
    // var map = new google.maps.Map(mapElement, mapOptions);
    // // Let's also add a marker while we're at it
    // var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(3.4372200, -76.5225000),
    //     map: map,
    //     title: 'Aquí, vé!'
    // });
}



