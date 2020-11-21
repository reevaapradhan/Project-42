var hr,mn,sc;

function setup() {
  //Calculating time using predefined func 
  hr=hour();
  mn=minute();
  sc=second();

  angleMode(DEGREES);

  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  

  scAngle= map(sc,0,60,0,360);
  mnAngle= map(mn,0,60,0,360);
  hrAngle= map(hr,0,60,0,360);

  push();
  rotate(scAngle);
  translate(0,0);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  translate(0,0);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  push();
  rotate(hrAngle);
  translate(0,0);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,300,0);
  pop();

  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
  stroke(255,0,0);
  strokeWeight(7);
  
  drawSprites();
}