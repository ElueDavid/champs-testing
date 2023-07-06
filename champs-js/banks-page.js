var hamb = document.querySelector(".hamburger");
var nv = document.querySelector(".nav-links");
var nav = document.querySelector("nav");

hamb.addEventListener("click", () =>{
    nv.classList.toggle("active")
    hamb.classList.toggle("active")
});

document.addEventListener("scroll", () =>{
    var nav = document.querySelector("nav");
    if(window.scrollY > 0) {
        nav.classList.add("scrolled")
    }
    else {
        nav.classList.remove("scrolled")
    }
})