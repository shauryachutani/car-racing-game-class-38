var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var carimage1,carimage2,carimage3,carimage4;
var trackimage,groundimage
function preload(){
 carimage1=loadImage("../images/car1.png");
 carimage2=loadImage("../images/car2.png");
 carimage3=loadImage("../images/car3.png");
 carimage4=loadImage("../images/car4.png");
 groundimage=loadImage("../images/ground.png");
 trackimage=loadImage("../images/track.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4&&gameState===0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
