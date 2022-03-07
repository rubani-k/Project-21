
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var ground1;
var wall1, wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = 
	{
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density: 1.2
	}


	//Create the Bodies Here.
   ball = Bodies.circle(50,600,15,ball_options);
   World.add(world,ball);

   ground1 =new Ground(width/2,670,width,20);
   wall1 =new Ground(550,600,10,120);
   wall2 =new Ground(700,600,10,120);



   ellipseMode(RADIUS);
 

	Engine.run(engine);
  
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-0.5});
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
  ground1.display();
  wall1.display();
  wall2.display();
  ellipse(ball.position.x,ball.position.y,15);
  Engine.update(engine);


 
}



