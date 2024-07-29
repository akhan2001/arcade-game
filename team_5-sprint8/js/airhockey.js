/* global username */

function mainGame () {
  // Set variables needed
  const toast = document.getElementById('liveToast')
  const logScoreBtn = document.getElementById('logScoreBtn')
  const confirmationText = document.getElementById('confirmation')
  const restartBtn = document.getElementById('restartGameBtn');
  const canvas = document.getElementById('airHockeyGameCanvas')
  const modal = document.getElementById('airHockeyModal')
  const ctx = canvas.getContext('2d')
  const w = canvas.width = 400
  const h = canvas.height = 640
  let timeLeft = 60;
  const timerDisplay = document.getElementById('timer');
  let timerInterval = setInterval(countdown, 1000);
  let gameRunning = true;
  let scored = false;
  let whoScored = "";

  function drawGameOverMessage () {
    console.log("here");
    ctx.fillStyle = 'red'// Text color
    ctx.font = '30px Arial' // Text size and font
    ctx.textAlign = 'center' // Center align text
    ctx.fillText('Time Limit Reached!', canvas.width / 2, canvas.height / 2) // Position the text in the middle of the canvas
    modal.style.overflow = 'scroll';
    modal.scrollTop = modal.scrollHeight;
    const scoreDifference = scoreboard.getPlayerScore() - scoreboard.getOpponentScore();
    // Optional: Add a smaller message below the main one
    ctx.font = '15px Arial'
    ctx.fillText('You Scored ' + scoreDifference + ' points , Click Restart to play again!', canvas.width / 2, canvas.height / 2 + 30)
  }



  function countdown() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    // Add leading zero if seconds < 10
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    // Update the timer display
    timerDisplay.textContent = `${minutes}:${seconds}`;

    // Decrement timeLeft
    timeLeft--;

    // Check if time is up
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      gameRunning = false;
      drawGameOverMessage();
      
      // Perform actions when time is up (e.g., end game)
      console.log("Time's up!");
    }
  }

  // Event listener for mouse movements
  window.addEventListener('mousemove', (e) => {
    movePuck(e.clientX, e.clientY);
  });

  // Event listener for touch movements
  window.addEventListener('touchmove', (e) => {
    // Prevent the window from scrolling
    e.preventDefault();

    // Get the touch coordinates
    const touch = e.touches[0];
    movePuck(touch.clientX, touch.clientY);
  }, { passive: false });

  function movePuck(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;

    // Boundary checks
    player.x = Math.max(w * 0.05, Math.min(mouseX, w - w * 0.05));
    player.y = Math.max((h / 2) + (w * 0.05), Math.min(mouseY, h - w * 0.05));
  }


  class Scoreboard{
    constructor () {
      this.playerScore = 0
      this.opponentScore = 0
    }
    getPlayerScore(){
      return this.playerScore
    }
    getOpponentScore(){
      return this.opponentScore
    }

    setOpponentScore(score){
      this.opponentScore = score
    }
    setPlayerScore(score){
      this.playerScore = score
    }
     drawScore () {
      ctx.fillStyle = 'red' // Text color
      ctx.font = '15px Arial' // Text size and font
      ctx.textAlign = 'center' // Center align text
      ctx.fillText('Score: ' + this.getOpponentScore(), 200, 20)
      ctx.fillStyle = 'rgb(50,0,255)' // Text color
      ctx.fillText('Score: ' + this.getPlayerScore(), 200, 625)
    }

    reset(){
      this.setOpponentScore(0)
      this.setPlayerScore(0)
    }

  }

  // Class Player for the puck
  class Player {
    constructor () {
      this.x = w / 2 // Initialize with a default position
      this.y = h / 2 + 30 // Initialize with a default position
      this.prevX = this.x
      this.prevY = this.y
      this.vx = 0 // Change in x
      this.vy = 0 // Change in y
      this.radius = w * 0.05 // Assuming player has a radius for collision detection
      this.score = 0
    }

    draw () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, w * 0.05, 0, 2 * Math.PI)
      ctx.fillStyle = '#1d3557'
      ctx.fill()
      ctx.strokeStyle = '#457b9d' // Border color
      ctx.lineWidth = 3
      ctx.stroke()
    }

    update () {
      // calcuate velocity
      this.vx = this.x - this.prevX
      this.vy = this.y - this.prevY
      this.prevX = this.x
      this.prevY = this.y
    }
  }

  class Opponent {
    constructor () {
      this.x = w / 2 // Initialize with a default position
      this.y = h / 2 - 400 // Initialize with a default position
      this.prevX = this.x
      this.prevY = this.y
      this.dx = 0
      this.dy = 0
      this.radius = w * 0.05 // Assuming player has a radius for collision detection
      this.score = 0
      this.speed = 7;
    }

    draw () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
      ctx.fillStyle = '#9d0208'
      ctx.fill()
      ctx.strokeStyle = '#e63946' // Border color
      ctx.stroke()
    }

    update (puck) {
      
      // Calcuate velocity
      this.vx = this.x - this.prevX
      this.vy = this.y - this.prevY
      this.prevX = this.x
      this.prevY = this.y

      // Opponent AI
      if (puck.x >= 0 && puck.x <= canvas.width && puck.y >= 0 && puck.y <= canvas.height / 2) { // If puck is in reach move towards puck
        // calculate direction to puck
        const dx = puck.x - this.x;
        const targetY = puck.y + this.radius; // add radius so opponent tries to hit the puck down
        const dy = targetY - this.y;

        // calculate distance
        const distance = Math.sqrt(dx * dx + dy * dy);

        // calculate direction vector
        let dirX = 0, dirY = 0;
        if (distance !== 0) {
            dirX = dx / distance;
            dirY = dy / distance;
        }

        // scale vector to speed
        const velocityX = dirX * this.speed;
        const velocityY = dirY * this.speed;

        // move the opponent
        this.x += velocityX;
        this.y += velocityY;
      } else { // else center in front of net
        // get distance to location
        this.dx = (canvas.width / 2 - this.x)
        this.dy = (100 - this.y)

        // move towards location
        this.x += this.dx * 0.03
        this.y += this.dy * 0.03
      }

      // check if opponent in bounds
      if (this.x < 0) {
        this.x = 0
      }
      if (this.x > canvas.width) {
        this.x = canvas.width
      }
      if (this.y < 0) {
        this.y = 0
      }
      if (this.y > canvas.height / 2) {
        this.y = canvas.height / 2
      }
    }
  }
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  class Puck {
    constructor () {
      this.x = w / 2
      this.y = h / 2
      this.dx = 0
      this.dy = 0
      this.radius = 15 // Defined radius for collision detection
      this.vx = 0
      this.vy = 0
    }

    reset(){
      this.x = w / 2
      this.y = h / 2
      this.dx = 0
      this.dy = 0
      this.vx = 0
      this.vy = 0
    }

    draw () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = 'black'
      ctx.fill()
      ctx.closePath()
    }

    update (player) {

      // Get Distance
      const dx = this.x - player.x
      const dy = this.y - player.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Check for collision
      if (distance < this.radius + player.radius) {
        this.vx += player.vx + dx/this.radius; // add velocity + distance
        this.vy += player.vy + dy/this.radius; // the distance add the bounce when the player is not moving
      }

      // Apply friction
      this.vx *= 0.995
      this.vy *= 0.995

      // Apply velocity cap
      if (Math.abs(this.vx) > 5) {
        this.vx = 5 * Math.sign(this.vx)
      }
      if (Math.abs(this.vy) > 5) {
        this.vy = 5 * Math.sign(this.vy)
      }

      // Bounce off walls

      if(this.y <= 0 && this.x >= 140  && this.x <= canvas.width-140){
        scoreboard.setPlayerScore(scoreboard.getPlayerScore() +1)
        //await wait(2000);
        //code score delay here
        
        this.reset();
        scored = true;
        whoScored = "player";
        console.log("player:" + scoreboard.getPlayerScore());
        if (scoreboard.getPlayerScore() == 3) {
            toast.setAttribute("class", "toast show");
        }
 
      }
      if(this.y >= canvas.height &&this.x >= 140  && this.x <= canvas.width-140){
        scoreboard.setOpponentScore(scoreboard.getOpponentScore() +1)
        this.reset();
        scored = true;
        whoScored = "opponent";
        console.log("opponent:"+scoreboard.getOpponentScore())
      }

      if (this.x <= 0 || this.x >= canvas.width) {
        this.vx *= -1
      }
      if (this.y <= 0  || this.y >= canvas.height) {
        this.vy *= -1
      }

      // Move puck
      this.x += this.vx
      this.y += this.vy

      // ensure in bounds
      if (this.x < 0) {
        this.x = 0
      }
      if (this.x > canvas.width) {
        this.x = canvas.width
      }
      if (this.y < 0) {
        this.y = 0
      }
      if (this.y > canvas.height) {
        this.y = canvas.height
      }
    }
  }

  // Define the board function with the lines
  const board = () => {
    ctx.beginPath()
    ctx.strokeStyle = '#000' // Border color
    // ctx.arc(w/2, h/2, w/10, 0, 2*Math.PI);
    // ctx.moveTo(0, h/2);
    ctx.moveTo(w / 3, 0)
    ctx.rect(w / 3, 0, w / 3, h / 20)
    ctx.fillStyle = 'black'
    ctx.fill()
    ctx.moveTo(w / 3, 0)
    ctx.rect(w / 3, h - h / 20, w / 3, h)
    ctx.fillStyle = 'black'
    ctx.fill()
    
    ctx.stroke()
  }

  const hockeyTableImage = new Image()
  hockeyTableImage.onload = function () {
    // Draw the image onto the canvas
    ctx.drawImage(hockeyTableImage, 0, 0, canvas.width, canvas.height)

    // Then draw the board over the image
    board()
  }
  hockeyTableImage.src = 'assets/airhockey-table-copy.png' // Replace with the path to your image

  // Animation function
  async function updateGame () {
    if (!gameRunning) {
      return;
    }
    ctx.clearRect(0, 0, w, h) // Clear the canvas

    // Redraw the image and board every frame
    ctx.drawImage(hockeyTableImage, 0, 0, canvas.width, canvas.height)
    board()

    player.update()
    player.draw()
    opponent.update(puck)
    opponent.draw()
    puck.update(player)
    puck.update(opponent)
    puck.draw()
    scoreboard.drawScore();
    if (scored == true) {
      if (whoScored == "opponent") {
        window.alert("Oponenent Scored!\nPlayer Score: " + scoreboard.playerScore + "\nOpponent Score: " + scoreboard.opponentScore)
        whoScored = "";
      }
      if (whoScored == "player") {
        window.alert("You Scored!\nPlayer Score: " + scoreboard.playerScore + "\nOpponent Score: " + scoreboard.opponentScore)
        whoScored = "";
      }
      await wait(2000);
      scored = false;
    }
    requestAnimationFrame(updateGame) // Loop the game
  }


  logScoreBtn.addEventListener('click', function () {
    submitScore()
  })

  const submitScore = async () => {
    let name = 'guest'
    name = username.value
    if (name == '') {
      name = 'guest'
    }
    let score = scoreboard.getPlayerScore() - scoreboard.getOpponentScore();

    console.log(name)
    console.log(score)
    try {
      const response = await fetch('https://cis4250w24-05.socs.uoguelph.ca/addScore.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${encodeURIComponent(name)}&score=${encodeURIComponent(score)}&game=hockey`
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      confirmationText.style.color = 'black'
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  restartBtn.addEventListener('click', function () {

    modal.scrollTop = 0;// brings modal scroll to top
    modal.style.overflow = 'hidden'; // hides add score button
    confirmationText.style.color = 'white'

    player.x = w / 2 // Initialize with a default position
    player.y = h / 2 + 30 // Initialize with a default position

    opponent.x = w / 2 // Initialize with a default position
    opponent.y = h / 2 - 400 // Initialize with a default position

    puck.x = w / 2
    puck.y = h / 2
    clearInterval(timerInterval);
    timeLeft = 60; // Reset time left
    timerDisplay.textContent = '1:00'; // Reset timer display
    scoreboard.reset()
    countdown();
    if (!gameRunning) {
      gameRunning = true;
      updateGame();
    }
    timerInterval = setInterval(countdown, 1000);
  })

  const player = new Player();
  const puck = new Puck();
  const opponent = new Opponent();
  const scoreboard = new Scoreboard();
  countdown();
  updateGame(); // Start the game
  
  
  /***********************
  *   TESTING FUNCTIONS  *
  ************************/

  //Instantiation of functions to allow for export and testing
  mainGame.createPlayer = Player;
  mainGame.createOpponent = Opponent;


}

//document.addEventListener('DOMContentLoaded', mainGame)
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('playGameBtn').addEventListener('click', mainGame);
});
//document.getElementById('playGameBtn').addEventListener('click', mainGame);
/* When imported, two properties are used game and gameRun
 * game is used as a reference, gameRun is used to invoke right away
 * for the document eventlistener used in testing file.
*/
module.exports = {game: mainGame, gameRun: mainGame()};
