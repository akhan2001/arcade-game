/* @jest-environment jsdom */


//const img = new Image();
//img.src = 'assets/food.png';

//Mocking the canvas and related buttons to test functionality of code
document.body.innerHTML = 
    `
    <button type="button" id="playGameBtn" class="btn btn-dark btn-lg play-game-btn" data-bs-toggle="modal" data-bs-target="#snakeGameModal">
        Play Game
    </button>
    <div class="modal fade" id="snakeGameModal" tabindex="-1" aria-labelledby="snakeGameModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="snakeGameModalLabel">Snake Game</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <canvas id="snakeGameCanvas" width="500" height="400"></canvas>
            <button id="restartGameBtn" class="btn btn-dark mt-3">Restart Game</button>
            <div id="addScore" class="d-flex justify-content-start">
                <input type="text" id="username" class="mt-3 mr-3" placeholder="username, default guest">
                <button id="logScoreBtn" class="btn btn-dark mt-3">Add Score</button>
                <p id="confirmation" class="mt-3 ml-3">Score has been added!</p>
            </div>
        </div>
        </div>
    </div>
   </div>
   `;

/*** game is set to module that is exported from snake.js, with property of game and gameRun.  ***/
var game = require('../js/snake')

//Mocking the eventListener for running the game function
document.addEventListener('DOMContentLoaded',game.gameRun)

test('Checks if restart button is present after game has ended', ()=>{
        
    //Mock restart button
    restartBtn = document.getElementById('restartGameBtn');

    //Run endGame function
    game.game.endGame()
    
    expect(restartBtn.getAttribute("style")).toBe('display: block;');

});

test('Checks if restart button disappears after it has been clicked', ()=>{
        
    //Mock restart button
    restartBtn = document.getElementById('restartGameBtn');

    //Run endGame function
    game.game.endGame()

    restartBtn.click();
    
    expect(restartBtn.getAttribute("style")).toBe('display: none;');

});

describe('check if game ends properly', ()=>{

    
    it('Check if restart button is displayed', ()=>{

        restartBtn = document.getElementById('restartGameBtn');
        
        
        //End Game
        game.game.endGame()
        
        expect(restartBtn.getAttribute("style")).toBe('display: block;');


    });

    it('Check if add score button is displayed', ()=>{

        addScore = document.getElementById('logScoreBtn');

        //End Game
        game.game.endGame()
        
        expect(addScore.getAttribute("style")).toBe('display: block;');


    });

    it('Check if username input is displayed', ()=>{

        userName = document.getElementById('username');

        //End Game
        game.game.endGame()
        
        expect(userName.getAttribute("style")).toBe('display: block;');


    });
   

});
