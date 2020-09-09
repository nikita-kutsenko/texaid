window.onscroll = function() {scrollFunc()};

var nav = document.getElementById("navID");
var header = document.getElementById("headerID");
var hero = document.getElementById("about");

var stickyNav = nav.offsetTop;
var stickyHero = hero.offsetTop;

function scrollFunc() {
    if (window.innerWidth >= 1024) {
        if (window.pageYOffset >= stickyNav) {
            header.classList.add("navDown");
        } else {
            header.classList.remove("navDown");
        }
    } else {
        if (window.pageYOffset >= stickyHero) {
            header.classList.add("navDown");
        } else {
            header.classList.remove("navDown");
        }
    }
    
}