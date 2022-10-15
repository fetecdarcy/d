const dino = document.getElementById("dino")
const cacto = document.getElementById("cacto")

function jump () {
    if(dino.classList !="jump") {

        dino.classList.add("jump");

        setTimeout(function (){
            dino.classList.remove("jump");
        },300);

    }
}

let isAlive = setInterval(function (){
    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    let cactoLeft = parseInt(
        window.getComputedStyle(cacto).getPropertyValue("left")
    );

    if (cactoLeft < 50 && cactoLeft > 0 && dinoTop >= 150) {
        alert("Game over!");
    }
 
},10);

document.addEventListener("keydown", function() {
    jump();
});