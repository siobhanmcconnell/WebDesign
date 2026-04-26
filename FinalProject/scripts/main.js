const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255, 200, 255, 0.8)";
ctx.shadowColor = "rgba(255, 200, 255, 0.8)";
ctx.shadowBlur = 20;

let y = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(150, y, 40, 0, Math.PI * 2);
  ctx.fill();

  y += 1; 
  if (y > canvas.height) y = 0; 
}

function loop() {
  draw();
  requestAnimationFrame(loop);
}

loop();