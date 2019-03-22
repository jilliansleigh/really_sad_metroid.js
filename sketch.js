var person;
var sceneNum=0

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
  if (key == ' '){
    var jump = createVector(0,-5);
  person.applyForce(jump);
  }else if (key=='b'){ 
    sceneNum++;
  }
}

function draw() {
  if(sceneNum===0){ 
    background(40);
    textSize(20);
    noStroke();
    fill(255, 255, 255);
    ellipse(200,200,10,10);
    ellipse(300,100,6,6);
    ellipse(100,100,7,7);
    ellipse(200,300,10,10);
    ellipse(150,78,8,8);
    ellipse(400,155,9,9);
    ellipse(10,210,7,7);
    ellipse(489,327,9,9);
    ellipse(360,323,10,10);
    ellipse(378,46,5,5);
    ellipse(23,70,8,8);
    ellipse(90,280,5,5);
    ellipse(120,230,7,7);
    ellipse(400,270,9,9);
    ellipse(370,100,9,9);
    ellipse(500,200,9,9);
    ellipse(600,209,10,10);
    ellipse(570,20,7,7);
    ellipse(550,200,6,6);
    ellipse(520,150,8,8);
    ellipse(468,300,9,9);
    ellipse(70,309,9,9);
    ellipse(130,40,10,10);
    ellipse(170,170,9,9);
    ellipse(80,150,8,8);
    ellipse(50,260,9,9);
    ellipse(260,230,9,9);
    ellipse(270,170,8,8); 
    fill(200,170,0);
    text("really sad metroid",100,100);
  	fill(200,170,0);
    text("press b to start",200,200);
    text("use spacebar to jump",250,250);
    fill(83,20,174);
  	rect(0,350,1000,10);
    
  }
                         
else if(sceneNum===1){
  noStroke();
  background(51);
  fill(255, 255, 255);
    ellipse(200,200,10,10);
    ellipse(300,100,6,6);
    ellipse(100,100,7,7);
    ellipse(200,300,10,10);
    ellipse(150,78,8,8);
    ellipse(400,155,9,9);
    ellipse(10,210,7,7);
    ellipse(489,327,9,9);
    ellipse(360,323,10,10);
    ellipse(378,46,5,5);
    ellipse(23,70,8,8);
    ellipse(90,280,5,5);
    ellipse(120,230,7,7);
    ellipse(400,270,9,9);
    ellipse(370,100,9,9);
    ellipse(500,200,9,9);
    ellipse(600,209,10,10);
    ellipse(570,20,7,7);
    ellipse(550,200,6,6);
    ellipse(520,150,8,8);
    ellipse(468,300,9,9);
    ellipse(70,309,9,9);
    ellipse(130,40,10,10);
    ellipse(170,170,9,9);
    ellipse(80,150,8,8);
    ellipse(50,260,9,9);
    ellipse(260,230,9,9);
    ellipse(270,170,8,8);
  fill(200,170,0);
  text("*brinstar playing*",300,100);
  fill(83,20,174);
  rect(0,350,1000,10);
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.09);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
  var force = createVector(-0.1,0);
  person.applyForce(force);
  }
  //translate(-person.pos.x,0);
    person.update();
  person.edges();
    person.display();
  fill(153,50,204);
  rect(500, height-39,30,30);
}else{
  background(40);
  noStroke();
  fill(255, 255, 255);
    ellipse(200,200,10,10);
    ellipse(300,100,6,6);
    ellipse(100,100,7,7);
    ellipse(200,300,10,10);
    ellipse(150,78,8,8);
    ellipse(400,155,9,9);
    ellipse(10,210,7,7);
    ellipse(489,327,9,9);
    ellipse(360,323,10,10);
    ellipse(378,46,5,5);
    ellipse(23,70,8,8);
    ellipse(90,280,5,5);
    ellipse(120,230,7,7);
    ellipse(400,270,9,9);
    ellipse(370,100,9,9);
    ellipse(500,200,9,9);
    ellipse(600,209,10,10);
    ellipse(570,20,7,7);
    ellipse(550,200,6,6);
    ellipse(520,150,8,8);
    ellipse(468,300,9,9);
    ellipse(70,309,9,9);
    ellipse(130,40,10,10);
    ellipse(170,170,9,9);
    ellipse(80,150,8,8);
    ellipse(50,260,9,9);
    ellipse(260,230,9,9);
    ellipse(270,170,8,8);
  fill(200,170,0);
	text("rip",210,200);
  text("oof",110,100);
  fill(83,20,174);
  rect(0,350,1000,10);
	}
}
