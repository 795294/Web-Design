

/*
**  Platform Constructor Function
**  eettlin
**  March. 14, 2019
*/

function Platform(numSegs, elev, id, l, rand){
  this.numSegs = numSegs;
  this.elev = elev;
  this.id = id;
  this.end = l;

  this.gap = 100;
  this.loc = createVector(0,elev)
  this.rightEdge = 0;

  this.numbZombs = float(this.numSegs/2);
  this.numbCoins = float(this.numSegs/(random(2,4)));


  if(this.id === 0){
    this.loc.x = 300;
  } else {
    this.loc.x = zGame.platforms[this.id-1].rightEdge + this.gap;
  }

  this.rightEdge = this.loc.x +this.numSegs*150;

   if(random(0, 1.0)< 0.5) {
     //  each platform 50% chanve of containg its own coin
     for(var i=0; i<this.numbCoins; i++){
     zGame.gameElements.push(new Coin(random(this.loc.x,this.rightEdge-this.gap), this.loc.y-22));
     }
   }
if(this.numSegs>1 && this.id>0){
  for(var i = 0; i<this.numbZombs; i++){
    zGame.gameElements.push(new Enemy(this.loc.x, this.rightEdge, random(this.loc.x,this.rightEdge-this.gap), this.loc.y-85));
  }
}






  this.run = function(){

  }

  this.update = function(){

   }

   this.render = function(){

     for(var i = 0; i < this.numSegs; i++){
       image(pf[this.number], this.loc.x+i*140, this.loc.y-22);
     }

   }





}//  End of Game constructor function
