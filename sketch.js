var ball


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ball= createSprite(10,10,20,20)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);

  
  ball.x=mouseX
  ball.y=mouseY

  brick1= createSprite(900,400,20,80)
  brick2= createSprite(1000,450,190,20)
  brick3= createSprite(1100,400,20,80)
 
  

  drawSprites();
 
}



