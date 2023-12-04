const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click",()=>{
    container.classList.toggle("active");
});
/*
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    container.classList.toggle("active");
});
*/