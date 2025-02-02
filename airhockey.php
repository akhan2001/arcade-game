<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Air Hockey Game</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" href="stylesheets/styleAirHockey.css">
	<script src="chrome-extension://mooikfkahbdckldjjndioackbalphokd/assets/prompt.js"></script>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
	<script src="js/airhockey.js"></script>
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
				<img src="assets/airhockey-bg.png" alt="Air Hockey Background">
			</div>
			<button type="button" id="playGameBtn" class="play-game-btn" data-bs-toggle="modal" data-bs-target="#airHockeyModal">
				Play Game
			</button>
		</div>
	</div>

	<div class="modal fade" style=" position: absolute; margin-top: -30px; height: 900px; width: 450px; left: 500px;" id="airHockeyModal" tabindex="-1" aria-labelledby="airHockeyModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h6 class="modal-title" id="airHockeyModalLabel">Air Hockey Game</h6>
					<div style="display: inline-block; background-color: black; padding: 10px; border-radius: 5px; margin-left: 200px" id="timer">2:00</div>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<canvas id="airHockeyGameCanvas" position="relative" width="400" height="670"></canvas>
				</div>
				<button id="restartGameBtn" class="btn btn-dark mt-1">Restart Game</button>
				<!-- <div style="width: 100%; display: flex; height: 40px; background-color: #021022;"></div> -->
				<div id="addScore" class="d-flex justify-content-start">
					<input type="text" id="username" class="mt-1 mr-2" placeholder="username, default guest">
					<button id="logScoreBtn" class="btn btn-dark mt-1 ml-4">Add Score</button>
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
					<p>The objective of the Air Hockey game is to compete against a cpu or another player in order to beat them in a game of air hockey.</p>
					<h5>Rules:</h5>
					<ul class="text-left list-inline">
						<li>- Each player moves the puck with the handmallet, using your mouse/mouse pad.</li>
						<li>- You then shoot the puck in the direction you want to score.</li>
						<li>- The opponent will try to reflect the puck back at you until someone scores.</li>
						<li>- Score: If you send the puck striaght into the opposing players net, you will score a point.</li>
					</ul>
					<p>You have one minute to score as many goals as you can, your total score is your score - opponents score!</p>
					<p>!</p>
					<p>Dr. Green must have left this for the farmers...: -06.socs.</p>
				</div>
			</div>
		</div>
	</div>
</body>
</html>