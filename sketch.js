
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground;
var tree;
var boy;
var stone;
var launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;

function preload(){
	boy = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,690,1200,20);
	tree = new Tree(900,350,350,450);
	stone = new Stone(100,250,50);
	mango1 = new Mango(750,230,60);
	mango2 = new Mango(850,130,50);
	mango3 = new Mango(875,200,40);
	mango4 = new Mango(950,130,50);
	mango5 = new Mango(1000,260,45);
	mango6 = new Mango(1100,240,40);
	mango7 = new Mango(825,300,45);

	launcher = new Launcher(stone.body,{x:239,y:528});

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	});

	Engine.run(engine);
    Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  //console.log(mouseX,mouseY)

  //boy image
  image(boy,200,450,200,300);
  
  ground.display()
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:100, y:250}) 
		launcher.attach(stone.body);
	}
}

function detectCollision(stone,mango){
	var mangoPos = mango.body.position;
	var stonePos = stone.body.position;

	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

	if(distance < mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}