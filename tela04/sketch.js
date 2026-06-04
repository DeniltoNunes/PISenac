let chuva = [];
let batmanImg;
let raio = 0;

function preload() {
  batmanImg = loadImage("bastsemfundo2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 3000; i++) {
    chuva[i] = [];
    chuva[i][0] = random(width);
    chuva[i][1] = random(height);
    chuva[i][2] = random(1, 5);
  }
}

function mousePressed() {
  raio = 15; 
}

function draw() {

  if (raio > 0) {
    background(255, 220, 180, 255); 
    raio--;
  } else {
    background(100, 0, 0, 255);
  }

  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    let tam = random(1, 4);
    fill(random(120, 160), 0, 0, random(30, 80));
    noStroke();
    ellipse(x, y, tam, tam);
  }

  let batmanH = height * 0.95;
  let batmanW = batmanH * (batmanImg.width / batmanImg.height);

// tint = filtro de cor na imagem
  imageMode(CENTER);
  tint(40, 0, 0, 120);
  image(batmanImg, width / 2 + 30, height - batmanH / 2 + 60, batmanW * 1.1, batmanH * 1.05);


  if (raio > 0) {
    tint(255, 255, 255, 230); 
  } else {
    tint(200, 60, 60, 210);
  }
  image(batmanImg, width / 2, height - batmanH / 2 + 30, batmanW, batmanH);

  noTint();

  for (let i = 0; i < 3000; i++) {
    let esp = map(chuva[i][2], 1, 5, 0.5, 1.5);
    strokeWeight(esp);

   
    if (raio > 0) {
      stroke(255, 255, 255, random(150, 255));
    } else {
      stroke(255, 180, 180, random(80, 200));
    }

    line(
      chuva[i][0],
      chuva[i][1],
      chuva[i][0] - (chuva[i][2] * 1.2),
      chuva[i][1] + (chuva[i][2] * 5)
    );

    chuva[i][1] += chuva[i][2] * 3;
    chuva[i][0] -= 2.5;

    if (chuva[i][1] > height) {
      chuva[i][1] = random(-40, -10);
    }

    if (chuva[i][0] < -10) {
      chuva[i][0] = width + 10;
    }
  }
}