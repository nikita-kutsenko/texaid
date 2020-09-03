window.onscroll = function() {scrollFunc()};

var nav = document.getElementById("navID");
var header = document.getElementById("headerID");

var sticky = nav.offsetTop;
console.log(sticky);

function scrollFunc() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("navDown");
    } else {
        header.classList.remove("navDown");
    }
}