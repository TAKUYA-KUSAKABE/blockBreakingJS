// キー入力イベントの追加
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
document.addEventListener('mousemove', mouseMoveHandler)

// キー操作
let rightPressed = false;
let leftPressed = false;

// キー入力の認識
function keyDownHandler(e){
  if(e.key == 'Right' || e.key == 'ArrowRight'){
    rightPressed = true;
  } else if(e.key == 'Left' || e.key == 'ArrowLeft'){
    leftPressed = true;
  }
}

function keyUpHandler(e){
  if(e.key == 'Right' || e.key == 'ArrowRight'){
    rightPressed = false;
  } else if(e.key == 'Left' || e.key == 'ArrowLeft'){
    leftPressed = false;
  }
}

function mouseMoveHandler(e){
  // clientXはウィンドウ内のマウスの位置
  // canvas.offsetLeftはウィンドウ内のキャンパスの左端の位置
  let relativeX = e.clientX - canvas.offsetLeft;
  // カーソルがキャンバス内にあったら、動くように処理
  if(relativeX > 0 && relativeX < canvas.width){
    paddleX = relativeX - paddleWidth / 2 //パドルの中心で動くようにする
  }
}
