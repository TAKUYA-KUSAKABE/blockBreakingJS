// ボールの大きさ
let ballRadius = 10;

// Ballの初期位置
let x = canvas.width / 2;
let y = canvas.height - 30;

// ボールの運動量変化
let dx = 2;
let dy = -2;

// ボールを表示
function drawBall(){
  ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = '#0095DD';
    ctx.fill()
  ctx.closePath();
}
