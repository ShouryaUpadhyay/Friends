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
var button;
var player1score= 3;
var player2score= 3;
var  BadGuys_Img;
// create the variables for the score and displaying scores. and intialize with zero

function preload(){
 back_img= loadImage("images/bg.png")

 plr1_img= loadAnimation("images/Player1/Sprite1.png","images/Player1/Sprite2.png","images/Player1/Sprite3.png",
 "images/Player1/Sprite4.png","images/Player1/Sprite5.png","images/Player1/Sprite6.png")
 plr2_img= loadAnimation("images/Player2/1.png","images/Player2/2.png","images/Player2/3.png",
 "images/Player2/4.png","images/Player2/5.png","images/Player2/6.png")
 BadGuys_Img= loadAnimation("images/BadGuyFiring/1.png","images/BadGuyFiring/2.png","images/BadGuyFiring/3.png",
 "images/BadGuyFiring/4.png")
  
}
function setup() {
  createCanvas(displayWidth-100, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  buttonGroup=new Group
}

function draw() {
  background(0,0,0);

   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     BadGuys();
     game.play();
 

   }
   if (gameState === 2) {
    
     game.end();
   }

}
function BadGuys(){
  if(frameCount%100===0){
badGuys = createSprite(random(10,1000),random(100,1000));
badGuys.addAnimation("Yo",BadGuys_Img)

  }
}