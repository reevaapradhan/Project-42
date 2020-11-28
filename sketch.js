var hr,mn,sc;

function setup() {
  //Calculating time using predefined func 

  angleMode(DEGREES);

  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  

  hr=hour();
  mn=minute();
  sc=second();

  scAngle= map(sc% 12,0,60,0,360);
  mnAngle= map(mn% 12,0,60,0,360);
  hrAngle= map(hr% 12,0,60,0,360);

  push();
    translate(400,200);
    push();
    rotate(scAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,30,0);
    pop();

    push();
    rotate(mnAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,100,0);
    pop();
  pop();

  //drawing the arcs 
  push();
  strokeWeight(10);
  noFill();
  translate(400,200);

  //Seconds 
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  //Minutes 
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);

  //Hour 
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
  pop();
  drawSprites();
}