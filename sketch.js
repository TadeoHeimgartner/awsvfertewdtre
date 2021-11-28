var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var Obstaculo1, Obstaculo2, Obstaculo3, Obstaculo4, Obstaculo5, Obstaculo6;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  Obstaculo =loadImage("obstacle1.png");
  Obstaculo2 =loadImage("obstacle2.png");
  Obstaculo3 =loadImage("obstacle3.png");
  Obstaculo4 =loadImage("obstacle4.png");
  Obstaculo5 =loadImage("obstacle5.png");
  Obstaculo6 =loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hola"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //aparecer nubes
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds() {
  //escribir aquí el código para aparecer las nubes
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //asignar tiempo de vida a una variable
    cloud.lifetime = 134
    
    //ajustar la profundidad
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacles (){
  if(frameCount% 70==0){
var Obstacles=createSprite(600,165,10,40);
Obstacles.velocityX=-6;
var rand=Math.round(random(1,6))
switch(rand){
case 1: Obstacles.addImage(Obstaculo);
break;
case 2: Obstacles.addImage(Obstaculo2);
break;
case 3: Obstacles.addImage(Obstaculo3);
break;
case 4: Obstacles.addImage(Obstaculo4);
break;
case 5: Obstacles.addImage(Obstaculo5);
break;
case 6: Obstacles.addImage(Obstaculo6);
break;
default: break;
}
Obstacles.scale=0.5;
Obstacles.lifetime=270;
  }
  
}