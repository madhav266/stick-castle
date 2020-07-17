function setup() {
  createCanvas(800,600);
 
  createSprite(400, 450, 50, 550);
  
  createSprite(600, 450, 50, 550);
 
  createSprite(500 , 350 , 140, 400);

  createSprite(340 , 450 , 20, 600);

  createSprite(650 , 450 , 20, 600);
};

function draw() {
  background("black");
  text(mouseX+" "+mouseY,100,100)
  fill ("red")  
  triangle(370, 175, 400, 95, 422, 175);
  fill ("red")
  triangle(430, 150, 500, 40, 570, 150);
  fill ("red")
  triangle(575, 175, 600, 90, 625, 175);
  drawSprites();
}