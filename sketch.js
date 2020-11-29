const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1;
var mango,ground;
var stone;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
    

	//tree1 = createSprite(400,350,200,200);
	
//Create the Bodies Here.
	
   tree1 = new ped(1000,250,400,400);
   mango = new Mangoes(470,200,100,100);
   mango1 = new Mangoes(440,170,100,100);
   mango2 = new Mangoes(570,210,100,100);
   mango3 = new Mangoes(530,145,100,100);
   mango4 = new Mangoes(490,250,100,100);
   mango5 = new Mangoes(420,180,100,100);
   mango6 = new Mangoes(520,190,100,100);
   mango7 = new Mangoes(450,160,100,100);
   stone = new Stone(200,570,100,100);

	Engine.run(engine);
  
}


function draw() {
 background("white");
  image(boy ,200,400,200,300);
  tree1.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
}



