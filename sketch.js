var sea,ship,trash;
var seaImg,shipImg1,trashImg;
var rand,ypos,trashgrp;
var collision=false;

function preload(){
  //uncomment the code to add animation to ship 
  shipImg1 = loadAnimation("ship-1.png");
  trashImg=loadImage("trash.png")
  seaImg = loadImage("sea.png");
  
}

function setup(){
  
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
  trashgrp=new Group();
}

function draw() {
  background(0);
  spawntrash();
  if(ship.isTouching(trashgrp)){
    if(trash.y==320 && ship.y==250){
      text.depth=sea.depth+1;
      text("GAME OVER!",100,20);
      
      console.log("You hit Trash!The Ship Has Sunk! Game Over!")
      ship.rotationSpeed=0.5;
      ship.velocityY=1;
      collision=true;
      
    }
    if(trash.y==250 && ship.y==200){
      text.depth=sea.depth+1;
      text("GAME OVER!",100,20);
      console.log("You hit Trash!The Ship Has Sunk! Game Over!")
      ship.rotationSpeed=0.5;
      ship.velocityY=1;
      collision=true;
      
    }
    else{

    }
  }
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/8;
  
  }
  if (keyIsDown(UP_ARROW) && collision==false){
    ship.y=200;
  }
  if (keyIsDown(DOWN_ARROW) && collision==false){
    ship.y=250;
  }

 
  drawSprites();
}
function spawntrash(){
  if(frameCount%220==0){
  rand=Math.round(Math.random(1,2))
    if(rand==1){
      ypos=250;
    }
    else{
      ypos=320;
    }
  trash=createSprite(400,ypos,50,50);
  trash.addImage(trashImg);
  trash.scale=0.2;
  trash.velocityX=-2;
  trashgrp.add(trash);
  ship.depth=trash.depth+1;
  }
}