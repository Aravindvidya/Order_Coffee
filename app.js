const header = document.querySelector("header");
const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");

menubtn.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu");
});

closebtn.addEventListener("click", () =>{
    menubtn.click();
});