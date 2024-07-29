/* global pos */

function mainGame () {
  const canvas = document.getElementById('snakeGameCanvas')
  // window.canvas = canvas; //Testing purposes
  const restartBtn = document.getElementById('restartGameBtn')
  const logScoreBtn = document.getElementById('logScoreBtn')
  const username = document.getElementById('username')
  const confirmationText = document.getElementById('confirmation')
  const ctx = canvas.getContext('2d')

  // food image
  const img = new Image()
  img.src = 'assets/food.png'

  const trap = new Image()
  trap.src = 'assets/trap.png'

  const initialSnakeLength = 3
  const initialSnakePosition = { x: 200, y: 200 }
  let snake = []
  const food = { x: 300, y: 300 }
  const obstacle = { x: 20, y: -20}
  const snakeSize = 20
  let direction = 'right'
  let gameInterval = 0
  let score = 0
  let gameRunning = true
  const directionQueue = []
  
  //Testing purposes
  // window.snake = snake;
  window.food = food;
  window.score = score;
  window.initialSnakeLength = 3;
  window.initialSnakePosition = initialSnakePosition;
  
  const snakeScore = parseInt(document.cookie.split("; ").find((row) => row.startsWith("snakeScore="))?.split("=")[1]);

  console.log(`It looks like the snake hungers for exactly ${snakeScore} slabs of ham`);
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function initGame () {
    clearInterval(gameInterval) // make sure game isn't running
    resetSnake()
    updateGame(); // call updateGame immediately
    await wait(2000);
    gameRunning = true
    gameInterval = setInterval(updateGame, 100); // start running game after the timeout
  }

  function drawSnake () {
    ctx.fillStyle = 'green'
    for (let i = 0; i < snake.length; i++) {
      ctx.fillRect(snake[i].x, snake[i].y, (snakeSize - 2), (snakeSize - 2))
    }
  }

  function resetSnake () {
    snake = []
    for (let i = 0; i < initialSnakeLength; i++) {
      snake.push({ ...initialSnakePosition })
    }
    score = 0
  }

  async function updateGame () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawFood()
    drawObstacle()
    moveSnake()
    drawSnake()
    checkCollision()
    drawScore()
  }

  function drawFood () {
    // Draw the black filled rectangle (will blend in with background but will be used for collision detection)
    ctx.fillStyle = 'black'
    ctx.fillRect(food.x, food.y, (snakeSize - 2), (snakeSize - 2))

    // Draw Food at same location of filled square
    ctx.drawImage(img, food.x, food.y, (snakeSize - 2), (snakeSize - 2))
  }

  function placeObstacle () {
    // eslint-disable-next-line no-global-assign
    pos = Math.floor(Math.random() * 4) //0 = left, 1 = up, 2 = right 3 = down

    if(pos == 0){
      if(food.x != 0 && (food.x != canvas.width / snakeSize)){ // not placing obstacles when food is already on an edge in a way that would box it in
        obstacle.x = food.x -snakeSize
        obstacle.y =  food.y
      }
    } 
    else if(pos == 1){
      if(food.y != 0 && (food.y != canvas.height / snakeSize)){ // not placing obstacles when food is already on an edge in a way that would box it in
        obstacle.y = food.y - snakeSize
        obstacle.x =  food.x
      }
    }
    else if(pos == 2){
      if(food.x != 0 && (food.x != canvas.width / snakeSize)){ // not placing obstacles when food is already on an edge in a way that would box it in
        obstacle.x = food.x + snakeSize
        obstacle.y =  food.y
      }
    }
    else{
      if(food.y != 0 && (food.y != canvas.height / snakeSize)){ // not placing obstacles when food is already on an edge in a way that would box it in
        obstacle.y = food.y + snakeSize
        obstacle.x =  food.x
      }
    }
    
  }

  function drawObstacle () {
    ctx.fillStyle = "grey"
    ctx.drawImage(trap, obstacle.x, obstacle.y, snakeSize, snakeSize)

  }


  // Unused Function
  // function testLongerSnake () {
  //   // 	reset snake with a longer length
  //   clearInterval(gameInterval)
  //   resetSnakeWithLength(8)
  //   gameRunning = true
  //   gameInterval = setInterval(updateGame, 100)
  // }

  function moveSnake () {
    let headX = snake[0].x
    let headY = snake[0].y

    if (directionQueue.length) {
      direction = directionQueue.pop()
    }
    if (direction === 'right') headX += snakeSize
    if (direction === 'left') headX -= snakeSize
    if (direction === 'up') headY -= snakeSize
    if (direction === 'down') headY += snakeSize

    const newHead = { x: headX, y: headY }
    snake.unshift(newHead)

    if (headX === food.x && headY === food.y) {
      placeFood() // place new food and skip removing end of tail so snake grows by one
      placeObstacle()//
      score++
    } else {
      snake.pop() // remove snake's tail
    }
  }

  function placeFood () {
    // randomly place food
    const maxX = canvas.width / snakeSize
    const maxY = canvas.height / snakeSize
    food.x = Math.floor(Math.random() * maxX) * snakeSize
    food.y = Math.floor(Math.random() * maxY) * snakeSize
  }

  function checkCollision () {
    // check collision with walls
    const head = snake[0]
    if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height) {
      endGame()
    }

    if(head.x == obstacle.x && head.y == obstacle.y){
      endGame()
    }

    // check collision with snake
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        endGame()
      }
    }
  }

  // Unused function
  // function testDiagonalMovement () {
  //   // Set a custom direction for diagonal movement
  //   clearInterval(gameInterval)
  //   resetSnake()
  //   gameRunning = true
  //   direction = 'up-right'
  //   gameInterval = setInterval(updateGame, 100)
  // }

  function drawGameOverMessage () {
    ctx.fillStyle = 'white' // Text color
    ctx.font = '30px Arial' // Text size and font
    ctx.textAlign = 'center' // Center align text
    ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2) // Position the text in the middle of the canvas

    // Optional: Add a smaller message below the main one
    ctx.font = '20px Arial'
    ctx.fillText('Click Restart to play again', canvas.width / 2, canvas.height / 2 + 30)
  }

  function drawScore () {
    ctx.fillStyle = 'white' // Text color
    ctx.font = '15px Arial' // Text size and font
    ctx.textAlign = 'center' // Center align text
    ctx.fillText('Score: ' + score, 30, 20)
  }

  function endGame () {
    clearInterval(gameInterval) // stop game from running
    gameRunning = false
    // alert("Game Over!");
    drawGameOverMessage()

    if (score === snakeScore) {
      console.log("The snake is satisifed...for now");
      console.log("The snake burps out a piece of a note which has the characters 'f4bd1edfa31' written on it");
    }

    restartBtn.style.display = 'block' // Show the Restart button
    logScoreBtn.style.display = 'block'
    username.style.display = 'block'
    const theUsername = sessionStorage.getItem('username');
    username.placeholder = theUsername;
    username.value = theUsername;
    
  }

  const submitScore = async () => {
    let name = 'guest'
    name = username.value
    if (name == '' || name == null) {
      name = 'guest'
    }

    try {
      const response = await fetch('https://cis4250w24-05.socs.uoguelph.ca/addScore.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${encodeURIComponent(name)}&score=${encodeURIComponent(score)}&game=snake`
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      confirmationText.style.display = 'block'
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  // handle keyboard inputs
  document.addEventListener('keydown', function (e) {
    if (gameRunning && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) e.preventDefault()
    if (e.key === 'ArrowUp' && ((directionQueue.length ? directionQueue[0] : direction) !== 'down')) directionQueue.unshift('up')
    if (e.key === 'ArrowDown' && ((directionQueue.length ? directionQueue[0] : direction) !== 'up')) directionQueue.unshift('down')
    if (e.key === 'ArrowLeft' && ((directionQueue.length ? directionQueue[0] : direction) !== 'right')) directionQueue.unshift('left')
    if (e.key === 'ArrowRight' && ((directionQueue.length ? directionQueue[0] : direction) !== 'left')) directionQueue.unshift('right')
  })

  restartBtn.addEventListener('click', function () {
    restartBtn.style.display = 'none'
    logScoreBtn.style.display = 'none'
    username.style.display = 'none'
    confirmationText.style.display = 'none'
    initGame()
  })

  logScoreBtn.addEventListener('click', function () {
    submitScore()
  })

  let touchStartX = null;
  let touchStartY = null;
  document.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });
  document.addEventListener('touchmove', function (e) {
    if (!touchStartX || !touchStartY) {
      return;
    }
    let touchEndX = e.touches[0].clientX;
    let touchEndY = e.touches[0].clientY;
    let xChange = touchEndX - touchStartX;
    let yChange = touchEndY - touchStartY;
    if (Math.abs(xChange) > Math.abs(yChange)) {
      if (xChange > 0) {
        if ((directionQueue.length ? directionQueue[0] : direction) !== 'left') {
          directionQueue.unshift('right');
        }
      } else {
        if ((directionQueue.length ? directionQueue[0] : direction) !== 'right'){
          directionQueue.unshift('left');
        } 
      }
    } else {
      if (yChange > 0) {
        if ((directionQueue.length ? directionQueue[0] : direction) !== 'up') {
          directionQueue.unshift('down');
        } 
      } else {
        if ((directionQueue.length ? directionQueue[0] : direction) !== 'down') {
          directionQueue.unshift('up');
        } 
      }
    }
    touchStartX = null;
    touchStartY = null;
  });
  // event listener for the Play Game button
  document.querySelector('.play-game-btn').addEventListener('click', function () {
    initGame();
  });

  /***********************
  *   TESTING FUNCTIONS  *
  ************************/

  //Instantiation of functions to allow for export and testing

  mainGame.drawSnake = drawSnake;
  mainGame.resetSnake = resetSnake;
  mainGame.updateGame = updateGame;
  mainGame.drawFood = drawFood;
  mainGame.moveSnake = moveSnake;
  mainGame.checkCollision = checkCollision;
  mainGame.drawGameOverMessage = drawGameOverMessage;
  mainGame.drawScore = drawScore;
  mainGame.endGame = endGame; 
  mainGame.initGame = initGame;
}

function setScoreCookie() {
  const cookies = document.cookie;
  if(cookies === '') {
    let  neededScore = Math.floor(Math.random()*(10 - 1) + 1);
    document.cookie = `snakeScore=${neededScore};`;
  }
}
setScoreCookie();

document.addEventListener('DOMContentLoaded', mainGame)
module.exports = { game: mainGame, gameRun: mainGame()};
