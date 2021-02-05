var happycat;
var unhappycat;
var happycatinbox;
var unhappycatinbox;
var schrodingerscat;
var openBox;

var state = 0;

function preload (){
  happycat = loadImage ("image/0-whitecat.png");
  happycatinbox = loadImage ("image/2-liveinbox.png");
  unhappycatinbox = loadImage ("image/3-deadinbox.png");
  schrodingerscat = loadImage ("image/4-schrodingercat.png");
  
  
  openBox=createButton("Live or Die");
  openBox.position (30,360);
  openBox.style('font-size', '14px');
  openBox.mouseReleased(measureCat);
  
}


function setup() {
  createCanvas(600, 400);
  image (schrodingerscat, 0,0,600,400);
}

function measureCat() {
  background(220);
  
  if(random(2)>1){
  image (happycatinbox, 0,0,600,400);
  }else {
  
    image (unhappycatinbox, 0,0,600,400);
    }
}