<!doctype html>
<html lang="en" class="h-100" data-bs-theme="light">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>CIS4250 Group 5</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      <link rel="stylesheet" href="stylesheets/styleIndex.css">
      <script src="chrome-extension://mooikfkahbdckldjjndioackbalphokd/assets/prompt.js"></script>
   </head>
   <body class="d-flex h-100 text-center text-bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
         <header class="mb-0">
            <div class="container d-flex flex-wrap">
               <ul class="nav me-auto">
                  <li class="nav-item"><a href="/" class="nav-link link-info px-2 active text-white" aria-current="page">Home</a></li>
                  <li class="nav-item"><a href="about" class="nav-link link-info px-2 text-white">About Us</a></li>
                  <li class="nav-item"><a href="leaderboard" class="nav-link link-info px-2 active text-white" aria-current="page">Leaderboard</a></li>
                  <li class="nav-item">
                     <a href="#" class="nav-link link-info px-2 active text-white" data-bs-toggle="modal" data-bs-target="#howToPlayModal">
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
                        <h5 class="text-black modal-title my-auto" id="exampleModalLabel">Womp Womp!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="cancel" style="width: 20px; height: 20px; padding: 0; font-size: 11px;">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div class="modal-body">
                        <p class="text-black">Looks like you messed up the pattern</p>
                        <p class="text-black" id="finalScoreDisplay">You got score of ##</p>
                     </div>
                     <div class="modal-footer justify-content-center">
                        <input type="text" id="username" class="mt-3 mr-3" placeholder="username, default guest">
                        <button id="logScoreBtn" class="btn btn-dark mt-3">Add Score</button>
                        <p id="confirmation" class="mt-3 ml-3" style="color: white;">Score has been added!</p>
                     </div>
               </div>
            </div>
         </div>
		 <h1>Follow the Pattern</h1>
       <!-- <div id="hint" style="display: none">Nic<span class="highlight">e</span> Pa<span class="highlight">t</span>tern 🤫</div> -->
       <div id="hint" style="display: none">You unlocked my secret pattern! Copy paste this clue now: <span class="highlight">0e02e9bed07</span>👻</div>
         <main class="px-3 my-auto">
            <button type="button" id="playGameBtn" class="btn btn-dark btn-lg play-game-btn" >Play Game</button>
            <div class="flex flex-wrap justify-center">
               <div class="d-flex flex-wrap justify-content-center">
                  <div class="d-flex flex-column m-3">
                        <button id="button1" type="button" class="btn btn-success" style="height:40vh; width: 25vw;"></button>
                        <audio id="sound1" src="assets\button-124476.mp3"></audio>
                  </div>
                  <div class="d-flex flex-column m-3">
                        <button id="button2" type="button" class="btn btn-danger" style="height:40vh; width: 25vw;"></button>
                        <audio id="sound2" src="assets\click-124467.mp3"></audio>
                  </div>
               </div>
            <div class="d-flex flex-wrap justify-content-center">
               <div class="d-flex flex-column m-3">
                     <button id="button3" type="button" class="btn btn-warning" style="height:40vh; width: 25vw;"></button>
                     <audio id="sound3" src="assets\interface-124464.mp3"></audio>
               </div>
               <div class="d-flex flex-column m-3">
                     <button id="button4" type="button" class="btn btn-primary" style="height:40vh; width: 25vw;"></button>
                     <audio id="sound4" src="assets\shooting-sound-fx-159024.mp3"></audio>
               </div>
            </div>
               <!-- <ul class="list-group list-group-horizontal-sm justify-content-center">
                  <button id="button1" type="button" class="btn btn-success w-25 m-3" style="height:25rem;"></button>
                  <audio id="sound1" src="assets\button-124476.mp3"></audio>
                  <button id="button2" type="button" class="btn btn-danger w-25 m-3"  style="height:25rem;"></button>
                  <audio id="sound2" src="assets\click-124467.mp3"></audio>
               </ul>
               <ul class="list-group list-group-horizontal-sm justify-content-center">
                  <button id="button3" type="button" class="btn btn-warning w-25 m-3"  style="height:25rem;"></button>
                  <audio id="sound3" src="assets\interface-124464.mp3"></audio>
                  <button id="button4" type="button" class="btn btn-primary w-25 m-3"  style="height:25rem;"></button>
                  <audio id="sound4" src="assets\shooting-sound-fx-159024.mp3"></audio>
               </ul> -->
            </div>
         </main>
         <footer class="mt-auto text-white-50">
         </footer>
      </div>
      <div class="modal fade" id="howToPlayModal" tabindex="-1" aria-labelledby="howToPlayModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered modal-lg">
            <div style="background-color: #c1c1c1; color: black;" class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="howToPlayModalLabel">How To Play</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <h5>Objective</h5>
                  <p>The objective of the match game is to try to remember the pattern for as long as you can.</p>
                  <h5>Rules:</h5>
                  <ul class="text-left list-inline">
                     <li>- The game will start off with the game showing the player the first pattern, which will just be one block/colour.</li>
                     <li>- As the player gets the pattern right, more blocks/colours will be added to the pattern.</li>
                     <li>- Each different colour/block will have its own sound, making it easier for the player to recognize which colour is being added.</li>
                     <li>- The player will keep guessing the pattern, until they get it wrong, and the amount of rounds you lasted is your score.</li>
                  </ul>
                  <p>Try to see how long of a pattern you can memorize!</p>
                  <h5>Secret:</h5>
                  <p>I'll lend you in on a little secret. If you guess my 4-button pattern, I'll give you the next part of the clue! 👻</p>
                  <p>!</p>
					   <p>Dr.Green and the farmers are up to something. They have a meeting place but there's something missing from this address...: uoguelph.ca/</p>
               </div>
            </div>
         </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>      
      <script src="js/match.js"></script>
   </body>
</html>