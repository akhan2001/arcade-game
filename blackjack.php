<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Blackjack</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" href="stylesheets/styleBlackjack.css">
	<script src="chrome-extension://mooikfkahbdckldjjndioackbalphokd/assets/prompt.js"></script>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
	<script src="js/blackjack.js"></script>
</head>
<body>
	<div class="cover-container d-flex w-100 h-100 flex-column">
		<header class="navbar mb-auto">
			<div class="container d-flex flex-wrap">
			<ul class="nav me-auto">
				<li class="nav-item"><a href="/" class="nav-link link-secondary px-3 my-2 active text-white" aria-current="page">Home</a></li>
				<li class="nav-item"><a href="about" class="nav-link link-secondary px-3 my-2 text-white">About Us</a></li>
				<li class="nav-item"><a href="leaderboard" class="nav-link link-secondary px-3 my-2 text-white">Leaderboard</a></li>
				<li class="nav-item">
					<a href="#" class="nav-link link-secondary px-3 my-2 text-white" data-bs-toggle="modal" data-bs-target="#howToPlayModal">
						How To Play
					</a>
				</li>
			</ul>
			</div>
		</header>
		<div class="game-container">
			<div class="background_section">
				<img src="assets/blackjack-bg.webp" alt="Blackjack Background">
			</div>
			<button type="button" id="playGameBtn" class="play-game-btn" data-bs-toggle="modal" data-bs-target="#blackjackModal">
				Play Game
			</button>
		</div>
	</div>

	<div class="modal fade" style="margin-top: -30px; height: 900px" id="blackjackModal" tabindex="-1" aria-labelledby="blackjackModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg">
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
				<div class= "rounds-remaining">
					<p id="rounds-remaining"></p>
				</div>	
				<div class= "player-money">
					<p id="player-money"></p>
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
		</div>
	</div>
	<div id="clue" class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="liveToast" class="toast bg-danger bg-gradient" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">👻</strong>
      
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
	 6413d3c427
    </div>
  </div>
</div>
	<div class="modal fade" id="howToPlayModal" tabindex="-1" aria-labelledby="howToPlayModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="howToPlayModalLabel">How To Play</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<h5>Objective</h5>
					<p>The objective of the Blackjack game is to end up with as money as you can at the end of the 10 rounds.</p>
					<h5>Rules:</h5>
					<ul class="text-left list-inline">
						<li>- You start of with 500 dollars and you can choose the amount oof money you want to bet.</li>
						<li>- The player and dealer start off with 2 cards, the player can then choose to hit or stand based on the cards they have.</li>
						<li>- The dealer has to hit if their total is currently less than yours.</li>
						<li>- If any players card total reaches more than 21, they are ou, adn the other player instantly wins</li>
						<li>- Win: If your final total is greater than the dealers final total you win.</li>
						<li>- The player can keep going until they run out of money, or until they go through the 10 round, the final money count is their score.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</body>
</html>