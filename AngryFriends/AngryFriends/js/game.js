class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {

            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            player1 = createSprite(displayWidth-500,500);
           player1.addAnimation("Player1",plr1_img)
              
            player2 = createSprite(displayWidth-200,500);
            player2.addAnimation("Player2",plr2_img)
            players=[player1,player2];

        }
    
    play(){
        background(0);
                form.hide();

textSize(20)
text("Player 1 ="+player1score,40,50) 
textSize(20)
text("Player 2 ="+player2score,40,100)    

if(keyDown("D")){
player1.x = player1.x+8
}


if(keyDown("A")){
    player1.x = player1.x-8
    }

    
if(keyDown("W")){
    player1.y = player1.y-8
    }

if(keyDown("S")){
    player1.y = player1.y+8
    }



    if(keyDown("RIGHT_ARROW")){
        player2.x = player1.x+6
        }
        
        
        if(keyDown("LEFT_ARROW")){
            player2.x = player1.x-6
            }
        
            
        if(keyDown("UP_ARROW")){
            player2.y = player1.y-6
            }
        
        if(keyDown("DOWN_ARROW")){
            player2.y = player1.y+6
            }
        
                Player.getPlayerInfo();
                
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                    
                       
                  //   if(index === player.index){
                    // to display player name on the basket.
                    //text(player.name,player.x,player.y)
                         
                    // }
                 }  
     
              
            
                 if (frameCount % 100 === 0) {
                     button = createSprite(random(0, 1200), 0, 100, 100);
                     button.addImage("Coin",back_img)
                    button.velocityY = 10;    
                    
                    button = buttonGroup;
                     }

                   if(buttonGroup.isTouching(player1)){
                player1score=player1score+1;
                               }
                               
                   if(buttonGroup.isTouching(player2)){
                    player2score=player2score+1;                             
                   }
    
                 }
      
    }

