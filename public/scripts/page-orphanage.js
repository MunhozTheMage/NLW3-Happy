const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const mymap = L.map("mapid", options).setView([-22.8528726,-46.3218398], 15);

// Create Map
L
.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(mymap);

// Create Icon
const icon = L
.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

L
.marker([-22.8528726,-46.3218398], { icon })
.addTo(mymap);

// Image Galery

const selectImage = (event) => {
    // Remove active state from all activated buttons,
    // should only have one, but just in case, remove
    // from all.
    let actives = document.getElementsByClassName("active");
    for(var i = 0; i < actives.length; i++) {
        actives[0].classList.remove("active");
    }

    // Get the image from the clicked button and update 
    // the main image.
    let mainImage = document.querySelector(".orphanage-details > img");
    let clicked = event.currentTarget;
    let image = clicked.children[0];
    mainImage.src = image.src;

    // Add the active class to the clicked button.
    clicked.classList.add("active");
}
