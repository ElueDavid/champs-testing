var navBtn = document.querySelector(".nav-btn");
var overLay = document.querySelector(".overlay");
var logSpace = document.querySelector(".login-space");
var btnOne = document.querySelector(".btn-one");
var btnTwo = document.querySelector(".btn-two");
var backBtn = document.querySelector(".back");
var logBack = document.querySelector(".fg2-log");
var fgLogSpace = document.querySelector(".fg-login-space");
var fgTwoLogSpace = document.querySelector(".fg2-login-space");

navBtn.addEventListener("click" ,() => {
    overLay.classList.add("active")
    logSpace.classList.add("pop")
})

btnOne.addEventListener("click" ,() => {
    overLay.classList.add("active")
    logSpace.classList.remove("pop")
    fgLogSpace.classList.add("pop")
})
btnTwo.addEventListener("click" ,() => {
    overLay.classList.add("active")
    logSpace.classList.remove("pop")
    fgLogSpace.classList.remove("pop")
    fgTwoLogSpace.classList.add("pop")
})

backBtn.addEventListener("click" ,() => {
    overLay.classList.add("active")
    logSpace.classList.remove("pop")
    fgLogSpace.classList.add("pop")
    fgTwoLogSpace.classList.remove("pop")
})
logBack.addEventListener("click" ,() => {
    overLay.classList.add("active")
    logSpace.classList.add("pop")
    fgLogSpace.classList.remove("pop")
    fgTwoLogSpace.classList.remove("pop")
})

overLay.addEventListener("click", () => {
    overLay.classList.remove("active")
    logSpace.classList.remove("pop")
    fgLogSpace.classList.remove("pop")
    fgTwoLogSpace.classList.remove("pop")
})

