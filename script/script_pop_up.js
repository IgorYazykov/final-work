const modal_button = document.getElementById("modal_button");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const modal_button_1 = document.getElementById("modal_button_1");

modal_button.addEventListener("click", function(){
    modal.classList.add("active");
})

close.addEventListener("click", function(){
    modal.classList.remove("active");
})

modal_button_1.addEventListener("click", function(){
    modal.classList.add("active");
})

close.addEventListener("click", function(){
    modal.classList.remove("active");
})