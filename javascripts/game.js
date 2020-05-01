// ゲームスタート
let frameTime = 10
// let interval = setInterval(draw, frameTime);
// let interval = requestAnimationFrame(draw);

draw()

// 画面描写
function draw(){
  // ボールやパドルの軌跡を消す
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawblocks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLife();
  collisionDetection();

  // ボールの移動
  if(y + dy <= ballRadius){
    dy = -dy;
  }

  if(y + dy >= canvas.height - ballRadius){
    const paddleSafeArea = 6.5 // パドルセーフエリアの延長
    const paddleMidPoint = paddleX + paddleWidth / 2 // パドルの中心
    // ボールがパドル上にある場合はセーフ
    if(x >= paddleX - paddleSafeArea && x <= paddleX + paddleWidth){
      if(x >= paddleMidPoint - ballRadius && x <= paddleMidPoint + ballRadius){
        dy = -dy * 1.5;
      } else {
        dy = dy0;
      }
    } else {
      if(life >= 2){
        alert(`life is ${life - 1}`)
        life -= 1;
        drawBall()
        dy = -dy;
      } else if(life <= 1){
        life -= 1;
        dx = 0;
        dy = 0;
      }
    }
  }

  if(life <= 0){
    gameOver();
  }

  if(x + dx <= ballRadius || x + dx >= canvas.width - ballRadius){
    dx = -dx;
  } else {
    x += dx;
    y += dy;
  }

  // パドルの移動
  if(rightPressed && paddleX < canvas.width - paddleWidth){
    paddleX += 7;
  } else if(leftPressed && paddleX > 0){
    paddleX -= 7;
  }

  requestAnimationFrame(draw)
}
