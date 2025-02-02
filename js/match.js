/* global bootstrap */
/* global defaultSpeed */
/* global round */

document.addEventListener('DOMContentLoaded', () => {
    
    const logScoreBtn = document.getElementById('logScoreBtn')
    const confirmationText = document.getElementById('confirmation')
    const username = document.getElementById('username')
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const playGame = document.getElementById("playGameBtn");
    const finalScoreDisplay = document.getElementById("finalScoreDisplay");
    const gameOverModal = new bootstrap.Modal(document.getElementById('exampleModal'));

    const beforeColour1 = button1.style.backgroundColor;
    const beforeColour2 = button2.style.backgroundColor;
    const beforeColour3 = button3.style.backgroundColor; 
    const beforeColour4 = button4.style.backgroundColor;

    let pattern = [];
    let score = 0;
    let clicked = 0;
    let gameStarted = false;
    let gameOver = false;
    let round = 1; //This probably can be used to increase the speed/difficulty
    let defaultSpeed = 1000;

    button1.addEventListener('click', () => {playSound("1"); if(gameStarted) turn("1");});
    button2.addEventListener('click', () => {playSound("2"); if(gameStarted) turn("2");});
    button3.addEventListener('click', () => {playSound("3"); if(gameStarted) turn("3");});
    button4.addEventListener('click', () => {playSound("4"); if(gameStarted) turn("4");});  
    
    //The sleep function 
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

    //assumes input will be 1 - 4
    const playSound = (option) => {
        let soundOption = `sound${option}`;
        const audio = document.getElementById(soundOption);
        audio.play();
        audio.currentTime=0;
    }

    const turn = async (id) => {
        clicked++;
        console.log(`Clicked button${id}`);

        if(id !== pattern[clicked-1]) {
            console.log("WOMP WOMP");
            //reset related variables, like score, the round, clicked etc etc
            finalScoreDisplay.innerText = `You got score of ${score}`
            round = 1;
            clicked = 0;
            gameOver = true;
            gameStarted = false;
            pattern = [];
            playGame.disabled=false;
            
            gameOverModal.show();
        }

        if((clicked === pattern.length) && !gameOver) {
            round++;
            score++;
            console.log("Last item for now");
            clicked = 0;
            await addToPattern();
            button1.disabled=false;
            button2.disabled=false;
            button3.disabled=false;
            button4.disabled=false;
        }
    }

    const addToPattern = async () => {
        let nextStep = (Math.floor(Math.random()*4) + 1).toString();
        pattern.push(nextStep);

        //disable the buttons to prevent users from clicking them
        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
        button4.disabled=true;
        
        if(score !== 0) {
            button1.style.backgroundColor = "beige";
            button2.style.backgroundColor = "beige";
            button3.style.backgroundColor = "beige";
            button4.style.backgroundColor = "beige";
        }
        await sleep(1500);

        button1.style.backgroundColor = beforeColour1;
        button2.style.backgroundColor = beforeColour2;
        button3.style.backgroundColor = beforeColour3;
        button4.style.backgroundColor = beforeColour4;
        
        for(let i = 0;i < pattern.length;i++) {
            console.log(`Playing BUTTON${pattern[i]}`)
            let beforeColour = "";
            switch(pattern[i]) {
                case "1":
                    beforeColour = button1.style.backgroundColor
                    playSound("1");
                    button1.style.backgroundColor = "beige";
                    await sleep(500);
                    button1.style.backgroundColor = beforeColour
                    break;
                case "2":
                    beforeColour = button2.style.backgroundColor
                    playSound("2");
                    button2.style.backgroundColor = "beige";
                    await sleep(500);
                    button2.style.backgroundColor = beforeColour
                    break;
                case "3":
                    beforeColour = button3.style.backgroundColor
                    playSound("3");
                    button3.style.backgroundColor = "beige";
                    await sleep(500);
                    button3.style.backgroundColor = beforeColour
                    break;
                case "4":
                    beforeColour = button4.style.backgroundColor
                    playSound("4");
                    button4.style.backgroundColor = "beige";
                    await sleep(500);
                    button4.style.backgroundColor = beforeColour
                    break;
            }
            await sleep((defaultSpeed - (round*40)));
        }
    }

    playGame.addEventListener('click', async () => {
        gameStarted = true;
        gameOver = false;
        score = 0;
        await addToPattern();
        playGame.disabled=true;
        button1.disabled=false;
        button2.disabled=false;
        button3.disabled=false;
        button4.disabled=false;
        confirmationText.style.color = 'white'
        clicked = 0;

    })


    document.getElementById('cancel').addEventListener('click', function () {
        gameOverModal.hide();
    });


    const ruCheating = () =>{

        console.log(`
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣶⡾⠿⠛⠛⠛⠋⠉⠉⠙⠛⠛⠛⠻⠷⣶⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣠⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡀
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
    ⠀⠈⢻⣿⣿⣿⣿⡋⠉⠉⠉⢉⣉⠉⠉⠉⣉⣩⣭⣭⣍⣉⠉⠉⠉⠉⠉⠉⠉⠉⢻⣿⣿⣿⣿⣿⣿⠛⠛⠋⠉⠉⢙⣛⠛⣉⣩⣭⣭⣭⣉⡉⠉⠉⠉⠉⠉⠉⠉⠛⣿⣿⣿⣿⣿⠋⠀
    ⠀⠀⠸⣿⣿⣿⣿⡇⠀⢀⣴⠟⠛⢿⣶⣿⡟⠉⠉⠉⠉⣿⣿⣦⡀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⢀⣶⠿⣻⣿⣟⣿⣏⠀⠉⠙⠻⣷⣄⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡿⠀⠀
    ⠀⠀⠀⣿⣿⣿⣿⣷⠀⢸⡏⠀⢰⣾⡇⠘⣿⠀⠀⠀⣴⣿⡇⠙⣿⡄⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⢸⡏⣾⠟⢹⣿⢿⣿⣇⠀⠀⠀⠈⢻⣧⠀⠀⠀⠀⢰⣿⣿⣿⣿⡇⠀⠀
    ⠀⠀⠀⢸⣿⣿⣿⣿⡀⠸⣷⣀⣿⣿⠃⣸⡿⠀⣠⣾⣿⣿⡇⠀⢹⡇⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠸⣿⣟⣴⣿⠃⢸⣿⣿⡄⠀⠀⠀⠀⣿⠀⠀⠀⠀⣼⣿⣿⣿⣿⠀⠀⠀
    ⠀⠀⠀⠸⣿⣿⣿⣿⣇⠀⠈⠉⢿⣷⠾⠟⢁⣾⣿⣿⣿⣿⣧⣀⣼⡷⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠹⣿⣿⣵⣶⣿⣿⣿⣧⠀⠀⠀⢠⣿⠀⠀⠀⢀⣿⣿⣿⣿⡿⠀⠀⠀
    ⠀⠀⠀⠀⢿⣿⣿⣿⣿⡄⠀⠀⠈⢿⣦⣴⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⢤⡿⣿⣿⣿⣿⣿⣿⣿⡄⢀⣠⣿⠋⠀⠀⠀⣼⣿⣿⣿⣿⡇⠀⠀⠀
    ⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣦⡀⠀⠀⠙⠿⣿⣿⣿⣿⣿⣿⠟⠋⠀⠀⣠⣿⣿⣿⣿⣿⠟⠛⠻⣿⣿⣿⣿⣿⣦⡈⠁⠈⠻⣿⣿⣿⣿⣿⣿⠿⠛⠁⠀⠀⣠⣾⣿⣿⣿⣿⠏⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣷⣦⣤⣄⣀⣈⣉⣉⣁⣀⣀⣤⣴⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣶⣤⣄⣀⣉⣉⣉⣉⣀⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠃⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⡇⠈⠙⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠋⢹⣿⠇⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠈⣿⣇⠀⠀⠀⣿⣷⠀⠀⠀⠀⢠⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡆⠀⠀⠀⠀⣾⣿⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢹⣿⡀⠀⠀⠈⠉⠀⠀⠀⠀⠸⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⠀⠀⠻⠿⠃⠀⠀⠀⢰⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠈⣿⣧⠀⠀⠀⣴⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣶⣶⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⢶⣶⣶⣦⡀⠀⠀⠘⠛⠋⠀⠀⠀⠀⠀⠀⠀⢀⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣧⠀⠀⠻⠿⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢷⣶⣤⣤⣤⣤⣤⣤⣤⣶⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣼⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣷⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣾⡿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⣿⣿⣿⣶⣶⣤⣤⠀⠀⠀⠀⠀⠀⣤⣤⣶⣶⣿⣿⣿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`);
        console.log("Your not cheating right?");
    }

    ruCheating();

    const submitScore = async () => {
        let name = 'guest'
        name = username.value
        if (name == '') {
          name = 'guest'
        }
    
        console.log(name)
        console.log(score)
        try {
          const response = await fetch('https://cis4250w24-05.socs.uoguelph.ca/addScore.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${encodeURIComponent(name)}&score=${encodeURIComponent(score)}&game=match`
          })
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          confirmationText.style.color = 'black'
        } catch (error) {
          console.error('Error:', error.message)
        }
      }

      logScoreBtn.addEventListener('click', function () {
        submitScore()
      })
});

document.addEventListener('DOMContentLoaded', () => {
    // Assuming these are your button elements
    const button1 = document.getElementById("button1"); // green
    const button2 = document.getElementById("button2"); // red
    const button3 = document.getElementById("button3"); // blue
    const button4 = document.getElementById("button4"); // yellow
    const hint = document.getElementById('hint'); // Element to display "Nice Pattern"

    // Correct pattern (assuming button1 is green, button2 is red, button3 is blue, button4 is yellow)
    const correctPattern = ['button1', 'button2', 'button3', 'button4'];
    let userPattern = [];

    // Function to handle button clicks
    const handleButtonClick = (buttonId) => {
        if (userPattern.length < 4) {
            userPattern.push(buttonId);

            if (userPattern.length === 4) {
                // Check if userPattern matches correctPattern
                if (JSON.stringify(userPattern) === JSON.stringify(correctPattern)) {
                    // Display hint and highlight 'c' and 'r'
                    hint.style.display = 'block';
                    setTimeout(() => {
                        hint.style.display = 'none';
                    }, (defaultSpeed - (round*40))); // Hide after 2.5 seconds
                }

                // Reset pattern to allow another attempt
                userPattern = [];
            }
        }
    };



    // Add event listeners for button clicks
    button1.addEventListener('click', () => handleButtonClick('button1'));
    button2.addEventListener('click', () => handleButtonClick('button2'));
    button3.addEventListener('click', () => handleButtonClick('button3'));
    button4.addEventListener('click', () => handleButtonClick('button4'));
});
