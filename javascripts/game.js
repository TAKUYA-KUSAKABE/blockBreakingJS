    // canvasを2D描画コンテキストに設定
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    // ボールの大きさ
    let ballRadius = 10;

    // Ballの初期位置
    let x = canvas.width / 2;
    let y = canvas.height - 30;

    // ボールの運動量変化
    let dx = 2;
    let dy = -2;

    // パドルの位置
    let paddleHeight = 10;
    let paddleWidth = 75;
    let paddleX = (canvas.width - paddleWidth) / 2

    // キー操作
    let rightPressed = false;
    let leftPressed = false;

    // ゲームスタート
    let interval = setInterval(draw, 10);

    // ブロック
    let brickRowCount = 3;
    let brickColumnCount = 5;
    let brickWidth = 75;
    let brickHeight = 20;
    let brickPadding = 10;
    let brickOffsetTop = 30;
    let brickOffsetLeft = 30;

    // ブロックの生成
    let bricks = [];
    for(let i=0; i < brickColumnCount; i++){
      bricks[i] = [];
      for(let k=0; k < brickRowCount; k++){
        bricks[i][k] = {x: 0, y: 0};
      }
    }

    // ブロックの描写
    function drawBricks(){
      for(let i=0; i < brickColumnCount; i++){
        for(let k=0; k < brickRowCount; k++){
          let brickX = (i*(brickWidth + brickPadding)) + brickOffsetLeft;
          let brickY = (k*(brickHeight + brickPadding)) + brickOffsetTop;
          bricks[i][k].x = brickX;
          bricks[i][k].y = brickY;
          ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = '#0095DD';
            ctx.fill();
          ctx.closePath();
        }
      }
    }

    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
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

    // ボールを表示
    function drawBall(){
      ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = '#0095DD';
        ctx.fill()
      ctx.closePath();
    }

    // パドルを表示
    function drawPaddle(){
      ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
      ctx.closePath();
    }

    // 画面描写
    function draw(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks();
      drawBall();
      drawPaddle();

      // ボールの移動
      if(y + dy <= ballRadius){
        dy = -dy;
      } else if(y + dy >= canvas.height - ballRadius){
        if(x > paddleX && x < paddleX + paddleWidth){
          dy = -dy;
        } else {
          alert('Game over!');
          // document.location.reload();
          clearInterval(interval)
        }
      } else if(x + dx <= ballRadius || x + dx >= canvas.width - ballRadius){
        dx = -dx;

      }　else {
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