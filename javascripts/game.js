// ゲームスタート
let frameTime = 10
let interval = setInterval(draw, frameTime);

// 画面描写
function draw(){
  // ボールやパドルの軌跡を消す
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawblocks();
  drawBall();
  drawPaddle();

  // ボールの移動
  if(y + dy <= ballRadius){
    dy = -dy;
  } else if(y + dy >= canvas.height - ballRadius){
    // パドルセーフエリアの延長
    const paddleSafeArea = 6.5
    // パドルの中心
    const paddleMidPoint = paddleX + paddleWidth / 2
    // ボールがパドル上にある場合はセーフ
    if(x >= paddleX - paddleSafeArea && x <= paddleX + paddleWidth){
      if(x >= paddleMidPoint - ballRadius && x <= paddleMidPoint + ballRadius){
        dy = -dy * 1.5;
        console.log('hit!')
      } else {
        dy = dy0;
      }
    } else {
      alert('Game over!');
      clearInterval(interval)
    }
  } else if(x + dx <= ballRadius || x + dx >= canvas.width - ballRadius){
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
}
