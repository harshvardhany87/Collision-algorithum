var MovingRect 
var FixedRect



function setup() {
  createCanvas(800,400);
   MovingRect = createSprite(400,200,30,30);
   MovingRect.shapeColor = "Blue";
   FixedRect = createSprite(390,200,30,30)
   FixedRect.shapeColor = "Red";

}

function draw() {
  background(255,255,255);  
  MovingRect.x = World.mouseX
  MovingRect.y = World.mouseY

  if(MovingRect.x - FixedRect.x < FixedRect.width/2 + MovingRect.width/2 &&
    FixedRect.x - MovingRect.x < FixedRect.width/2 + MovingRect.width/2 &&
    MovingRect.y - FixedRect.y < FixedRect.height/2 + MovingRect.height/2 && 
    FixedRect.y - MovingRect.y < FixedRect.height/2 + MovingRect.height/2) {
      MovingRect.shapeColor = "Purple"
      FixedRect.shapeColor = "green"
    } 
  
    else{
      MovingRect.shapeColor = "Blue"
      FixedRect.shapeColor = "Red"
    }
  
  drawSprites();
}