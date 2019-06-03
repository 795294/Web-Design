

/*
**  Ball Constructor Function
**  eettlin
**  Sept. 14, 2018
*/

function Enemy(col){
  this.loc = createVector(width/2,height/2);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
   this.diam = 32;
   this.col = col;

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function(){

    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)
   }

   this.render = function(){
     fill(this.col);
     ellipse(this.loc.x, this.loc.y, this.diam, this.diam);
   }

   this.checkEdges = function(){
      if(this.loc.x < 0) this.vel.x = -this.vel.x;
      if(this.loc.x > width) this.vel.x = -this.vel.x;
      if(this.loc.y < 0) this.vel.y = -this.vel.y;
      if(this.loc.y > height) this.vel.y = -this.vel.y;
   }

   this.isColliding = function(){


   }



}//  End of Ball constructor function
