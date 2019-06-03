

/*
**  Game Constructor Function
**  eettlin
**  March. 14, 2019
*/

function Hero(location){

   this.loc = location;
   this.vel = createVector(0,0);
   this.acc = createVector(0,.1);
   this.truth = 0;
   this.doubleJump = 0;
   this.count = 1;
   this.delay = 1;
   this.facingright = 1;
   this.health = 50;
   this.restart = 0;

var state = {
     inAir: true
   };


  this.run = function(){
     this.update();
     this.render();

  }

  this.update = function(){
    for(var i = 0; i < zGame.platforms.length; i++){
      this.isColliding(zGame.platforms[i]);
    }
    if(this.truth === zGame.platforms.length){
      inAir = true;
    } else {
      inAir = false;
    }
    this.truth = 0;
    if(inAir){
      this.acc.y = 0.2;
      if(keyIsDown(32) && this.doubleJump === 1 && this.timer < 0){
        this.vel.y =-7;
        this.acc.y = 0.2;
        this.doubleJump = 0;
      }
    }


    if(!inAir){
      this.acc.y = 0;
      if(keyIsDown(32)){
            this.vel.y =-7;
            this.acc.y = .2;
            inAir = true;
       }
    }
    if(this.loc.y>height){
      this.health = 0;
    }
    this.vel.y += this.acc.y;
    this.loc.add(this.vel);
    this.timer -=1;
   }

   this.render = function(){
     if(this.health>0){
       fill(50, 230, 30);
       var x = this.loc.x;
       var y = this.loc.y;
       // triangle(x - 20, y, x + 20, y, x, y - 30);
       if(keyIsDown(39)){
         image(moveRight[this.count-1], this.loc.x -20, this.loc.y-50);
         if(this.delay%5/zGame.sprint === 0)this.count++;
         this.delay++;
         if(this.delay>2000000)this.delay = 1;
         if(this.count>10)this.count = 1;
         this.facingright = 1;
       } else if (keyIsDown(37)){
         image(moveLeft[this.count-1], this.loc.x -20, this.loc.y-50);
         if(this.delay%5/zGame.sprint === 0)this.count++;
         this.delay++;
         if(this.delay>2000000)this.delay = 1;
         if(this.count>10)this.count = 1;
         this.facingright = 0;
       } else if(this.facingright === 1 && !keyIsDown(39)){
         this.count = 1;
         this.delay = 1;
         image(moveRight[this.count-1], this.loc.x -20, this.loc.y-50);
       } else {
         this.count = 1;
         this.delay = 1;
         image(moveLeft[this.count-1], this.loc.x -20, this.loc.y-50);
       }
       noStroke();
       fill(255,0,0);
       rect(this.loc.x - 25, this.loc.y-90, 50, 7);
       fill(0,255,0);
       rect(this.loc.x - 25, this.loc.y-90,this.health,7);


     } else {
       zGame.gameState = 5;
     }
   }

   this.isColliding = function(p){

     if(this.loc.y >= p.loc.y &&
       this.loc.y <= p.loc.y + platform.height &&
       this.loc.x >= p.loc.x &&
       this.loc.x <= p.loc.x + platform.width*p.numSegs
       && this.vel.y > 0){
      if(p.id === p.end-1){
        zGame.gameState +=1;
        zGame.starting = 1;
      }
       this.vel.y = 0;
       this.acc.y = 0;
       this.loc.y = p.loc.y;
       this.doubleJump = 1;
       this.timer = 30;
       return true;
     } else {
       this.truth+=1;
       return false;
     }
   }




}//  End of Game constructor function
