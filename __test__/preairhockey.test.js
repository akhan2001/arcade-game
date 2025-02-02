/* @jest-environment jsdom */

document.body.innerHTML =
`
<div class="modal-content">
<div class="modal-header">
    <h5 class="modal-title" id="airHockeyModalLabel">Air Hockey Game</h5>
    <div style="display: inline-block; background-color: black; padding: 10px; border-radius: 5px; margin-left: 200px" id="timer">2:00</div>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
    <canvas id="airHockeyGameCanvas" position="relative" width="400" height="670"></canvas>
</div>
<button id="restartGameBtn" class="btn btn-dark mt-3">Restart Game</button>
<div style="width: 100%; display: flex; height: 40px; background-color: #021022;">
</div>
<div id="addScore" class="d-flex justify-content-start">
					<input type="text" id="username" class="mt-3 mr-3" placeholder="username, default guest">
					<button id="logScoreBtn" class="btn btn-dark mt-3">Add Score</button>
					<p id="confirmation" class="mt-3 ml-3" style="color: white;">Score has been added!</p>
				</div>
</div>


`

var game = require('../js/airhockey')

//Mocking the eventListener for running the game function
document.addEventListener('DOMContentLoaded',game.gameRun)


describe('Player is successfully created', ()=>{
        
    
   
    testPlayer = new game.game.createPlayer()
    
    it('Player has a score of 0', ()=>{
        
        expect(testPlayer.score).toBe(0);

    });

    it('Player has correct position: Width and Height',()=>{
        expect(testPlayer.x).toBe(200);
        expect(testPlayer.y).toBe(350);
    });


});

describe('Opponent is successfully created', ()=>{
        
    
   
    testOpponent = new game.game.createOpponent()
    
    it('Opponent has a score of 0', ()=>{
        
        expect(testOpponent.score).toBe(0);

    });

    it('Opponent has correct position: Width and Height',()=>{
        expect(testOpponent.x).toBe(200);
        expect(testOpponent.y).toBe(-80);
    });


});