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

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0,-displayHeight*4, displayWidth,displayHeight*5);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index -1].y = y;
                       
                     if(index === player.index){
                    // to display player name on the basket.
                    text(player.name,player.x,player.y)
                         
                     }
                 }
     
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.velocityX -= 10
                    player.update();
                }
                
                    if (keyIsDown(LEFT_ARROW)  && player.index !== null) {
                    player.velocityX += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     button = createSprite(random(100, 1000), 0, 100, 100);
                                          
                     }
                   
                     
                 }
           
    
    }

