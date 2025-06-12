const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load background
const bgImage = new Image();
bgImage.src = "assets/backgrounds/forest.png";

// Load Akaza
const akazaImg = new Image();
akazaImg.src = "assets/characters/akaza.png";

let player = {
  x: 100,
  y: 100,
  width: 50,
  height: 50,
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

  // Boundaries
  if (player.x < 0) player.x = 0;
  if (player.y < 0) player.y = 0;
  if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
  if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

  // Draw Akaza
  ctx.drawImage(akazaImg, player.x, player.y, player.width, player.height);
}

function gameLoop() {
  movePlayer();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
