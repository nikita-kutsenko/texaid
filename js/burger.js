let btn = document.querySelector("#burgerID");
let wrapperID = document.querySelector("#wrapperID");
let links = document.querySelectorAll('.navListLinks');

btn.onclick = () => {
    wrapperID.classList.toggle("active");
}

for (let i = 0; i < links.length; i ++) {
    links[i].onclick = () => {
        wrapperID.classList.remove("active");
    }
}