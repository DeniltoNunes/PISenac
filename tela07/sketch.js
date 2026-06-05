let tamanhoFonte = 50;
let playmat, booster;
let cartas = [];
let posicao = [];
let imagem = [];
let arrastar = false;

let largura = 300;
let altura = 500;
let larguraBooster = 500; 
let alturaBooster = 800;

function preload() {
    playmat = loadImage('playmat.jpg');
    booster = loadImage('booster.png');

    for (let i = 0; i < 6; i++) {
        cartas.push(Math.floor(Math.random() * 10));
        imagem.push(loadImage('carta' + cartas[i] + '.jpg'));
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    let molde = createGraphics(largura, altura);
    molde.fill(255); 
    molde.noStroke();
    molde.rect(0, 0, largura, altura, 18); 

    for (let i = 0; i < 6; i++) {
        imagem[i].mask(molde); 
    }

    for (let i = 0; i < 7; i++) {
        if (i < 6) {
            posicao.push([(width - largura) / 2, (height - altura) / 2]);
        } else {
            posicao.push([(width - larguraBooster) / 2, (height - alturaBooster) / 2]);
        }
    }
}

function draw() {
    background(playmat);
    fill(255);
    textSize(tamanhoFonte);
    textFont('Consolas');
    textAlign(CENTER);
    text("Abra o seu Booster", width / 2, 100);

    if (arrastar !== false) {
        if (arrastar < 6) {
            posicao[arrastar][0] = mouseX - largura / 2;
            posicao[arrastar][1] = mouseY - altura / 2;
        } else {
            posicao[arrastar][0] = mouseX - larguraBooster / 2;
            posicao[arrastar][1] = mouseY - alturaBooster / 2;
        }
    }

    for (let i = 0; i < 7; i++) {
        if (i < 6) {
            image(imagem[i], posicao[i][0], posicao[i][1], largura, altura);
        } else {
            image(booster, posicao[i][0], posicao[i][1], larguraBooster, alturaBooster);
        }
    }
}

function mousePressed() {
    for (let i = 6; i >= 0; i--) {
        let largAtual;
        let altAtual;

        if (i < 6) {
            largAtual = largura;
            altAtual = altura;
        } else { 
            largAtual = larguraBooster;
            altAtual = alturaBooster;
        }

        if (mouseX >= posicao[i][0] && mouseX <= posicao[i][0] + largAtual &&
            mouseY >= posicao[i][1] && mouseY <= posicao[i][1] + altAtual) {

            arrastar = i;
            break;
        }
    }
}

function mouseReleased() {
    arrastar = false;
}