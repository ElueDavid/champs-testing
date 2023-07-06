var hamb = document.querySelector(".hamburger");
var sideBar = document.querySelector(".dashboard-side-bar");
var nav = document.querySelector("nav");

hamb.addEventListener("click", () =>{
    sideBar.classList.toggle("active")
    hamb.classList.toggle("active")
});

// document.addEventListener("scroll", () =>{
//     var nav = document.querySelector("nav");
//     if(window.scrollY > 0) {
//         nav.classList.add("scrolled")
//     }
//     else {
//         nav.classList.remove("scrolled")
//     }
// })