var hamb = document.querySelector(".hamburger");
var sideBar = document.querySelector(".dashboard-side-bar");
var nav = document.querySelector("nav");
var overLay = document.querySelector(".overlay");
var pen = document.querySelector(".pi-pen")
var formSpace = document.querySelector(".form-space")
var btn = document.querySelector("button")

pen.addEventListener("click" ,() => {
    overLay.classList.add("active")
    formSpace.classList.add("pop")
})

overLay.addEventListener("click", () => {
    overLay.classList.remove("active")
    formSpace.classList.remove("pop")
})
btn.addEventListener("click", () => {
    overLay.classList.remove("active")
    formSpace.classList.remove("pop")
})

hamb.addEventListener("click", () =>{
    sideBar.classList.toggle("active")
    hamb.classList.toggle("active")
});
