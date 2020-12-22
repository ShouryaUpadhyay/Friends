var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var power
var player, form,game;
var player1,player2;
var players;
var badGuys
var plr1_img,plr2_img;

// create the variables for the score and displaying scores. and intialize with zero

function preload(){
 back_img= loadImage("images/Background.jpg")

 plr1_img= loadAnimation("images/Player1/a1.png","images/Player1/a2.png","images/Player1/a3.png",
 "images/Player1/a4.png","images/Player1/a5.png","images/Player1/a6.png")
 plr2_img= loadAnimation("images/Player2/1.png","images/Player2/2.png","images/Player2/3.png",
 "images/Player2/4.png","images/Player2/5.png","images/Player2/6.png")

  fruitGroup = new Group();
}
function setup() {
  createCanvas(displayWidth-100, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);

   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     BadGuys();
     game.play();
     player1 = createSprite(200,500);
     player1.addAnimation("Player1",plr1_img)
       
     player2 = createSprite(800,500);
     player2.addAnimation("Player2",plr2_img)
     players=[player1,player2];

   }
   if (gameState === 2) {
    
     game.end();
   }

}
function BadGuys(){
  if(frameCount%200===0){
badGuys = createSprite(displayWidth-300,random(100,1000));
  }
}