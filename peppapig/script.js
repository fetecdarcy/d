const dino = document.getElementById("dino")
const cacto = document.getElementById("cacto");
const score = document.querySelector(".score");
let count = 0; 
let alreadyjump = false;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!dino.classList != "jump") {
    dino.classList.add("jump");
    alreadyjump = true;

    setTimeout(() => {
      dino.classList.remove("jump");
      alreadyjump = false;
    }, 1200);
  }
}

setInterval(() => {
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  if (cactoLeft > 20 && cactoLeft < 100 && dinoBottom <= 90) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);
