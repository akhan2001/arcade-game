<!doctype html>
<html lang="en" class="h-100" data-bs-theme="light">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>CIS4250 Group 5</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      <link rel="stylesheet" href="stylesheets/styleSecret.css">
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
                     <h5 class="text-black modal-title" id="exampleModalLabel">Login</h5>
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
         <p class="lead">CONGRATULATIONS</p>
         <main class="px-3 my-auto">
            <iframe src="https://giphy.com/embed/lgcUUCXgC8mEo" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>   
        </main>
         <footer class="mt-auto text-white-50">
         </footer>
      </div>
      <script type="module" src="js/secret.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
   </body>
</html>