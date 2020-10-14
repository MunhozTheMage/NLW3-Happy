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
    iconAnchor: [29, 68]
});

// Create and add market
var marker;

mymap.on('click', (e) => {
    const { lat, lng } = e.latlng;
    const coordinates = [lat, lng];

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    marker && mymap.removeLayer(marker);

    marker = L.marker(coordinates, { icon }).addTo(mymap);
});

// Add or remove image upload field
const addImageField = () => {
    let container = document.querySelector('#images');
    let fields = document.querySelectorAll('.new-upload');
    let newField = fields[fields.length - 1].cloneNode(true);

    if(newField.children[0].value == "") {
        alert("Adicione o link de uma imagem antes de adicionar outra.");
        return
    }

    newField.children[0].value = "";
    container.appendChild(newField);
}

const removeImageField = (e) => {
    let field = e.currentTarget.parentNode;
    let fields = document.querySelectorAll('.new-upload');

    if(fields.length <= 1) {
        field.children[0].value = "";
        return;
    }

    field.remove();
}

// Toogle yes or no status

const toggleYesOrNo = (e) => {
    let clickedButton = e.currentTarget;
    let container = document.querySelector(".button-select");
    let hiddenInput = document.querySelector("[name=openOnWeekends]");

    for(var i = 0; i < container.children.length; i++) {
        container.children[i].classList.remove("active");
    }

    clickedButton.classList.add("active");

    switch(clickedButton.innerHTML) {
        case "Sim": 
        hiddenInput.value = 1;
        break;
        case "Não": 
        hiddenInput.value = 0;
        break;
    }
}