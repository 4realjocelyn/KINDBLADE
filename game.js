
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
