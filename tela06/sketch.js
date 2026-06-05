let d20, arte1, arte2, arte3, mesa, numero;
let estado = false;

let faces = [
  [0.88, 2.43, 0],
  [2.72, 6.00, 2.68],
  [1.80, 6.70, 0.44],
  [2.73, 5.77, -1.84],
  [8.39, 10.34, 5.00],
  [3.69, 9.14, 4.40],
  [3.48, 6.16, 1.90],
  [8.39, 11.16, 3.08],
  [2.74, 10.03, 4.40],
  [7.68, 9.89, 4.34],
  [4.54, 8.90, 5.08],
  [1.75, 3.75, -6.90],
  [1.80, 6.70, -0.44],
  [3.47, 9.76, 4.40],
  [0.58, 2.69, -8.64],
  [2.41, 5.62, 2.00],
  [4.42, 9.89, 3.64],
  [1.97, 8.79, 3.34],
  [12.04, 12.76, 8.42],
  [1.08, 6.97, -9.64]
];

function preload() {
  d20 = loadModel('D20.stl');
  arte1 = loadImage('arte1.jpg');
  arte2 = loadImage('arte2.jpg');
  arte3 = loadImage('arte3.jpg');
  mesa = loadImage('mesa.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  numero = floor(random(20));
}

function draw() {
  if (estado == false) {
    background(mesa);
    return;
  }

  if (estado == "arte") {
    if (numero <= 5) {
      background(arte1);
    } else if (numero <= 14) {
      background(arte2);
    } else {
      background(arte3);
    }
    return;
  }

  if (estado == "dado") {
    background(mesa);
    ambientLight(0);
    directionalLight(255, 255, 255, 0, 1, 1);
    directionalLight(255, 255, 255, 0, 1, -1);

    push();
    scale(-100, 100, 100);

    rotateX(faces[numero][0]);
    rotateY(faces[numero][1]);
    rotateZ(faces[numero][2]);

    model(d20);
    pop();
  }
}

function Dado() {
  estado = "dado";
  numero = floor(random(20));
  document.querySelector('.boxD20').style.display = 'none';
  document.querySelector('.boxArte').style.display = 'flex';
}

function Arte() {
  estado = "arte";
  document.querySelector('.boxArte').style.display = 'none';
  document.querySelector('.box').style.display = 'flex';
}