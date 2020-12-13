var Mario,brick,coin,coinImg,brickg,MarioImg,brickImg;
var score = 0;
var bgImg,edges,coing,ghost,ghostImg;

function preload(){
  MarioImg = loadAnimation("mario 4.png","mario 3.png");
  
  brickImg = loadImage("Mario birck1.png")
  bgImg = loadImage("Mario backkground image.png");
  
  coinImg = loadAnimation("Mario coin1.png","Mario coin2.png","Mario coin3.png","Mario coin4.png","Mario coin5.png","Mario coin6.png");
  
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  background = createSprite(0,0,width,height);
  background.addImage(bgImg);
  background.scale = 7.5;
  
  Mario = createSprite(20,200,20,20);
  Mario.addAnimation("MarioImg",MarioImg)
 Mario.scale = 0.5;
  
  edges = createEdgeSprites()
  brickg = new Group();
  coing = new Group();
}

function draw() {
  background.velocityX = -3;
  //background(bgImg);
  if (background.x < 0) {
    background.x = background.width/2;
  }
  
  //text(mouseX + "," + mouseY,mouseX,mouseY)
  if (keyDown("space")) {
    Mario.velocityY = -2;
   }
  if (keyDown("left_arrow")) {
    Mario.velocityX = -2;
  }
  
  if (keyDown("right_arrow")) {
    Mario.velocityX = 2;
  }
  
  Mario.velocityY = Mario.velocityY + 0.08;
  
  if (Mario.collide(brickg)) {
    Mario.velocityY = 0;
    score=score+1;
  }

  if (Mario.isTouching(coing)) {
    score = score+1;
    coing.destroyEach();
  }
  
  bricks();
  Coins();
  Ghost();
  Mario.bounceOff(edges[0]);
  drawSprites();
  textSize(25);
  fill("white")
  text("Score :"+ score,width/2,20)
}

function bricks() {
  if (frameCount % 100 === 0 ){
     brick = createSprite(width,Math.round(random(50,height)),50,10);
  brick.velocityX = -3;
  brickg.add(brick);     
  brick.addImage("brickImg",brickImg)
    brick.scale = 0.5;
    
  }
 
}

function Coins() {
  if (frameCount % 150 === 0 ){
 coin = createSprite(Math.round(random(10,width)),Math.round(random(20,height)),50,10);
  coin.velocityX = Math.round(random(-3,3));
  //brick.add(brick);     
  coin.addAnimation("coinImg",coinImg)
  coin.scale = 0.5;
  coin.lifetime = 100;
  coing.add(coin);
    
  }
 
}

function Ghost() {
  if (frameCount % 150 === 0 ){
 ghost = createSprite(Math.round(random(10,width)),Math.round(random(20,height)),50,50);
  ghost.velocityX = Math.round(random(-3,3));
  //brick.add(brick);     
  //ghost.addAnimation("ghostImg",ghostImg)
  ghost.scale = 0.5;
  ghost.lifetime = 100;
  //coing.add(coin);
    
  }
 
}
