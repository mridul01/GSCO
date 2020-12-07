var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  wall = createSprite(1300, 200, 50, 200);
  wall.shapeColor = "white";

  car = createSprite(200,200,50,50);
  car.shapeColor = "pink";

  speed=random(55,90);
  weight=random(400,1500);
  
}

function draw() {
  background(0); 
  
  if(keyDown("space")){
    car.velocityX = speed;
  }

  isTouching();

  drawSprites();
}

function isTouching(){
  if(car.x - wall.x < (car.width + wall.width)/2 &&
    wall.x - car.x < (car.width+wall.width)/2){

      car.velocityX = 0;

      var deformation = 0.5 * weight * speed* speed/22509;
      if(deformation>180){
        car.shapeColor = "red";
      }
      if(deformation<180 && deformation>100){
        car.shapeColor = "yellow";
      }
      if(deformation<100){
      car.shapeColor = "green";
      }
  }
  }
