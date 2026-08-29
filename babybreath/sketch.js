// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let myTurtle;
let flower
let flowerImgs = [];

function preload(){
  flower1 = loadImage("IMG_6192.png");
  flower2 = loadImage("IMG_61922.png");
  flower3 = loadImage("IMG_61923.png");
  flower4 = loadImage("IMG_61924.png");
  snell = loadFont("SnellBT-Regular.otf")
}

function setup() {
  createCanvas(800, 800);
  noFill();
  stroke(148, 161, 101);
  flowerImgs = [flower1,flower2,flower3,flower4];
  // background(50);
  noLoop();
  myTurtle = new Turtle();
}

function draw() {
    background(255, 240, 222);
  background(50)
    
  myTurtle.penUp();
  myTurtle.moveTo(400, 600);
  myTurtle.turnTo(-90);
  myTurtle.penDown();
  
  leafId = 0;
  drawBranch(150);
  
  push()
  fill(255)
  textSize(35)
  textAlign(CENTER)
  textFont(snell)
  text("Gypsophila paniculata", 400,700)
  pop()
}

let flowerNum;

function drawBranch(length) {
    strokeWeight(length*0.09)
  if (length < 4) {
    
    flowerNum = int(random(flowerImgs.length));
    // console.log(flowerNum)
    image(flowerImgs[flowerNum],myTurtle.x, myTurtle.y, flowerImgs[flowerNum].width * 0.05,flowerImgs[flowerNum].height * 0.05)
    // image(flower1,myTurtle.x, myTurtle.y, flower1.width * 0.05,flower1.height * 0.05)
    return;
  }

  // draw the trunk
  myTurtle.moveForward(length);

  // left child
  myTurtle.pushState();
  myTurtle.turnLeft(random(45));
  drawBranch(length * 0.7);
  myTurtle.popState();

  // right child
  myTurtle.pushState();
  myTurtle.turnRight(random(45));
  drawBranch(length * 0.7);
  myTurtle.popState();
}
