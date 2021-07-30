var zombie;
var player,playerImg1,playerImg2;
function preload(){
    // zombieImg = loadAnimation("images/zombieimg1.png","images/zombieImg3.png");
    playerImg1 = loadAnimation("images/shooter_1.png","images/shooter_2.png");
    bgImg = loadImage("images/bg.jpeg");
    playerImg2 = loadAnimation("images/shooter_3.png");
}

function setup(){
    createCanvas(windowWidth-50,windowHeight-50);
    player = createSprite(windowWidth/2-400,windowHeight/2);
    player.addAnimation("playerImage1",playerImg1);
    player.scale = 0.3;
    // zombie = createSprite(400,300,30,30);
    // zombie.addAnimation("zombieRunning",zombieImg);
}

function draw(){
    background(bgImg);

    if(keyDown("UP_ARROW")){
        player.y = player.y-6;
    }
    if(keyDown("DOWN_ARROW")){
        player.y = player.y+6;
    }
    if(keyWentDown("space")){
        player.addAnimation("playerImage1",playerImg2);
    }
    else if(keyWentUp("space")){
        player.addAnimation("playerImage1",playerImg1);
    }
    drawSprites();
}