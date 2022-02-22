let a = 0;
let rectSize = 10;
let inc;
let xoff = 0;
let num = 0;
let lace = true;
let reset = 0;

function setup() {
  inc = random(.5, 4);
  createCanvas(windowWidth, windowHeight);
  background(color(247, 248, 250));
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();
}

function draw() {
  
  let strokex = map(mouseX, 100, width, 100, 255);
  let strokey = map(mouseY, 100, height, 100, 255);
  strokeWeight(2);
  stroke(strokey,strokex, 220, 10);

  if (lace) {
    reset++
    xoff++
    a = a + inc;
    let n = map(noise(xoff), 0, .8, 100, 255);
    translate(width / 2, height / 2);
    rotate(a * 1);

    let density = 3;
    let i = map(sin(xoff * density), -1.0, 1.0, rectSize, width / 2);
    rect(20, 20, rectSize + i, rectSize + i);
  }

  if (reset > 1000) {
    background(255);
    inc = random(0, 4);
    reset = 0;
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    lace = !lace
  }
}


function doubleClicked() {
  background(255);
  inc = random(0, 4);
  
}
