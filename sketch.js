const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{

}

function setup() {
	createCanvas(800,400);
	engine = Engine.create();
	world = engine.world;

	paperBall=new Paper(80,200,50,50);
	
	bin1=new Bin(595,300,20,140);
	bin2=new Bin(655,362,100,18);
	bin3=new Bin(715,300,20,140);

	//Create a Ground
	ground=new Ground(400,380,900,20);
	

	Engine.run(engine);
  
}
function draw() {
  background(255)
  Engine.update(engine);
  ground.display();
  paperBall.display();
  bin1.display();
  bin2.display();
  bin3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:100,y:-180});
	}
}