// Le script d'interactivité
const filieres = "about.html";
const contact = "contact.html";
const mission = "mission.html";

const toMission = () => {
    location.href = mission;
}
const toAbout = () => {
    location.href = filieres;
}
const toContact = () => {
    location.href = contact;
}
const inscriptions = "inscriptions.html";
const inscription = () => {
    location.href  = inscriptions;
}

let active = false;
function openNav(){
    document.getElementById("sideNav").src = active?
    'menu.png' : 'close.png';
    document.getElementById("mySidenav").style.width = active?
    "0%": "60%";
    active = !active;
    return;
}

const BetsaleelSoft = ()=> {
    location.href = "https://wa.me/+243831607980";
}
const connect = () => {
    location.href = 'connexion.html';
}

function preloadImage(url) { 
    const img = new Image(); 
    // const gif = new Gif();
    // gif.src = url;
    img.src = url;
}
// Preload the image
preloadImage('Loading_icon.gif');

document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        document.getElementById("loading").style.display = "none";
    }
}

const images =  [
    "url('cnac_1.jpg')",
    "url('cnac_2.jpg')",
    "url('cnac_3.jpg')",
];
let current = 0;
const carousel = document.getElementById("background-carousel");

const changeBackground = () => {
    carousel.style.backgroundImage = images[current];
    current = (current + 1) % images.length;
}
changeBackground()
setInterval(changeBackground, 5000);

const imgsDomaine = [
    "url('minfp.jpeg')",
    "url('menuiserie-img1.jpg')",
]
let currentImg = 0;
const imgElement = document.getElementById("carousel-img");

const showImage = () => {
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = imgsDomaine[currentImg];
        imgElement.style.opacity = 1
    }, 2000);
}
const nextImage = () => {
    currentImg = (currentImg + 1) % imgsDomaine.length;
    showImage();
}
const prevImg = () => {
    currentImg = (currentImg - 1) % imgsDomaine.length;
    showImage();
}
// Auto changement
showImage();
setInterval(nextImage, 1000);

// Detection tactile
let touchStartX = 0

const startTouch = (e) => {
    touchStartX = e.touches[0].clientX
}

const endTouch = (e) => {
    let touchEndX = e.changedTouches[0].clientX;
    if(touchEndX < touchStartX - 50) {
        nextImage();
    } else if(touchEndX > touchStartX + 50) {
       prevImg(); 
    }
}