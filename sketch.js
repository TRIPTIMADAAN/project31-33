const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1,ground2,ground3,ground4, ground5,ground6,ground7,ground8;
var colorground1,colorground2,colorground3;
var plinko1=[]
var plinko2=[]
var plinko3=[]
var plinko4=[]
var partical=[]
var score=0

function setup() {
 var canvas= createCanvas(920,1000);
 engine = Engine.create();
 world = engine.world;
 ground1=new Ground(20,800,10,400)
 ground2=new Ground(150,800,10,400)
 ground3=new Ground(300,800,10,400)
 ground4=new Ground(450,800,10,400)
 ground5=new Ground(600,800,10,400)
 colorground1=new ColorGround(5,500,20,1000)
 colorground2=new ColorGround(915,500,20,1000)
 colorground3=new ColorGround(460,955,1000,20)
 Engine.run(engine)
}

function draw() {
  rectMode(CENTER)
  background(0);  
  fill("white")
  textSize(50)
  text("Score :  "+score,100,100)
  if(frameCount%60===0){
    partical.push(new Partical(random(100,800),10,20))
  }
  for(var i=100;i<=width;i=i+95){
    plinko1.push(new Plinko(i,200))
  }
for(var i =70;i<=width;i=i+95){
    plinko2.push(new Plinko(i,300))
}
for(var i =100;i<=width;i=i+95){
  plinko3.push(new Plinko(i,400))
}
for(var i =70;i<=width;i=i+95){
  plinko4.push(new Plinko(i,500))
}
ground1.display()
ground2.display()
ground3.display()
ground4.display()
ground5.display()
ground6.display()
ground7.display()
ground8.display()
colorground1.display()
colorground2.display()
colorground3.display()
for(var i=100;i<plinko1.length;i++){
  plinko1[i].display();
}
for(var i=100;i<plinko2.length;i++){
  plinko2[i].display();
}
for(var i=100;i<plinko3.length;i++){
  plinko3[i].display();
}
for(var i=100;i<plinko4.length;i++){
  plinko4[i].display();
}
for(var i=0;i<partical.length;i++){
  if(partical[i]!=null)
  {
    partical[i].display();
    if(partical[i].body.position.y<800 &&partical[i].body.position.y>600){
       if(partical[i].body.position.x<300){
          score=score+50
          //partical[i]=null
       }
       if(partical[i].body.position.x>300 && partical[i].body.position.x<600){
         score=score+20
         //partical[
       }
    }
  }
}
}
