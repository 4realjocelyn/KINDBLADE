const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load background
let bgImage = new Image();
bgImage.src = "assets/backgrounds/forest.png";

// Load Akaza sprite
let akazaSprite = new Image();
akazaSprite.src = "assets/characters/akaza.png";

let player = {
  x: 100,
  y: 100,
  size: 48,
  name: "Akaza"
};

function drawBackground() {
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
  ctx.drawImage(akazaSprite, player.x, player.y, player.size, player.size);
  ctx.fillStyle = "white";
  ctx.font = "16px Pixel, Arial";
  ctx.fillText(player.name, player.x, player.y - 10);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawPlayer();
}

document.addEventListener("keydown", (e) => {
  const speed = 5;
  if (e.key === "ArrowUp" || e.key === "w") player.y -= speed;
  if (e.key === "ArrowDown" || e.key === "s") player.y += speed;
  if (e.key === "ArrowLeft" || e.key === "a") player.x -= speed;
  if (e.key === "ArrowRight" || e.key === "d") player.x += speed;
});

setInterval(draw, 1000 / 60);
