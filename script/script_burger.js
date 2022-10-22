const burger = document.getElementById("burger");
const burgerActiv = document.getElementById("burgerActiv");
const closeMobileMenu =document.getElementById("closeMobileMenu");

burger.addEventListener("click", function(){
    burgerActiv.classList.add("tap_burger");
    closeMobileMenu.classList.add("close_menu");
})

closeMobileMenu.addEventListener("click",function(){
    burgerActiv.classList.remove("tap_burger");
    closeMobileMenu.classList.remove("close_menu");
})