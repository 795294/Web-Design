

/*
**  Coin Constructor Function
**  eettlin
**  Sept. 14, 2018
*/

function Coin(x, y){
  this.loc = createVector(x, y);
  this.collected = false;
  this.finished = 0;
  this.scored=0;
  this.w = 44;
  this.h = 44;

  this.run = function(){
    this.update();
    if(this.visible === true){
      this.render();
    }
  }

  this.update = function(){
    if(keyIsDown(39)){
        this.loc.x -= 5*zGame.sprint;
    }
    if(keyIsDown(37)){
        this.loc.x += 5*zGame.sprint;
    }
    if(this.heroColliding() &&  this.finished===0){
      this.collected = 0;
      this.scored = 1;
    }
    if(this.scored===1){
      zGame.score+=1;
      this.scored = 0;
      this.finished = 1;
    }

  this.w--;
  if(this.w === -43){
    this.w = 44;
  }

  }

   this.render = function(){
     if(this.collected===false){
     fill(180,220,20);
     ellipse(this.loc.x, this.loc.y, this.w, this.h);
    }
   }

   this.heroColliding = function(){
     var h = zGame.hero;
     var ic = createVector(h.loc.x-23 + hero.width/2, h.loc.y - 65 + hero.height/2);
     if(ic.dist(this.loc)<50){
       return true;
     }
       return false;
   }

}//  End of Ball constructor function
