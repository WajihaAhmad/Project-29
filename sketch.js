const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1
var box1
var box2
var box3
var box4

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  

  ground1 = new Ground (410,200,200,10)
  ground2 = new Ground (610,300,200,10)

  box1= new Box (320, 180, 20,20)
  box2= new Box (350, 180, 20,20)
  box3= new Box (380, 180, 20,20)
  box4= new Box (410, 180, 20,20)

  box5= new Box (440, 180, 20,20)
  box6= new Box (470, 180, 20,20)
  box7= new Box (500, 180, 20,20)

  box8= new Box (360, 140, 35,35)
  box9= new Box (410, 140, 35,35)
  box10= new Box (460, 140, 35,35)

  box11= new Box (410, 80, 55,55)

  boxx= new Box (520, 280, 20,20)
  boxx2= new Box (550, 280, 20,20)
  boxx3= new Box (580, 280, 20,20)
  boxx4= new Box (610, 280, 20,20)

  boxx5= new Box (640, 280, 20,20)
  boxx6= new Box (670, 280, 20,20)
  boxx7= new Box (700, 280, 20,20)
  
  boxx8= new Box (560, 240, 35,35)
  boxx9= new Box (610, 240, 35,35)
  boxx10= new Box (660, 240, 35,35)
  boxx11= new Box (610, 180, 55,55)

  polygon= Bodies.circle(200,200,20)
  World.add(world,polygon)

  slingShot = new SlingShot(this.polygon,{x:100,y:100});
  Engine.run(engine);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  ground1.display();
  ground2.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  boxx11.display();
  boxx8.display();
  boxx9.display();
  boxx10.display();
  boxx.display();
  boxx2.display();
  boxx3.display();
  boxx4.display();
  boxx5.display();
  boxx6.display();
  boxx7.display();
  
  
  ellipseMode(CENTER)
  ellipse(polygon.position.x,polygon.position.y,40,40)
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}