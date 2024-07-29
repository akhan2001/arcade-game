/* @jest-environment jsdom */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../dice.php'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

describe('dice game initialization', () => {
    beforeEach(() => {
		// Setup our document body
		document.body.innerHTML = `
		  <button type="button" id="playGameBtn" class="btn btn-dark btn-lg play-game-btn">Play Game</button>
		  <button type="button" id="rollDiceBtn" class="btn btn-dark btn-lg play-game-btn" disabled>Roll Dice</button>
		  <button type="button" id="bankScore" class="btn btn-dark btn-lg play-game-btn" disabled>Bank Score</button>
		`;
		// Require your JavaScript file here if it attaches event listeners to the buttons
		require('../js/dice.js');
	  });

	  afterEach(() => {
        fetch.resetMocks();
        jest.resetModules();
   	  });

	  it('should have the Play Game button enabled', () => {
		const playGameBtn = document.getElementById('playGameBtn');
		expect(playGameBtn.disabled).toBe(false);
	  });
	
	  it('should have the Roll Dice button disabled', () => {
		const rollDiceBtn = document.getElementById('rollDiceBtn');
		expect(rollDiceBtn.disabled).toBe(true);
	  });
	
	  it('should have the Bank Score button disabled', () => {
		const bankScoreBtn = document.getElementById('bankScore');
		expect(bankScoreBtn.disabled).toBe(true);
	  });
});

describe('dice game initialization', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../js/dice.js'); // path to your js file
    });

    afterEach(() => {
        fetch.resetMocks();
        jest.resetModules();
    });

    it('Initial scores are set to zero', () => {
        const currentScore = document.getElementById('currentScore');
        const playerScore = document.getElementById('playerScore');
        
        expect(currentScore.textContent).toBe('0');
        expect(playerScore.textContent).toBe('0');
    });
});