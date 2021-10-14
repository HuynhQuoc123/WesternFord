var images = [
    "./images/home/slider/slider1.jpg",
    "./images/home/slider/slider2.jpg",
    "./images/home/slider/slider3.jpg",
    "./images/home/slider/slider4.jpg",
];

var num = 0;

function next() {
    var slider = document.getElementById("slider-img");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider-img");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}

setInterval(next, 4000); // chuyen slider sau 4s