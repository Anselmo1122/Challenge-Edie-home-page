
const btnMenu = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu-toggle")

btnMenu.addEventListener("click", ()=>{
    menu.classList.toggle("open")
    menu.style.display = "block";
})