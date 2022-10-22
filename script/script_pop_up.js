const modal_button = document.getElementById("modal_button");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

modal_button.addEventListener("click", function(){
    modal.classList.add("active");
})

close.addEventListener("click", function(){
    modal.classList.remove("active");
})