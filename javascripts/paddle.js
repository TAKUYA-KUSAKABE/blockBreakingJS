// パドルの位置
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2

// パドルを表示
function drawPaddle(){
  ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
  ctx.closePath();

  // ボールの加速エリア
  ctx.beginPath();
    ctx.rect(paddleX+paddleWidth/2-ballRadius, canvas.height - paddleHeight, ballRadius*2, paddleHeight);
    ctx.fillStyle = 'red';
    ctx.fill();
  ctx.closePath();

}
