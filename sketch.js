
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;
var plane1;
var stone1;
var rubber1;
var iron1;
var sand1 , sand2 ,sand3, sand4,sand5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    hammer = new Hammer(100,200,150,50);

	plane1 = new Plane(400,670,800,10);

	stone1 = new Stone(600,610,50,50);

	rubber1 = new Rubber(500,535,50,50);

	iron1 = new Iron(400,535,80,50);


	// sand 
	sand1 = new Sand(300,535,10,10);

	sand2 = new Sand(320,535,10,10);

	sand3 = new Sand(330,535,10,10);
	
	sand4 = new Sand(340,535,10,10);

	sand5 = new Sand(350,535,10,10);

	







    
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  
 Engine.update(engine);



hammer.display();

plane1.display();

stone1.display();

rubber1.display();

iron1.display();

sand1.display();

sand2.display();

sand3.display();

sand4.display();

sand5.display();






  drawSprites();
 
}



