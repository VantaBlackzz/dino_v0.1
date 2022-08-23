const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
document.addEventListener('DOMContentLoaded', function() {
    let count = 0;
    
document.addEventListener("keydown", function(event) {
    jump();
    count = count + 10;
    console.log(count)
    document.getElementById("number").innerText = count;  
})
function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout( function() {
    dino.classList.remove("jump")
}, 300)
}
let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130) {
        alert(`Game Over! Your score: ${count}`);
        count = 0;
        document.getElementById("number").innerText = 0;
    }
}, 10)
});
  