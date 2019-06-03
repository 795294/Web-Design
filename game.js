

/*
**  Game Constructor Function
**  eettlin
**  March. 14, 2019
*/

function Game(){

  this.gameState = 0;
  this.starting = 0;
  this.gameElements = [];  // all game elements
  this.platforms = [];
  this.elev = [];
  this.numPlatforms = [];
  this.worldX = 0;
  this.worldXSpeed = 2;
  this.hero;
  this.color = (100,100,100);
  this.mouseOver = false;
  this.score = 0;
  this.zscore = 0;
  this.sprint = 1;

  this.initGame = function(h, w){

    this.gameElements = [];
    this.platforms = [];
    this.elev = [];
    this.numPlatforms = [];
    for(var i=0; i<h.length; i++){
      this.elev.push(h[i]);
      this.numPlatforms.push(w[i]);
    }
    for(let i=0; i < this.numPlatforms.length; i++){
      this.platforms.push(new Platform(this.numPlatforms[i], this.elev[i], i, this.numPlatforms.length, float(random(0,4))));


    }

    var heroXLoc = width/2;
    var heroYLoc = 30 ;
    this.hero = new Hero(createVector(heroXLoc + 20, heroYLoc));
    this.gameElements.push(this.hero);
  }

  this.run = function(){
     this.update();
     this.render();
  }

  this.update = function(){
     this.setWorldX();
     translate(this.worldX, 0 );
     for(var i = 0; i < this.gameElements.length; i++){
        this.gameElements[i].update();
     }

     for(var i = 0; i < this.platforms.length; i++){
        this.platforms[i].update();
     }
   }

   this.render = function(){
     if(this.gameState===0){
       fill(0,0,0);
       rect(0,0,windowWidth,windowHeight);

       fill(255,255,255);
       textSize(100);
       textAlign(CENTER);
       text('GAME', width/2, height/2);

       rect(400,500, 400, 125);
       fill(0,0,0);
       text('START', width/2, height/2+200);

       if(mouseX>400 && mouseX<800 && mouseY>500 && mouseY<625){
         this.mouseOver = true;
       } else {
         this.mouseOver = false;
       }

       if(this.mouseOver){
         fill(this.color);
         rect(400,500, 400, 125);
         fill(0,0,0);
         text('START', width/2, height/2+200);
       }

       if(this.mouseOver && mouseIsPressed){
         this.gameState+=1;
         this.starting=1;
       }

     } else if(this.gameState===1){
         if(this.starting===1){
           var lvl1H = [200,200,400,500,600,700,600,500,600,700,600,500,600,600,600,500];
           var lvl1W = [4, 2, 2, 5, 1, 6, 3, 2, 2, 7, 9, 4, 5, 3, 9, 1];
           this.initGame(lvl1H, lvl1W);
           this.starting=0;
         }
         for(var i = 0; i < this.platforms.length; i++){
            this.platforms[i].render();
         }
         for(var i = 0; i < this.gameElements.length; i++){
           this.gameElements[i].render();
         }
         fill(255,255,0);
         textSize(32);
         textAlign(LEFT);
         text('Coins:' + this.score,5,32);

         fill(255,0,0);
         textSize(32);
         textAlign(LEFT);
         text('Score:' + this.zscore,5,75);


       } else if(this.gameState===2){
           if(this.starting===1){
             var lvl2H = [500,600,700];
             var lvl2W = [5, 1, 6];
             this.initGame(lvl2H, lvl2W);
             this.starting=0;
           }
           for(var i = 0; i < this.platforms.length; i++){
              this.platforms[i].render();
           }
           for(var i = 0; i < this.gameElements.length; i++){
             this.gameElements[i].render();
           }
           fill(255,255,0);
           textSize(32);
           text('Coins:' + this.score,5,32);

           fill(255,0,0);
           textSize(32);
           text('Score:' + this.zscore,5,75);

       } else if (this.gameState===5){
         fill(0,0,0);
         rect(0,0,windowWidth,windowHeight);

         textAlign(CENTER);
         fill(255,255,255);
         textSize(100);
         text('GAME OVER',width/2,height/2);

         rect(400,500, 400, 125);
         fill(0,0,0);
         textSize(80)
         text('RESTART', width/2, height/2+200);

         if(mouseX>400 && mouseX<800 && mouseY>500 && mouseY<625){
           this.mouseOver = true;
         } else {
           this.mouseOver = false;
         }

         if(this.mouseOver){
           fill(this.color);
           rect(400,500, 400, 125);
           fill(0,0,0);
           text('RESTART', width/2, height/2+200);
         }

           if(this.mouseOver && mouseIsPressed){
             this.gameState=0;
             this.zscore = 0;
             this.score = 0;
           }
         }


}

   this.setWorldX = function(){
     if(keyIsDown(16)){
       this.sprint = 2
     } else{
       this.sprint = 1;
     }

      if(keyIsDown(39)){
        for(var i = 0; i < this.platforms.length; i++){
           this.platforms[i].loc.x -= 5*this.sprint;
        }

      }
      if(keyIsDown(37)){
        for(var i = 0; i < this.platforms.length; i++){
           this.platforms[i].loc.x += 5*this.sprint;
        }

      }
   }

}//  End of Game constructor function
