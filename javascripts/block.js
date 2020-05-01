// ブロック
let blocks = [];
let blockRowCount = 3;
let blockColumnCount = 5;
let blockWidth = 75;
let blockHeight = 20;
let blockPadding = 10; // ブロック間の隙間
let blockOffsetTop = 30; // ブロックの生成位置
let blockOffsetLeft = 30;

// ブロックの描写
function drawblocks(){
  // 二次元配列を作成し、x, yの値を適宜選択する
  for(let i=0; i < blockColumnCount; i++){
    blocks[i] = [];
    for(let k=0; k < blockRowCount; k++){
      let blockX = (i*(blockWidth + blockPadding)) + blockOffsetLeft;
      let blockY = (k*(blockHeight + blockPadding)) + blockOffsetTop;
      blocks[i][k] = {x: 0, y: 0};
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


