
var monkey , monkey_running
var FoodGroup, obstacleGroup
var score=0
var ground
var food, obstacle
var obstacleImage,bananaImage
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  
  console.log(ground.x)
}


function draw() {
  background("white");
  stroke("black")
  fill("black")
  textSize(20)
  text("score: "+score,500,50)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime,100,50)
  if (keyDown("space")){
    monkey.velocityY=-12
  }
  
  monkey.velocityY=monkey.velocityY+0.5
  monkey.collide(ground)
  ground.x=ground.width/2
  drawSprites();
  spawnfood()
  spawnobstacle()
  foodGroup=new Group()
  obstacleGroup=new Group()
}
function spawnfood(){
  if (frameCount%80==0){
    banana=createSprite(500,Math.round(random(120,200)),20,20)
    banana.addImage("bananas",bananaImage)
    banana.scale=0.1
    banana.velocityX =-3
    banana.lifetime=150
    foodGroup.add(banana)
  }
}
function spawnobstacle(){
  if (frameCount%300==0){
    obstacle=createSprite(500,330,20,20)
    obstacle.addImage("rock",obstacleImage)
    obstacle.scale=0.1
    obstacle.velocityX =-3
    obstacle.lifetime=150
    obstacleGroup.add(obstacle)
  }
}