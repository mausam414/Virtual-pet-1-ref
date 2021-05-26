//Create variables here
var database;
var dog,dog_image, happydog;
var foodStock, foodS;
var feedButton;
var foodGroup;

function preload()
{
	//load images here
  dog_image = loadImage("dog1.png");
  happydog = loadImage("happydog.png");
  
}

function setup() {
	createCanvas(1000, 800);
  dog = createSprite(750,400,10,10);
  dog.addImage(dog_image);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() { 
  background(206, 51, 255);
  
  if(keyWentDown(RIGHT_ARROW)){
    dog.addImage(happydog);
    writeStock(foodS)
  }

  
  drawSprites();
  //add styles here
  textSize(20);
  fill("white")
  text("Note " + ": " + "Press the up arrow to feed the dog",500,300);

}

function readStock(data){
 foodS = data.val();
}

function writeStock(x){

if(x=>0){
  x = 0
}
else{
  x=x+1;
}

 database.ref('/').update({
   Food:x
 })
}