<!doctype html>
<html lang="en" class="h-100" data-bs-theme="light">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>CIS4250 Group 5</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      <link rel="stylesheet" href="stylesheets/stylePinball.css">
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
					<img src="assets/pinball-bg.jpg" alt="Pinball Background">
				</div>
				<button type="button" id="playGameBtn" class="btn btn-dark btn-lg play-game-btn" data-bs-toggle="modal" data-bs-target="#pinballGameModal">
					Play Game
				</button>
			</div>
		</div>
		<div class="modal fade" id="pinballGameModal" tabindex="-1" aria-labelledby="pinballGameModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="pinballGameModalLabel">pinball Game</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<canvas id="pinballGameCanvas" width="500" height="400"></canvas>
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
						<p>Hit the pinball to hit targets and get points. Try to get as many points as you can before the pinball falls!</p>
						<h5>Rules:</h5>
						<ul class="text-left list-inline">
							<li>Move the flipper using left and right arrow keys.</li>
							<li>Hitting targets gets you points</li>
							<li>If you miss the pinball, game over.</li>
						</ul>
						<p>Enjoy the game and try to beat your high score!</p>
					</div>
				</div>
			</div>
		</div>

      <script type="module" src="js/pinball.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
   </body>
</html>
