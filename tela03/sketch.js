let fundo;
let marioGif;

let marioX = 100;
let marioY;
let alturaBase;

let pulando = false;
let angulo = 0;

const ALTURA_PULO = 250;

function preload() {
  fundo = loadImage("mapabross.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mario = createImg("mario.png");
  mario.size(80, 80);

  alturaBase = height - 180;
  marioY = alturaBase;
}

function draw() {
  image(fundo, 0, 0, width, height);

  marioX = constrain(mouseX - 40, 0, width - 80);

  if (pulando) {
    marioY = alturaBase - sin(radians(angulo)) * ALTURA_PULO;

    angulo += 5;

    if (angulo >= 180) {
      pulando = false;
      angulo = 0;
      marioY = alturaBase;
    }
  }

  mario.position(marioX, marioY);
}

function mouseClicked() {
  if (!pulando) {
    pulando = true;
    angulo = 0;
  }

}

