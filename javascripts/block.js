// ブロック
let blockRowCount = 3;
let blockColumnCount = 5;
let blockWidth = 75;
let blockHeight = 20;
let blockPadding = 10;
let blockOffsetTop = 30;
let blockOffsetLeft = 30;

// ブロックの生成
let blocks = [];
for(let i=0; i < blockColumnCount; i++){
  blocks[i] = [];
  for(let k=0; k < blockRowCount; k++){
    blocks[i][k] = {x: 0, y: 0};
  }
}

// ブロックの描写
function drawblocks(){
  for(let i=0; i < blockColumnCount; i++){
    for(let k=0; k < blockRowCount; k++){
      let blockX = (i*(blockWidth + blockPadding)) + blockOffsetLeft;
      let blockY = (k*(blockHeight + blockPadding)) + blockOffsetTop;
      blocks[i][k].x = blockX;
      blocks[i][k].y = blockY;
      ctx.beginPath();
        ctx.rect(blockX, blockY, blockWidth, blockHeight);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
      ctx.closePath();
    }
  }
}
