const mymap = L.map("mapid").setView([-22.8528726,-46.3218398], 15);

// Create Map
L
.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(mymap);

// Create Icon
const icon = L
.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// Create Popup
const popup = L
.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
})
.setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>');



L
.marker([-22.8528726,-46.3218398], { icon })
.addTo(mymap)
.bindPopup(popup);
