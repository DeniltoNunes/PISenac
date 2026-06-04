let vagalumes = [];
let anguloBalanco = 0;
let cabanaimg; 

function preload() {
  cabanaimg = loadImage("cabana.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 60; i++) {
    vagalumes.push({
      x: random(width),
      y: random(height),
      offsetX: random(-120, 120),
      offsetY: random(-120, 120),
      tamanho: random(6, 12),
      velocidade: random(0.01, 0.03)
    });
  }
}

function draw() {
  imageMode(CORNER);
  image(cabanaimg, 0, 0, width, height);

  // balanço da lua
  anguloBalanco += 0.02;
  let deslocamento = sin(anguloBalanco) * 30;
  let luaAtualX = (width - 200) + deslocamento;
  let luaAtualY = 200;
  let fioTopoX = width - 200;

  stroke(200, 200, 180, 180);
  strokeWeight(1.5);
  line(fioTopoX, 0, luaAtualX, luaAtualY - 40);

  // dsenho da lua
  noStroke();
  fill(255, 255, 200, 30);
  circle(luaAtualX, luaAtualY, 300);
  fill(255, 255, 200, 60);
  circle(luaAtualX, luaAtualY, 250);
  fill(255, 248, 180);
  circle(luaAtualX, luaAtualY, 200);
  fill(240, 230, 150, 120);
  circle(luaAtualX - 18, luaAtualY - 12, 24);
  circle(luaAtualX + 21, luaAtualY + 15, 15);
  circle(luaAtualX - 7, luaAtualY + 21, 12);

  // vagalumes
  for (let i = 0; i < vagalumes.length; i++) {
    let alvoX = mouseX + vagalumes[i].offsetX;
    let alvoY = mouseY + vagalumes[i].offsetY;

    let dx = alvoX - vagalumes[i].x;
    let dy = alvoY - vagalumes[i].y;

    vagalumes[i].x += dx * vagalumes[i].velocidade;
    vagalumes[i].y += dy * vagalumes[i].velocidade;

    if (frameCount % 120 == 0) {
      vagalumes[i].offsetX = random(-120, 120);
      vagalumes[i].offsetY = random(-120, 120);
    }

    noStroke();
    fill(255, 255, 100, 40);
    circle(vagalumes[i].x, vagalumes[i].y, vagalumes[i].tamanho * 3);
    fill(255, 255, 120);
    circle(vagalumes[i].x, vagalumes[i].y, vagalumes[i].tamanho);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}