var legs1, legs2, legs3, legs4;
var eyes1, eyes2, eyes3, eyes4;
var mouth1, mouth2, mouth3, mouth4;

var show = 0;
var legChoice, eyeChoice, mouthChoice;

function preload() {
  legs1 = loadImage("legs/1.png");
  legs2 = loadImage("legs/2.png");
  legs3 = loadImage("legs/3.png");
  legs4 = loadImage("legs/4.png");

  eyes1 = loadImage("eyes/1.png");
  eyes2 = loadImage("eyes/2.png");
  eyes3 = loadImage("eyes/3.png");
  eyes4 = loadImage("eyes/4.png");

  mouth1 = loadImage("mouth/1.png");
  mouth2 = loadImage("mouth/2.png");
  mouth3 = loadImage("mouth/3.png");
  mouth4 = loadImage("mouth/4.png");

  body1 = loadImage("body/1.png");
  body2 = loadImage("body/2.png");
  body3 = loadImage("body/3.png");
  body4 = loadImage("body/4.png");

}

function setup() {
  createCanvas(576, 576);

}

function draw() {
  background(0);

  if (show == 1) {
    creature(100, 50, legChoice, eyeChoice, mouthChoice, bodyChoice);
  }

}

function mouseReleased() {
  legChoice = int(random(4));
  eyeChoice = int(random(4));
  mouthChoice = int(random(4));
  bodyChoice = int(random(4));
  show = 1;
}

function creature(size, head, leg, eye, mouth, body) {
  print(leg, eye);

  if (leg == 0) {
    image(legs1, 90, 100, 400, 400);
  }

  if (leg == 1) {
    image(legs2, 90, 100, 400, 400);
  }

  if (leg == 2) {
    image(legs3, 90, 100, 400, 400);
  }

  if (leg == 3) {
    image(legs4, 90, 100, 400, 400);
  }

  if (body == 0){
    image(body1, 210, 170, 160, 210); // green
  }

  if (body == 1){
    image(body2, 210, 190, 170, 170); //orange
  }

  if (body == 2){
    image(body3, 200, 150, 180, 220); //blue
  }

  if (body == 3){
    image(body4, 220, 190, 180, 180); //purple
  }

  if (eye == 0) {
    image(eyes1, 110, 120, 400, 400); //two green eyes
  }

  if (eye == 1) {
    image(eyes2, 110, 80, 400, 400); //one weird eye
  }

  if (eye == 2) {
    image(eyes3, -20, 120, 400, 400); //one green eye
  }

  if (eye == 3) {
    image(eyes4, -3, 80, 400, 400); //two purple eyes
  }

  if (mouth == 0){
    image(mouth1, 240, 270, 70, 70); //blue
  }

  if (mouth == 1){
    image(mouth2,  240, 170, 150, 150); //purple
  }

  if (mouth == 2){
    image(mouth3,  250, 290, 60, 60); //pink
  }

  if (mouth == 3){
    image(mouth4,  270, 230, 110, 110); //dark blue
  }

 
}



