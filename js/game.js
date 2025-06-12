const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
  x: 100,
  y: 100,
  width: 50,
  height: 50,
  color: "purple",
  name: "Akaza",
  speed: 3
};

const keys = {};

document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

function movePlayer() {
  if (keys["ArrowUp"]) player.y -= player.speed;
  if (keys["ArrowDown"]) player.y += player.speed;
  if (keys["ArrowLeft"]) player.x -= player.speed;
  if (keys["ArrowRight"]) player.x += player.speed;

  // Bounds
  player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
}

function draw() {
  // Fake sky background
  ctx.fillStyle = "#87ceeb";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw Akaza (placeholder square)
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Name
  ctx.fillStyle = "black";
  ctx.font = "16px sans-serif";
  ctx.fillText(player.name, player.x, player.y - 10);
}

function gameLoop() {
  movePlayer();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
