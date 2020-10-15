const mymap = L.map("mapid").setView([-22.8528726,-46.3218398], 15);

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

function addMarker({id, name, lat, lng}) {
    // Create Popup
    const popup = L
    .popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    })
    .setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`);

    L
    .marker([ lat, lng ], { icon })
    .addTo(mymap)
    .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanage-info");
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    };

    addMarker(orphanage);
})
