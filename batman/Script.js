const et = document.getElementById ("et");
const ast = document.getElementById ("ast");

function jump () {
    if (et.classList != "jump") {
        et.classList.add("jump");

        setTimeout (function () {
            et.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function () {
    
    let etTop = parseInt(window.getComputedStyle(et).getPropertyValue("top"));
    let astLeft = parseInt (
        window.getComputedStyle(ast).getPropertyValue("left")
    );

    if (astLeft < 50 && astLeft > 0 && etTop >= 140) {
        alert("Game Over!")
    }
}, 10);

document.addEventListener ("keydown", function (event) {
    jump();
});