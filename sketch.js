const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
 
var engine, world;
var box1, pig1,constrainedLog;
var bgimage;
var c;
function preload(){
bgimage=loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
   // constrainedLog=new Log(230,180,80,PI/2)

    bird = new Bird(100,100);
c=new Slingshot(bird.body,{x:200,y:100})



}


function draw(){
    background(bgimage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
   // constrainedLog.display();

    bird.display();
    c.display();
    
  }

  function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }
function mouseReleased(){
  c.fly();
}

/*
class classname
{
    // properties which we want to define at the time of object creation
    constructor(argu1, argu2......)
    {
      statements;
    }
    // function
    display()
    {
      statements;
    }
}

example
class Sum
{
  constructor(a,b){
  this.a=a;
  this.b=b;
  this.c=0;    
  }    
  display(){
      this.c=this.a+this.b;
      console.log(this.c);
  }
}

object
s=new Sum(4,5);
s.display();
*/