const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1;
var button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var balloptions={
    restitution:1.0
  }
ball=Bodies.circle(200,100,20,balloptions);
World.add(world,ball);

button1=createImg("right.png");
button1.position(200,30);
button1.size(50,50);
button1.mouseClicked(Hforce);

button2=createImg("up.png");
button2.position(100,30);
button2.size(50,50);
button2.mouseClicked(Vforce);
  
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,20,20);
  Engine.update(engine);
}
function Hforce()
{
Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0});
}
function Vforce()
{
Matter.Body.applyForce(ball,ball.position,{x:0,y:0.05});
}

