/* @jest-environment jsdom */

document.body.innerHTML =
`
<div class="modal-content">
				
				<div class="modal-header">
					<h5 class="modal-title" id="blackjackModalLabel">Blackjack</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class = "player-hand">
                    <p id="playerHand"></p>
                </div>
				<div class = "dealer-hand">
                    <p id="dealerHand"></p>
                </div>
				<div class = "hit-or-stand">
					<p id="hitOrStand"></p>
				</div>
				<div class= "compare-results">
					<p id="compareResults"></p>
				</div>	
				<div class="modal-body">
                    <button id="hitButton">Hit</button>
                    <button id="standButton">Stand</button>
				</div>
				<button id="restartGameBtn" class="btn btn-dark mt-3">Restart Game</button>
				<div id="addScore" class="d-flex justify-content-start">
					<input type="text" id="username" class="mt-3 mr-3" placeholder="username, default guest">
					<button id="logScoreBtn" class="btn btn-dark mt-3">Add Score</button>
					<p id="confirmation" class="mt-3 ml-3" style="color: white;">Score has been added!</p>
				</div>
			</div>


`

var game = require('../js/blackjack')

//Mocking the eventListener for running the game function
document.addEventListener('DOMContentLoaded',game.gameRun)


describe('Game initialization', ()=>{
        
    
   
    let deck = game.deck
	let player = game.deal
	let dealer = game.deal
    
    it('Deck has 52 cards', ()=>{
        
        expect(deck).toHaveLength(52);

    });

   
	it("Player has two cards", ()=>{
		expect(player).toHaveLength(2);
	});

	it("Dealer has two cards", ()=>{
		expect(dealer).toHaveLength(2);
	})

});

describe('Player Actions in Blackjack Game', () => {
	let initialPlayerCardsLength, updatedPlayerCardsLength;
  
	beforeAll(() => {
	  // Setup and start the game
	  const game = require('../js/blackjack'); // Update the path as necessary
	  document.addEventListener('DOMContentLoaded',game.gameRun)

	//   game.gameRun(); // Initialize the game
  
	  // Simulate initial dealing of two cards to the player
	  initialPlayerCardsLength = game.deck.length;
  
	  // Simulate player hitting the "Hit" button
	  document.getElementById("hitButton").click();
  
	  // Check the updated length of the player's hand
	  updatedPlayerCardsLength = game.deck.length;
	});
  
	it('Player receives one additional card after hitting "Hit" button', () => {
	  expect(updatedPlayerCardsLength).toBe(initialPlayerCardsLength);
	});
  });
  