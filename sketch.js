var bird,log;
var a1,a2,a3,a4;
function setup() {
  createCanvas(800,400);
 bird = createSprite(400, 200, 80, 50);
 bird.shapeColor = "white";

// log = createSprite(300,150,70,80);
// log.shapeColor = "yellow";

a1=createSprite(100,30,80,50);
a1.shapeColor = "pink";
a2=createSprite(300,30,80,50);
a2.shapeColor = "orange";
a3=createSprite(500,30,80,50);
a3.shapeColor = "green";
a4=createSprite(700,30,80,50);
a4.shapeColor = "lightgreen";
}

function draw() {
  background(0);  
  bird.y=World.mouseY;
  bird.x=World.mouseX;
  if(collision(a1,bird)){
    bird.shapeColor = "blue";
    a1.shapeColor = "blue";
  }
  else{
    bird.shapeColor = "white";
    a1.shapeColor = "pink";
  }

  // bird.y=World.mouseY;
  // bird.x=World.mouseX;
  if(collision(a2,bird)){
    bird.shapeColor = "blue";
    a2.shapeColor = "blue";
  }
  else{
    bird.shapeColor = "white";
    a2.shapeColor = "orange";
  }

  // bird.y=World.mouseY;
  // bird.x=World.mouseX;
  if(collision(a3,bird)){
    bird.shapeColor = "blue";
    a3.shapeColor = "blue";
  }
  else{
    bird.shapeColor = "white";
    a3.shapeColor = "green";
  }

  // bird.y=World.mouseY;
  // bird.x=World.mouseX;
  if(collision(a4,bird)){
    bird.shapeColor = "blue";
    a4.shapeColor = "blue";
  }
  else{
    bird.shapeColor = "white";
    a4.shapeColor = "lightgreen";
  }

  
  drawSprites();
}
