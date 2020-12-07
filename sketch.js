const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){

paperImage = loadImage("paper.png")
binImage = loadImage("dustbingreen.png")

}

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  var box_options = {

    isStatic: true
  }


  var ball_options={

    restitution: 0.3,density:1.2,friction:0.5,
  }

  Box = Bodies.rectangle(300,550,600,20,box_options); 
  console.log(box);
  World.add(world,Box);

  ball = Bodies.circle(70,300,10,ball_options)
  World.add(world,ball);

  box1 = new box(450,534,200,20)
  box2 = new box(340,520,20,50)
  box3 = new box(560,520,20,50)
}

function draw() {
  background(255);  
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(Box.position.x,Box.position.y,600,20);
  fill("white");
  imageMode(CENTER);
  image(paperImage, ball.position.x,ball.position.y,50,50);
  box1.display()
  box2.display()
  box3.display()
  
  image(binImage, 482, 450, 150,150)

}

function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(ball,ball.position,{x:11,y:-15});
  
  }
}