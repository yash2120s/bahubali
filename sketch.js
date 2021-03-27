var PLAY = 1;
var END = 0;
var gameState = PLAY

var bahubali , bahubaliImage

var arrowGroup , arrowImage;

var ground , groundImage;

var bg ,bgImage;

var bhallardevGroup,bhallardevImage

var gameOver,gameOverImage;

var restart,restartImage;

var score = 0;

function preload(){
  
bahubaliImage = loadImage("bahubali.png")

shooting = loadImage("shooting.png")
  
    arrowImage = loadImage("arrow.png")

bgImage = loadImage("bg.png")
  
  bhallardevImage = loadImage("bhallardev.png")
  
  gameOverImage = loadImage("gameover.jpg")
  
  restartImage = loadImage("restart.png")
  
  upImage = loadImage("up.png")
  
  downImage = loadImage("down.png")
  
  rightImage = loadImage("right.png")
  
  leftImage = loadImage("left.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
         
bg = createSprite(width - 300,height - 300,400,400)
  bg.addImage(bgImage)
  bg.scale = 2
  
        
  bahubali = createSprite(width - 600,height - 600,10,10)
  bahubali.addImage(bahubaliImage)
bahubali.velocityY = 2
  
  gameOver = createSprite(width - 330,height -420,10,10)
  gameOver.addImage(gameOverImage)
  
  restart = createSprite(width - 330,height - 300,10,10)
  restart.addImage(restartImage)
  
  up = createSprite(width - 400 ,height - 200,10,10)
  up.addImage(upImage)
  up.scale = 0.4
  
  down = createSprite(width - 395 , height -100,10,10)
  down.addImage(downImage)
  down.scale = 0.4
  
  right = createSprite(width - 320, height - 160,10,10)
  right.addImage(rightImage)
  right.scale = 0.4
  
  left = createSprite(width - 470,height - 150,10,10)
  left.addImage(leftImage)
  left.scale = 0.4
  
  bhallardevGroup = createGroup();
  arrowGroup = createGroup();
}

function draw() {
 
  background("white")
  

  
  if(gameState === PLAY){

    restart.visible = false;
      gameOver.visible = false
    bg.velocityY = 4
    
    if(bg.y > 300 ){
      bg.y = bg.height/2
    }
  
    if(keyWentDown("space")||touches.lenght>0){
       createArrow()
    bahubali.addImage(shooting)
      bahubali.scale = 1.3  
      touches = []
  }
  
  
    if(keyWentUp("space")){
   bahubali.addImage(bahubaliImage)
      bahubali.scale = 1
  }
  
  if(keyWentDown("right")|| mousePressedOver(right)){
    
    bahubali.velocityX = 4
}}
  
    
  if(keyWentDown("left") || mousePressedOver(left)){
    bahubali.velocityX = -4
  }
    
  if(keyWentDown("up")||mousePressedOver(up)){
    bahubali.velocityY = -4
  }
    
  if(keyWentDown("down")|| mousePressedOver(down)){
    bahubali.velocityY = 4
  }
  
    if(keyWentUp("right")){
      bahubali.velovityY = 4
    }
    
    if(keyWentUp("left")){
    bahubali.velocityY = 2
  }
  
  if(keyWentUp("up")){
    bahubali.velocityY = 2
  }
  if(keyWentUp("down")){
    bahubali.velocityY = 2
  }
   spawnbhallardev();
    
    if(arrowGroup.isTouching(bhallardevGroup)){
      bhallardevGroup.destroyEach()
      arrowGroup.destroyEach()
      score = score +1;
    }
    
    if(bahubali.y > 550){
      gameState = END;
    }
    
  
  
  if(gameState === END){
    bahubali.visible = false;
    bahubali.velocityY = 0
    bahubali.velocityX = 0
    bg.velocityY = 0;
     bhallardevGroup.destroyEach()
  bhallardevGroup.setVelocityXEach(0)
    bg.visible = false;
    gameOver.visible = true;
    restart.visible = true;
    right.visible = false;
    left.visible = false;
    up.visible = false;
    down.visible = false
    reset();
  }
  
  
  drawSprites();
  
  text('score: '+score,width-140,height-570,textSize(20),fill("green"))
}

function createArrow(){
  
  arrow = createSprite(200,200,10,10)
  arrow.addImage(arrowImage)
  arrow.scale = 0.1
  arrow.velocityX = 4
  arrow.x = bahubali.x +100 ;
  arrow.y = bahubali.y
  arrow.lifetime  = 95
  arrowGroup.add(arrow)
  return
}
  
  function spawnbhallardev(){
    if(frameCount%150===0){
      bhallardev = createSprite(width-50,height-700,10,10)
      bhallardev.addImage(bhallardevImage)
      
      bhallardev.velocityY = 5
      
      bhallardev.lifetime = 150
      bhallardevGroup.add(bhallardev)
    }
  }
  
  function reset(){
   if(mousePressedOver(restart)){
      gameState = PLAY;
      bahubali.visible = true;
      bg.velocityY = -7;
      bahubali.x = width - 600;
      bahubali.y = height - 600;
      gameOver.visible = false
  restart.visible = false
     bg.visible = true
      score = 0;
     up.visible = true;
     down.visible = true
     right.visible = true;
     down.visible = true;
   }
 }
