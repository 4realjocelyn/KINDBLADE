
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
  x: 100,
  y: 100,
  size: 30,
  color: "purple",
  name: "Akaza"
};

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
  ctx.fillStyle = "black";
  ctx.fillText(player.name, player.x, player.y - 10);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
}

setInterval(draw, 1000 / 60); 
document.addEventListener("keydown", (e) => {
  const speed = 5;
  if (e.key === "ArrowUp" || e.key === "w") player.y -= speed;
  if (e.key === "ArrowDown" || e.key === "s") player.y += speed;
  if (e.key === "ArrowLeft" || e.key === "a") player.x -= speed;
  if (e.key === "ArrowRight" || e.key === "d") player.x += speed;
});

