

/*
**  Ball Constructor Function
**  eettlin
**  Sept. 14, 2018
*/

function Enemy(leftEdge,rightEdge,x,y){
  this.loc = createVector(x,y);
  this.vel = createVector(random(2,3),0);
  this.acc = createVector(0,0);
  this.leftEdge = leftEdge;
  this.rightEdge = rightEdge;
  this.count = 1;
  this.delay = 1;
  this.dead = 0;
  this.timer = 0;
  this.turn = 0;

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function(){
    this.isColliding(zGame.hero);
    if(this.loc.x < this.leftEdge) {
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > this.rightEdge - 80){
      this.vel.x = -this.vel.x;
    }

    if(this.turn===1){
      this.vel.x = -this.vel.x;
    }

    this.loc.add(this.vel);
    this.vel.add(this.acc);

    if(keyIsDown(39)){
        this.loc.x -= 5*zGame.sprint;
        this.leftEdge-=5*zGame.sprint;
        this.rightEdge-=5*zGame.sprint;

    }
    if(keyIsDown(37)){
        this.loc.x += 5*zGame.sprint;
        this.leftEdge+=5*zGame.sprint;
        this.rightEdge+=5*zGame.sprint;
    }

    }

   this.render = function(){
     if(this.dead === 0){

     if(this.vel.x>0){
       image(zombRight[this.count-1], this.loc.x, this.loc.y);
       if(this.delay%5 === 0)this.count++;
       this.delay++;
       if(this.delay>2000000)this.delay = 1;
       if(this.count>5)this.count = 1;

     } else {
       image(zombLeft[this.count-1], this.loc.x, this.loc.y);
       if(this.delay%5 === 0)this.count++;
       this.delay++;
       if(this.delay>2000000)this.delay = 1;
       if(this.count>5)this.count = 1;
     }

   } else {
     image(enemy, this.loc.x, this.loc.y);
   }
   this.timer++;
   if(this.timer>2000000)this.timer = 0;
   }

   this.checkEdges = function(){

   }

   this.isColliding = function(h){

     if(h.loc.y >= this.loc.y &&
       h.loc.y <= this.loc.y + enemy.height &&
       h.loc.x >= this.loc.x &&
       h.loc.x <= this.loc.x + enemy.width){
       if(h.vel.y > 0){
         h.vel.y = -3;
         this.dead = 1;
         zGame.zscore+=1;
         this.vel.x = 0;
         this.vel.y = 6;
         this.acc.y = 0.25;
         this.timer = 0;
       } else {
         if(this.timer>15){
         this.turn = 1;
         h.health-=5;
         this.timer=0;
         }
       }

       return true;

     } else {
       this.turn = 0;
       return false;
     }
   }

 }


//  End of Ball constructor function
