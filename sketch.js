let imgElmo, randomCat, imgCat, imgPlaceX, imgPlaceY, pressed, imgRocket, imgRocketScalar, imgRocketSize, imgMoon, imgMoonScalar, imgMoonSize, imgMonster, imgMonsterScalar, imgMonsterSize;

function preload() {
  imgRocket = loadImage("rocket.avif");
  imgMoon = loadImage("moon.webp");
  imgMonster = loadImage("monster.gif");
  imgCat = loadImage("cat.gif")
  imgElmo = loadImage("elmo.gif")
  pressed = false;
}

function setup() {
  createCanvas(400, 400);
  imgRocketScalar = 3072/1728;
  imgRocketSize = 400;
  imgMoonScalar = 4096/2731;
  imgMoonSize = 100;
  imgMonsterScalar = 4096/2731;
  imgMonsterSize = 50;
  randomCat = round(random());
  print(randomCat)
}

function draw() {
  background(220);
  image(imgRocket, 0, 0, imgRocketSize, imgRocketSize/imgRocketScalar);
  image(imgMoon, 0, 0, imgMoonSize, imgMoonSize/imgMoonScalar);
  if(pressed) {
    image(imgMonster, imgPlaceX, imgPlaceY, imgMonsterSize, imgMonsterSize/imgMonsterScalar);
  }

  if(randomCat){
    image(imgCat, 0, height/2);
  } else {
    image(imgElmo, 0, height/2);
  }
  
}

function mousePressed() {
  imgPlaceX = mouseX;
  imgPlaceY = mouseY;
  pressed = true;
  print("hi")
}
