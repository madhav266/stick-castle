var moving, fixed;
 function setup() 
 {
    createCanvas(400,400); 
    moving= createSprite(200,100,20,60); 
    fixed= createSprite(500,100,30,30); 
    moving.shapeColor="blue";
    fixed.shapeColor="blue";
     moving.debug=true; 
     fixed.debug=true;
     }
      function draw() {
         background("black");
     moving.x = mouseX;
      moving.y = mouseY;
      if(moving.x - fixed.x <= moving.width/2 + fixed.width/2
         && moving.y-fixed.y<=moving.height/2+fixed.height/2
         &&fixed.x-moving.x<=moving.width/2+fixed.width/2
         &&fixed.y-moving.y<=moving.height/2+fixed.height/2
         ){
         moving.shapeColor="red";
       fixed.shapeColor="red"; 
      }
       else
       {
          moving.shapeColor="blue";
           fixed.shapeColor="blue";
       } 
       drawSprites(); 
      }

