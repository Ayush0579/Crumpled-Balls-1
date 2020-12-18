const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,395,1500,20);
	upper = new Ground(width/2,5,1500,20);

	base = new Dustbin(1050,300,200,20);
	first = new Dustbin(960,260,20,100);
	second = new Dustbin(1140,260,20,100);
	bound1 = new Ground(10,200,20,400);
	bound2 = new Ground(1190,200,20,400);

	paper = new Ball(100,330,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ground.display();
  upper.display();

  base.display();
  first.display();
  second.display();

  bound1.display();
  bound2.display();

  paper.display();
  
  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
  }

  if(keyCode === "enter"){
	  paper.position.x = 100;
	  paper.position.y = 330;
  }
 
}



