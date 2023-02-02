function Delay(duration){
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

var loader =document.getElementById("preloader");
window.addEventListener("load", async function(){
    await Delay(0)
  loader.style.display = "none";  
})

let mobileMenuBtn = document.querySelector(".Mobile-Menu-Btn");
let mobileMenu = document.querySelector(".Mobile-Menu");
mobileMenuBtn.addEventListener("click", function(){

mobileMenu.classList.toggle("Mobile-Menu-drop");


});

