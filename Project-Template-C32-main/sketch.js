var canvas 
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var garbageImage, dirtImage, vehicleImage;
var cleanertoolsImage, resetImage, buildingsImage, obstacleImage
var database, gameState;
var form, player, playerCount;


function preload(){
  backgroundImage = loadImage("assets/background.png");
  cleanertoolsImage = loadImage("assets/Cleaning_Supplies.png");
  vehicleImage = loadImage("assets/Cleaner_Van.png");
  dirtImage = loadImage("assets/dirt.png");
  fuelImage = loadImage("assets/fuel.png");
  garbageImage = loadImage("assets/garbage_can.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  resetImage = loadImage("assets/reset button.png");
  buildingsImage = loadImage("assets/buildings.jpg");
  obstacleImage = loadImage("assets/obstacle.png"); 
  lifeImage = loadImage("assets/lives.png"); 
  trackImage = loadImage("assets/track.jpg")
       
}

function setup(){

  canvas = createCanvas(windowWidth, windowHeight)
  database = firebase.database();


}

function draw(){
  background(backgroundImage)
}

function WindowResize(){
  resizeCanvas(windowWidth, windowHeight)
}