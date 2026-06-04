let fundo;
let sonicGif;
let sonicX = 0;

function preload() {
  fundo = loadImage("fundo02.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sonicGif = createImg("sonic.gif");
  sonicGif.size(60, 60);

}

function draw() {
  background(fundo);

  // anéis
  for (let x = 50; x < width; x += 80) {
    let y = 550 - sin(x * 0.3) * 40;

    noFill();
    stroke(255, 215, 0);
    strokeWeight(4);
    circle(x, y, 20);
  }

  sonicX += 3;

  let sonicY = 550 - sin(sonicX * 0.02) * 40 + 20;

  sonicGif.position(
    sonicX - 30,
    sonicY - 30
  );

  if (sonicX > width + 50) {
    sonicX = -50;
  }
}