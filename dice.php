<!doctype html>
<html lang="en" class="h-100" data-bs-theme="light">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>CIS4250 Group 5</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      <link rel="stylesheet" href="stylesheets/styleDice.css">
      <style>
         .modalCustom {
            z-index: 1050;
         }
         .modalCustom-content {
            background-color: #c1c1c1c1; /*was #0e000a*/
         }
         .modalCustom-header {
            background-color: #020511;
            color: #fff;
         }
         .modalCustom.h-100 {
            z-index: 99999; /* Adjust the z-index to bring it to the front */
         }
      </style>
   </head>
   <body class="d-flex h-100 text-center text-bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-autos flex-column">
         <header class="mb-0">
            <div class="container d-flex flex-wrap">
               <ul class="nav me-auto">
                  <li class="nav-item"><a href="/" class="nav-link link-info px-2 active text-white" aria-current="page">Home</a></li>
                  <li class="nav-item"><a href="about" class="nav-link link-info px-2 text-white">About Us</a></li>
                  <li class="nav-item"><a href="leaderboard" class="nav-link link-info px-2 active text-white" aria-current="page">Leaderboard</a></li>
                  <li class="nav-item">
                      <a href="#" class="nav-link link-info px-2 text-white" data-bs-toggle="modal" data-bs-target="#howToPlayModal">
                          How To Play
                      </a>
                  </li>
               </ul>
            </div>
         </header>
         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="text-black modal-title my-auto" id="exampleModalLabel">Nice you got the required score in the required amount of turns!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="cancel" style="width: 20px; height: 20px; padding: 0; font-size: 11px;">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div class="modal-body">
                        <p class="text-black">Your pretty lucky</p>
                     </div>
                     <div class="modal-footer justify-content-center" id="scoreMe">
                        <input type="text" id="username" class="mt-3 mr-3" placeholder="username, default guest">
                        <button id="logScoreBtn" class="btn btn-dark mt-3">Add Score</button>
                        <p id="confirmation" class="mt-3 ml-3" style="color: white;">Score has been added!</p>
                     </div>
               </div>
            </div>
         </div>
         <h1>Farkle</h1>
         <main class="px-3 my-auto ">
            <p id="turnDisplay"><span id="turnText">10</span> Tries left</p>
            <p></p>
            <p>Required Points: 2000</p>
            <p>| Current Score: <span id="currentScore">0</span> | Player 1 Total Score: <span id="playerScore">0</span> | Player 2 Total Score: <span id="player2Score">0</span> |</p>
         <div class="diceDisplay pb-4">
            <img id="dice1" src="assets/dice/1.png" alt="image1" data-number="1">
            <img id="dice2" src="assets/dice/2.png" alt="image2" data-number="2">
            <img id="dice3" src="assets/dice/3.png" alt="image3" data-number="3">
            <img id="dice4" src="assets/dice/4.png" alt="image4" data-number="4">
            <img id="dice5" src="assets/dice/5.png" alt="image5" data-number="5">
            <img id="dice6" src="assets/dice/6.png" alt="image6" data-number="6">
        </div>
            <button type="button" id="playGameBtn" class="btn btn-dark btn-lg play-game-btn" >1 Player Game Start</button>
            <button type="button" id="playGameBtn2" class="btn btn-dark btn-lg play-game-btn" >2 Player Game Start</button>
            <button type="button" id="rollDiceBtn" class="btn btn-dark btn-lg play-game-btn" >Roll Dice</button>
            <button type="button" id="bankScore" class="btn btn-dark btn-lg play-game-btn" >Bank Score</button>
         </main>
         <footer class="mt-auto text-white-50">
         </footer>
      </div>
      <div class="modal modalCustom fade h-100" id="howToPlayModal" tabindex="-1" aria-labelledby="howToPlayModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content modalCustom-content">
                  <div class="modal-header modalCustom-header">
                     <h5 class="modal-title" id="howToPlayModalLabel">How To Play</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <h5>Objective</h5>
                     <p>Get the highest score you can</p>
                     <h5>Rules:</h5>
                     <ul class="text-start list-inline">
                        <li>- There are 10 rounds, each round starts with rolling 6 die.</li>
                        <li>- You can score points for each 1, 5, or 3 of a kind.</li>
                        <li>- A player must select at least one scoring die to set aside after each roll. (note: you only get points for dice you set aside) </li>
                        <li>- Dice that are set aside cannot be rolled for the rest of the round!</li>
                        <li>- Each round lasts until you roll no scoring die or when you bank your score.</li>
                        <li>- If a roll produces no scoring dice all unbanked points are lost!!!</li>
                        <li>- How high can you score?</li>
                     </ul>
                     <!-- Exit button -->
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
            </div>
         </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <script type="module" src="js/dice.js"></script>
   </body>
</html>
