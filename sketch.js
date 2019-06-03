/*
**Platform Game
**
**
*/


//  Global variables

var zGame, hero, enemy;
var backGround;
var offsetX = 0;
var moveRight = [];
var moveLeft = [];
var zombRight = [];
var zombLeft = [];
var pf = [];



// put setup code here
function setup() {


  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  zGame = new Game();
  Background = new Background();
  //  assests object
  var numCoins = 0;
  var numZombs = 5;
  var numPlatforms = 120;
  loadMyImages();


}

function draw() {
  background(0,0,0);

  Background.run();

  zGame.run();


  //  Add text to element with id demoDiv
  //document.getElementById("demoDiv").innerHTML = "PlayerStats /n/t x vel = " + zGame.hero.vel.x + "/n/t y vel = " + zGame.hero.vel.y;
}


function loadMyImages(){\
  intro = loadImage("images/intro.png");
  end = loadImages("end.png");
  hero = loadImage ("images/heroright/h0.png");
  sky = loadImage("images/sky.png");
  bbg = loadImage("images/bbg.png");
  fg = loadImage("images/bg.png");
  platform = loadImage("images/platforms/pf1.png");
  enemy = loadImage("images/zright/z0.png");

  for(var i = 1; i<6; i++){
    pf.push(loadImage("images/platforms/pf" + i + ".png"));
  }

  for(var i = 0; i<11; i++){
    moveRight.push(loadImage("images/heroright/h" + i + ".png"));
  }
  for(var i = 0; i<11; i++){
    moveLeft.push(loadImage("images/heroleft/h" + i + ".png"));
  }

  for(var i=0; i<11; i++){
    zombRight.push(loadImage("images/zright/z"+i+".png"));
  }

  for(var i=0; i<11; i++){
    zombLeft.push(loadImage("images/zleft/z"+i+".png"));
  }
}
