class Game{
     constructor(){
         this.resetTitle = createElement("h2");
         this.resetButton = createButton("");

         this.leaderboardTitle = createElement("h2");
         this.player1 = createElement("h2");
         this.player2 = createElement("h2");
         

     }

     getState() {
       var gameStateref = database.ref("gameState");
       gameStateref.on("value", data =>{
           gameState = data.val();
       });
     }

     update(state){
       database.ref("/").update({
           gameState: state
       });
     }

     start(){
         player = new Player();
         playerCount = player.getCount();

         form = new Form();
         form.display();

         van1 = createSprite(width / 2 - 50, height - 100);
         van1.addImage("van1", vehicleImage);
         van1.scale = 0.07

         van2 = createSprite(width / 2 - 50, height - 100);
         van2.addImage("van2", vehicleImage);
         van2.scale = 0.07

   
      obstacles = new Group()
      vehicles = [van1, van2];
      fuels = new Group()
      powerUp = new Group()



      var obstaclesPositions = [
        {x: width / 2 + 250, y: height - 800, image: garbageImage },
        {x: width / 2 - 150, y: height - 1300, image: dirtImage},
        {x: width / 2 + 250, y: height - 1800, image: garbageimage},
        {x: width / 2 - 180, y: height - 2300, image: dirtImage},
        {x: width / 2, y: height - 2800, image: garbageImage},
        {x: width / 2 - 180, y: height - 3300, image: dirtImage},
        {x: width / 2 + 180, y: height - 3300, image: garbageImage},
        {x: width / 2 + 250, y: height - 3800, image: dirtImage},
        {x: width / 2 - 150, y: height - 4300, image: garbageImage},
        {X: width / 2 + 250, y: height - 4800, image: dirtImage},
        {X: width / 2, y: height - 5300, image: dirtImage},
        {x: width / 3 - 180, y: height - 5500, image: garbageImage}

       ];

     this.addSprites(fuels, 4, fuelImage, 0.02);
     this.addSprites(powerUp, 18, powerCoinImage, 0.09);

     this.addSprites(
       obstacles,
       obstaclesPositions.length,
       garbageImage,
       0.04,
       obstaclesPositions
     )
     }

     addSprites(spriteGroup, numberofSprites, spriteImage, scale, positions = []){
       for (var i = 0; i < numberofSprites; i++) {
         var x,y;

         if (positions.length > 0) {
           x = positions[i].x;
           y = positions[i].y;
           spriteImage = positions[i].image;
         } else{
           x = random(width / 2 + 150, width / 2 - 150);
           y = random(-height * 4.5, height - 400);
         }
         var sprite = createSprite(x, y);
         sprite.addImage("sprite", spriteImage);

         sprite.scale = scale;
         spriteGroup.add(sprite);

         
       }
     }

     HandleElements(){
       form.hide();
       form.titleImg.position();
       form.titleImg.class("gameTitleAfterEffect")

       this.resetTitle.html("Reset Game")
       this.resetTitle.class("resetText")
       this.resetTitle.position(width / 2 + 200, 40)

       this.resetButton.class("resetButton")
       this.resetButton.position("")

       this.leaderboardTitle.html("Leaderboard");
       this.leaderboardTitle.class("resetText");
       this.leaderboardTitle.position(width / 3 - 60, 40);

       this.player1.class("leadersText");
       this.player1.position(width / 3 - 50, 80);

       this.player2.class("leadersText");
       this.player2.position(width / 3 - 50, 130);

         
     }


     play() {
       this.HandleElements();
       this.handleResetButton();

       Player.getPlayersInfo();
       player.getVansAtEnd();

       if (allPlayers !== undefined) {
         image(track, 0, -height * 5, width, height * 6);

         
       }

     }



     handleResetButton(){
       this.resetButton.mousePressed(() => {
         database.ref("/").set({
           playerCount: 0,
           gameState: 0,
           players: {},
           VansAtEnd: 0

         });
         window.location.reload();
       });
     }

     showLife() {
       push();
       image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
       fill("white");
       rect (width / 2 - 100, height - player.positionY - 400, 185, 20)
     }

}