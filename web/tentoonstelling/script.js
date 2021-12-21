const myImage = document.getElementById("myImage");
const myTitle = document.getElementById("myTitle");
const paintingDate = document.getElementById("paintingDate");
const museumPlace = document.getElementById("museumPlace");
const locationMuseum = document.getElementById("locationMuseum");

let locationMuseums = [
    "Moskouw",
    "New York",
    "Parijs",
    "Munchen",
    "Washington D.C."
];

let museumPlaces = [
    "Pesjkinmuseum",
    "Museum of Modern Art", 
    "Mus�e d'Orsay",
    "Neue Pinakothek",
    "National Gallery of Art"
];

let paintings  = [
    "img/painting0.jpg",
    "img/painting1.jpg",
    "img/painting2.jpg",
    "img/painting3.jpg",
    "img/painting4.jpg",
    "img/painting5.jpg"
];

let titles = [
    "de schilderijen van van gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen",
    "Boerderij in de Provence"
];

let paintingDates = [
    "november 1888",
    "juni 1889",
    "september 1888",    
    "januari 1889",
    "september 1888"
];

function changeImage(index){
    paintingDate.innerHTML = paintingDates[index];
    myImage.src = paintings[index];
    myTitle.innerHTML = titles[index];
    museumPlace.innerHTML = museumPlaces[index];
    locationMuseum.innerHTML = locationMuseums[index];
}