var wall,thickness;
var bullet,speed,weight;

function setup() {
    createCanvas(1600,400);
 

  speed=random(22,110);
  weight=random(30,52);
  thickness=random(22,150);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(225);
  bullet.weight=weight;

  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  


}

function draw() {
  background(0);  
  drawSprites();

  if (wall.x-bullet.x <(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var Damage =0.5*weight*speed*speed/25000}
    if (Damage>10){
      wall.shapeColor=color(255,0,0);
      }
        if(Damage<10){
     wall.shapeColor=color(0,255,0);
  }
    
  }

