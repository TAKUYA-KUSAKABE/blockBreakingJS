// キー入力イベントの追加
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

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
