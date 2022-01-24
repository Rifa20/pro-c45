var oliver, oliverImg;
var girl, girlImg;
var bg, bgImg;


function preload(){
  oliverImg = loadAnimation ("oliver1.png","oliver2.png","oliver3.png","oliver4.png","oliver5.png","oliver6.png","oliver7.png","oliver8.png");
  girlImg = loadImage("girl.png");
  bgImg = loadImage("bgg.jpg");

}




function setup() {
  createCanvas(800,400);
  bg = createSprite(400,200);
  bg.addImage("bg",bgImg);


  oliver = createSprite(400, 300, 50, 50);
  oliver.addAnimation("oliverImg",oliverImg);
  oliver.velocityX = 1;

  

  

}

function draw() {
  background(255,255,255);
  
  if(keyDown(RIGHT_ARROW)){
    oliver.x+=05;

  }

  if(keyDown(LEFT_ARROW)){
    oliver.x-=05;

  }

  camera.position.x = oliver.x;
  drawSprites();
}