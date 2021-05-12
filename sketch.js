const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;


function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top
  block16 = new Block(390,155,30,40);

  //first level 
  bock1= new Block(660,195,30,40);
  bock2=new Block (670,195,30,40);
  bock3=new Block(700,195,30,40);
  bock4=new Block(730,195,30,40);
  bock5=new Block(750,195,30,40);

  //second level 
  bock6=new Block(690,165,30,40);
  bock7=new Block(700,165,30,40);
  bock8=new Block(710,165,30,40);

  //third level
  bock9=new Block(700,135,30,40);

 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);

 slingShot=new slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();

  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  
  fill("grey");
  block16.display();

  fill("cyan");
  bock1.display();
  bock2.display();
  bock3.display();
  bock4.display();
  bock5.display();

  fill("sky blue");
  bock6.display();
  bock7.display();
  bock8.display();

  fill("grey");
  bock9.display();

  ellipse(polygon.position.x,polygon.position.y,20);
  slingShot.display();

  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}