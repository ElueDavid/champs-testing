var hamb = document.querySelector(".hamburger");
var nv = document.querySelector(".nav-links");
var nav = document.querySelector("nav");
var overLay = document.querySelector(".overlay");
var btn1 = document.querySelector(".bank-btn1")
var btn2 = document.querySelector(".bank-btn2")
var formSpace = document.querySelector(".form-space")
var btn = document.querySelector("button")

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

btn1.addEventListener("click" ,() => {
    overLay.classList.add("active")
    formSpace.classList.add("pop")
})
btn2.addEventListener("click" ,() => {
    overLay.classList.add("active")
    formSpace.classList.add("pop")
})

overLay.addEventListener("click", () => {
    overLay.classList.remove("active")
    formSpace.classList.remove("pop")
})

