<!doctype html>
<html lang="en" class="h-100" data-bs-theme="light">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Snake Game</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<link rel="stylesheet" href="stylesheets/styleSnake.css">
		<script src="chrome-extension://mooikfkahbdckldjjndioackbalphokd/assets/prompt.js"></script>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
		<script src="js/snake.js"></script>
	</head>
	<body class="d-flex h-100 text-center text-bg-dark">
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
					<img src="assets/snakeBackground.png" alt="Snake Background">
				</div>
				<button type="button" id="playGameBtn" class="btn btn-dark btn-lg play-game-btn" data-bs-toggle="modal" data-bs-target="#snakeGameModal">
					Play Game
				</button>
			</div>
		</div>
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
		<div class="modal fade" id="howToPlayModal" tabindex="-1" aria-labelledby="howToPlayModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="howToPlayModalLabel">How To Play</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<h5>Objective</h5>
						<p><span style="color: #ff0000">T</span>he objective of the Snak<span style="color: #ff0000">e</span> Game is to eat as many food items as possible to g<span style="color: #ff0000">r</span>ow the longest snake. Each ti<span style="color: #ff0000">m</span>e the snake eats a food item, it grows longer. The game cont<span style="color: #ff0000">in</span>ues until the snake collides with itself or the game boundary.</p>
						<h5>Rules:</h5>
						<ul class="text-left list-inline">
							<li>- Movement: The sn<span style="color: #ff0000">a</span>ke continuously moves in the direction it's heading. You can control the direction using the arrow keys (Up, Down, Left, Right) on your keyboard.</li>
							<li>- Eating Food: Food items will appear randomly on the screen. Guide the snake to eat them. Each time the snake eats food, it grows in length.</li>
							<li>- Avoid Collisions: If the snake runs into the game boundary or into itself, the game ends. Navigate careful<span style="color: #ff0000">l</span>y!</li>
							<li>- Score: Your score is based on the amount of food the snake eats. Each food item increases your score. Aim for a high score!</li>
						</ul>
						<p>Enjoy the game and try to beat your high score!</p>
						<p>!</p>
						<p>Dr. Green left something behind:  https://cis4250w24</p>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
