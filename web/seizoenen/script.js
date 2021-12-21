const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "background":"gray"
    },
    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "background":"green"
    },
    {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "background":"yellow"
    },
    {
        "titel":"herfst",
        "image":"img/autumn.jpg",
        "background":"red"
    },
    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "background":"white"
    },
];

// let seizoen = {
//     "titel":"lente",
//     "image":"img/spring.jpg",
// };

function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].background;
}