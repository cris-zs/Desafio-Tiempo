var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 0;
var y = canvas.height;

var pathWidth = 250;
var pathHeight = 80;

var playerWidth =  50;
var playerHeight = 50;

var playerX = 0;
var playerY = canvas.height - playerHeight;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var timeRemaining = 10;
var currentTime = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
      rightPressed = true;
    } else if (e.keyCode == 37) {
      leftPressed = true;
    } else if(e.keyCode == 38){
        upPressed = true;
    } else if(e.keyCode == 40){
        downPressed = true;
    }
  }

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    } else if (e.keyCode == 38) {
        upPressed = false;
    } else if (e.keyCode == 40) {
        downPressed = false;
    }
}

function drawPath() {
    // código para dibujar
    ctx.beginPath();
    ctx.rect(x,y-pathHeight,pathWidth,pathHeight)
    ctx.fillStyle = "#fff780";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(pathWidth-80,80,80,160)
    ctx.fillStyle = "#fff780";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(pathWidth,80,230,80)
    ctx.fillStyle = "#fff780";
    ctx.fill();
    ctx.closePath();
  }

function drawPlayer(){
    ctx.beginPath();
    ctx.rect(playerX+10,playerY-10,playerWidth,playerHeight);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function timer(){
    ctx.fillStyle = "white";
    ctx.font = "bold 18px Arial";
    ctx.fillText(`Tiempo restante: ${timeRemaining}`, 30, 30); 
    currentTime++;
    //console.log(currentTime)
    if(currentTime > 100){
        timeRemaining--;
        currentTime = 0;
    } else if (timeRemaining < 0){
        alert(`Se acabo el tiempo!
        Intenta de nuevo`);
        timeRemaining = 0;
        document.location.reload();
    }
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPath();
    drawPlayer();
    timer();

    if (rightPressed && playerX +playerWidth-10 < canvas.width-pathWidth) {
        //console.log(playerX, playerY)
        playerX += 3;
    }else if(rightPressed && playerY < 123 && playerY > 81 && playerX +playerWidth < canvas.width - 10){
        //console.log(playerX, playerY)
        playerX += 3;
    } else if (leftPressed && ((playerX > 0 && playerY <= 270 && playerY > 248)|| (playerY < 250 && playerY > 81  && playerX > 160))) {
        //console.log(playerX, playerY)
        playerX -= 3;
    }else if (downPressed && playerY < canvas.height - playerHeight && playerX + playerWidth  < canvas.width - (pathWidth - 13)) {
        playerY += 3;
    }else if (downPressed && playerY + playerHeight < 168 && playerY > 81 && playerX  + playerWidth > 230 && playerX + playerWidth - 10 < canvas.width - 10) {
        playerY += 3;
    } else if (upPressed && playerY > canvas.height- (pathHeight - 10)) {
        playerY -= 3;
    } else if(upPressed && playerX + playerWidth > canvas.width - pathWidth - 22 && playerY > pathHeight + 10 ){
        playerY -= 3;
    }else if(rightPressed && playerX > 410){
        alert("Llegaste a la meta!");
        document.location.reload();
    }

}

setInterval(draw, 10);
  

