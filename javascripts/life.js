let life = 3;

function drawLife(){
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText('Life: ' + life, canvas.width - 65, 20);
}