function Background(){
  this.offsetx1 = 0;
  this.offsetx2 = 0;
  this.offsetx3 = 0;
  this.render = function(){
    image(sky, this.offsetx1, 0);
    image(sky, this.offsetx1 - width, 0);
    image(sky, this.offsetx1 + width, 0);

    image(bbg, this.offsetx2, 300);
    image(bbg, this.offsetx2 - width, 300);
    image(bbg, this.offsetx2 + width, 300);

    image(fg, this.offsetx3, 600);
    image(fg, this.offsetx3 - width, 600);
    image(fg, this.offsetx3 + width, 600);
  }

  this.update = function(){
    if(keyIsDown(39)){
      this.offsetx1-=1;
      this.offsetx2-=2;
      this.offsetx3-=4;
    }

    if(keyIsDown(37)){
      this.offsetx1+=1;
      this.offsetx2+=2;
      this.offsetx3+=4;
    }

    if(this.offsetx1 <= -width){
      this.offsetx1 = 0;
    }
    if(this.offsetx1 >= width){
      this.offsetx1 = 0;
    }

    if(this.offsetx2 <= -width){
      this.offsetx2 = 0;
    }
    if(this.offsetx2 >= width){
      this.offsetx2 = 0;
    }

    if(this.offsetx3 <= -width){
      this.offsetx3 = 0;
    }
    if(this.offsetx3 >= width){
      this.offsetx3 = 0;
    }
  }

  this.run = function() {
    this.update();
    this.render();
  }
}
