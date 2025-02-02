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
                  <li class="nav-item"><a href="" class="nav-link link-info px-2 active text-white" aria-current="page">Home</a></li>
                  <li class="nav-item"><a href="about" class="nav-link link-info px-2 text-white">About Us</a></li>
                  <li class="nav-item"><a href="leaderboard" class="nav-link link-info px-2 active text-white" aria-current="page">Leaderboard</a></li>
                  <li class="nav-item"><a type="button" class="nav-link link-info px-2 text-white" id="showModalButton">Login</a></li>
               </ul>
            </div>
         </header>
         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="text-black modal-title" id="exampleModalLabel">Login <span id="secretMessage" style="display: none;">ed in, in each game lies a piece of the link that leads to your next destination...</span></h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="cancel" style="width: 20px; height: 20px; padding: 0; font-size: 11px;">
                     <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="flex mb-4 modal-body">
                     <form>
                        <div style="display: flex; align-items: center; margin-bottom: 20px; margin-top: 10px;">
                           <label for="username" style="margin-right: 2.4rem; text-align: left; color: black;">Username:</label>
                           <input type="text" class="form-control" id="username">
                        </div>
                     </form>
                  </div>
                  <div class="modal-footer">
                     <button type="button" id="login" class="btn btn-primary">Login</button>
                  </div>
               </div>
            </div>
         </div>
         
		 <h1>CIS4250 Group 5</h1>
         <p class="lead">Welcome to the Group 5 arcade!</p>
         <main class="px-3 my-auto">
               <h2>Games Menu</h2>
            <ul class="list-group list-group-horizontal-sm justify-content-center">
            <a href="snake" style="text-decoration: none;">
               <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
                  <div class="card d-flex position-relative flex-column">
                     <div class='imgContainer'>
                        <img src='assets/snake.jpg'>
                     </div>
                     <div class="content">
                        <h2>Snake</h2>
                        <p>You start out as a lowly worm like snake trapped in an enclosure, your goal is to eat more and more snack like objects(mouse?). As you grow larger and larger in your enclosure you have to make sure you don't accidentally eat yourself </p>
                     </div>
                  </div>
               </div>
			   </a>
            <a href="airhockey" style="text-decoration: none;">
               <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
                  <div class="card d-flex position-relative flex-column">
                     <div class='imgContainer'>
                        <img src='assets/airhockey.jpg'>
                     </div>
                     <div class="content">
                        <h2>Air Hockey</h2>
                        <p>A pong like tabletop sport where you face off against a highly skilled player(not really) to sink the puck into the other person's goal</p>
                     </div>
                  </div>
               </div>
			   </a>
            <a href="match" style="text-decoration: none;">
               <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
                  <div class="card d-flex position-relative flex-column">
                     <div class='imgContainer'>
                        <img src='assets/simon.png'>
                     </div>
                     <div class="content">
                        <h2>Match the pattern</h2>
                        <p>A game where your given a pattern and you'll have to repeat it, as the game gets continually harder</p>
                     </div>
                  </div>
               </div>
			   </a>
          
            </ul>
            <ul class="list-group list-group-horizontal-sm justify-content-center">
            <a href="blackjack" style="text-decoration: none;">
               <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
                  <div class="card d-flex position-relative flex-column">
                     <div class='imgContainer'>
                        <img src='assets/blackjack-logo.webp'>
                     </div>
                     <div class="content">
                        <h2>Blackjack</h2>
                        <p>Try to win big playing Blackjack!</p>
                     </div>
                  </div>
               </div>
			   </a>
            <a href="dice" style="text-decoration: none;">
               <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
                  <div class="card d-flex position-relative flex-column">
                     <div class='imgContainer'>
                        <img src='assets/farkle.png'>
                     </div>
                     <div class="content">
                        <h2>Farkle</h2>
                        <p>Classic dice game</p>
                     </div>
                  </div>
               </div>
			   </a>
            <a href="pinball" style="text-decoration: none;">
               <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
                  <div class="card d-flex position-relative flex-column">
                     <div class='imgContainer'>
                        <img src='assets/pinball.jpg'>
                     </div>
                     <div class="content">
                        <h2>Pinball</h2>
                        <p>The classic arcade game.</p>
                     </div>
                  </div>
               </div>
			   </a>
            </ul>
         </main>
         <footer class="mt-auto text-white-50">
         </footer>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <script src="js/index.js"></script>
   </body>
</html>