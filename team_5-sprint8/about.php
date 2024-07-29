<!doctype html>
<html lang="en" class="h-100" data-bs-theme="light">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>About Us</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<link rel="stylesheet" href="stylesheets/styleAbout.css">
	<script src="chrome-extension://mooikfkahbdckldjjndioackbalphokd/assets/prompt.js"></script>
</head>
<body>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <!-- Navbar -->
        <header class="mb-auto">
            <div class="container d-flex flex-wrap">
                <ul class="nav me-auto">
                    <li class="nav-item"><a href="/" class="nav-link link-info px-2 text-black">Home</a></li>
                    <li class="nav-item"><a href="" class="nav-link link-info px-2 active text-black" aria-current="page">About Us</a></li>
                    <li class="nav-item"><a href="leaderboard" class="nav-link link-info px-2 active text-black">Leaderboard</a></li>
					<li class="nav-item"><a href="" class="nav-link link-info px-2 active text-black" >Login</a></li>
                </ul>
            </div>
        </header>
        <!-- Hero Section -->
        <main class="px-3">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <img src="assets/team.png" alt="About Us" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h1>About CIS4250 Group 5</h1>
                    <div class="about-paragraph">
                        <p>
                        Our team consists of seven dedicated members, each bringing unique expertise in various aspects of software design. From the intricate planning stages to the final implementation, our diverse skills blend seamlessly. We excel in areas ranging from user interface design to complex back-end algorithms.
                        </p>
                        <p class="about-hidden">
                        In regards to our Arcade Game, we have implemented a secret game for you all to figure out. There will be hints, clues, and secret phrases that you will need to guess for entering our secret page. First step is already done, you found our hidden white text!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>

	<!-- ============================================ -->
    <!--                   TEAM                    -->
    <!-- ============================================ -->

    <section id="reviews-62">
        <div class="cs-container">
            <div class="cs-content">
                <h2 class="cs-title">Meet the Team</h2>
                <!-- <p class="cs-text">
					Our team consists of seven dedicated members, each bringing unique expertise in various aspects of software design. From the intricate planning stages to the final implementation, our diverse skills blend seamlessly. We excel in areas ranging from user interface design to complex back-end algorithms.
				</p> -->
            </div>
            <ul class="cs-card-group">
                <?php include('about_snippet/megh.html');?>
                <?php include('about_snippet/jacob.html');?>
                <?php include('about_snippet/brandon.html');?>
                <?php include('about_snippet/jose.html');?>
                <?php include('about_snippet/joudi.html');?>
                <?php include('about_snippet/manmeet.html');?>
                <?php include('about_snippet/abdullah.html');?>
            </ul>
        </div>
        <footer class="footer">
        <p>&copy; <?php echo date("Y"); ?> CIS4250</p>
    </footer>
    </section>
    <!-- [Scripts] -->
</body>
</html>
