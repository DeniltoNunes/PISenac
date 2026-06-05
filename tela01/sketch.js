let fundo;
let spider;

function preload() {
  fundo = loadImage("tela01/fundo.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  spider = createImg("tela01/homiranha.gif");
  spider.size(100, 100);
  spider.style('pointer-events', 'none')
}

function draw() {
  background(fundo);

  if (mouseY < height * 0.6) {
    spider.remove();
    spider = createImg("tela01/teia.gif");
    spider.style('pointer-events', 'none')
  }

  if (mouseY >= height * 0.6) {
    spider.remove();
    spider = createImg("tela01/homiranha.gif");
    spider.style('pointer-events', 'none')
  }

  let tamanho = map(mouseY, 0, height, height * 0.08, height * 0.25);

  spider.size(tamanho, tamanho);
  spider.position(mouseX - tamanho / 2, mouseY - tamanho / 2);
}