const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var crosshair,crosshairimg
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var enemy1,enemy2,enemy3
var obstacle1,obstacle2,obstacle3,obstacleimg
var score =0

function preload() {
    backgroundImg = loadImage("sprites/7eksnehptt241.jpg");
    crosshairimg = loadImage("sprites/crosshair-aim-target-512.png")
    obstacleimg = loadImage("sprites/obstacle.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
 // crosshair = new Box (100,100,100,100) 
 crosshair = createSprite (100,100,100,100)
 crosshair.addImage(crosshairimg)
 crosshair.scale=0.2
 obstacle1 = createSprite(200,430,250,500)
 obstacle1.addImage(obstacleimg)
 obstacle1.scale = 0.8
 obstacle2 = createSprite(750,620,500,250)
 obstacle2.addImage(obstacleimg)
 obstacle2.scale = 0.8
 obstacle3 = createSprite(1250,400,250,500)
 obstacle3.addImage(obstacleimg)
 obstacle3.scale = 0.8
    ground = new Ground(600,height,1200,20);
    enemy1 = new Enemy(200,370,250,250)
    enemy2 = new Enemy(750,720,250,250)
    enemy3 = new Enemy(1250,400,250,250)
//obstacle1 = new Obstacle(200,400,250,500)
//obstacle2 = new Obstacle(750,720,500,250)
//obstacle3 = new Obstacle(1250,400,250,500)
    //log6 = new Log(230,180,80, PI/2);
//enemy1.velocityX=10 
}

function draw(){
  
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
  
   //Matter.Body.applyForce(enemy1.body,enemy1.body.position,{x:10,y:0})

   //if(crosshair.isTouching(enemy1)&&(mouseclick))

 crosshair.x = mouseX
crosshair.y = mouseY

 //enemy1.mousePressed(function(){
   // score=score+5})

    ground.display();
    enemy1.display()
    enemy2.display()
    enemy3.display()
    //crosshair.display()
    //obstacle1.display()
    //obstacle2.display()
    //obstacle3.display()
drawSprites()

textSize(30)
fill("red")
text("SCORE: "+score,displayWidth-200,75 )
    if(frameCount % 100 === 0){
      Matter.Body.setStatic(enemy1.body,false)
      //Matter.Body.applyForce(enemy1.body,enemy1.body.position,{x:200,y:350})
      Matter.Body.setVelocity(enemy1.body,{x:20,y:0})
  
    }
   
    if(frameCount % 100 === 0){
      Matter.Body.setStatic(enemy2.body,false)
      //Matter.Body.applyForce(enemy1.body,enemy1.body.position,{x:200,y:350})
      Matter.Body.setVelocity(enemy2.body,{x:-10,y:20})
  
    }
   
}
