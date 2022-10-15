const bob = document.getElementById("bob");
const sub = document.getElementById("sub");

function jump() {
    if (bob.classList != "jump") {
        bob.classList.add("jump");

        setTimeout(function () {
            bob.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function () {

    let bobTop = parseInt(window.getComputedStyle(bob).getPropertyValue("top"));

    let hambLeft = parseInt(
        window.getComputedStyle(sub).getPropertyValue("left")
    );
    if(hambLeft < 60 && hambLeft > 0 && bobTop >= 150) {
        alert("Game Over!");
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});
