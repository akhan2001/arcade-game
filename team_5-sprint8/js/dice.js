/* global bootstrap */
/* global confirmation */
/* global username */

document.addEventListener("DOMContentLoaded", () => {
  const rollDiceBtn = document.getElementById("rollDiceBtn");
  const bankScoreBtn = document.getElementById("bankScore");
  const winText = document.getElementById("exampleModalLabel");
  const playGame = document.getElementById("playGameBtn");
  const playGame2 = document.getElementById("playGameBtn2");

  const logScoreDisplay = document.getElementById("scoreMe");
  const logScoreBtn = document.getElementById('logScoreBtn');

  const turnText = document.getElementById("turnText");
  const turnDisplay = document.getElementById("turnDisplay");
  const currentScore = document.getElementById("currentScore");
  const playerScore = document.getElementById("playerScore");
  const player2Score = document.getElementById("player2Score");
  const gameWin = new bootstrap.Modal(document.getElementById('exampleModal'));

  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  const dice3 = document.getElementById("dice3");
  const dice4 = document.getElementById("dice4");
  const dice5 = document.getElementById("dice5");
  const dice6 = document.getElementById("dice6");

  for (let i = 0; i < 6; i++) {
    let tempDice = document.getElementById(`dice${i + 1}`);
    tempDice.style.display = "none";
    //tempDice.style.opacity = "1";
  }

  dice1.addEventListener("click", () => {
    diceOnClick(0);
  });
  dice2.addEventListener("click", () => {
    diceOnClick(1);
  });
  dice3.addEventListener("click", () => {
    diceOnClick(2);
  });
  dice4.addEventListener("click", () => {
    diceOnClick(3);
  });
  dice5.addEventListener("click", () => {
    diceOnClick(4);
  });
  dice6.addEventListener("click", () => {
    diceOnClick(5);
  });

  let currentTurn = 0; //0 for player and 1 for opponent
  let gameMode = 0; //0 for single player and 1 for two player
  let startTurn = 10; // used to easily change value if needed without chaning it anywhere turnRemaining appears
  let turnRemaining = startTurn;
  let currentDiceValue = [];
  let currentSelectedDice = [];

  let diceClicked = [false, false, false, false, false, false];
  let tempScore = 0;
  let bankedScore = 0;
  let opponentBankedScore = 0;

  let tempBankedScore = 0;

  bankScoreBtn.disabled = true;
  rollDiceBtn.disabled = true;

  rollDiceBtn.addEventListener("click", async () => {

    let tempDice;
  
    for (let i = 0; i < 6; i++) {
      if (diceClicked[i]) {
        tempDice = document.getElementById(`dice${i + 1}`);
        tempDice.style.display = "none";
      }
    }
  
    let currentDie = Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * (6 - 1 + 1)) + 1
    );
  
    tempBankedScore += tempScore;
    tempScore = 0;
    currentSelectedDice = [];
    setCurrentDiceValue(currentDie);
    setDiceImage(currentDie);

    if (turnRemaining === 0 && gameMode === 0) {
      gameOver();
      return;
    }
  
    if (!checkKeepGoing()) {
      rollDiceBtn.disabled = true;
      bankScoreBtn.disabled = true;
      console.log("womp womp Opponent turn");
      tempScore = 0;
      tempBankedScore = 0;
      currentScore.innerHTML = `${tempBankedScore}`;
      turnText.innerHTML = `${turnRemaining}`;
    }
    rollDiceBtn.disabled = true;
  });

  bankScoreBtn.addEventListener("click", async () => {
    calcScore();

    diceClicked = [false, false, false, false, false, false];
    currentSelectedDice = [];
    let tempDice;

    if (gameMode === 0 || currentTurn === 0) {
      bankedScore += tempScore + tempBankedScore;
    } else {
      opponentBankedScore += tempScore + tempBankedScore;
    }

    if (bankedScore >= 2000 || opponentBankedScore >= 2000) {
      bankScoreBtn.disabled = true;
      rollDiceBtn.disabled = true;
      playGame.disabled = false;
      playGame2.disabled = false;
      if(gameMode === 1) {
        logScoreDisplay.style.visibility = "hidden";
        if(bankedScore >= 2000 ) {
          winText.innerHTML = "Player 1 Won";
        } else {
          winText.innerHTML = "Player 2 Won";
        }
      } else{
        logScoreDisplay.style.visibility = "visible";
      }
      gameWin.show();
    } else {
      tempScore = 0;
      tempBankedScore = 0;

      for (let i = 0; i < 6; i++) {
        tempDice = document.getElementById(`dice${i + 1}`);
        tempDice.style.display = "inline";
        tempDice.style.opacity = "1";
      }

      bankScoreBtn.disabled = true;
      rollDiceBtn.click();

      if (gameMode === 0) {
        turnRemaining -= 1;
        turnText.innerHTML = `${turnRemaining}`;
      } else {
        if (currentTurn === 0) {
          currentTurn = 1;
          turnDisplay.innerHTML = "Its now player 2's turn";
        } else {
          currentTurn = 0;
          turnDisplay.innerHTML = "Its now player 1's turn";
        }
      }
    }
    currentScore.innerHTML = `${tempBankedScore}`;
    playerScore.innerHTML = `${bankedScore}`;
    player2Score.innerHTML = `${opponentBankedScore}`;
  });


const gameOver = () => {

  rollDiceBtn.disabled = true;
  bankScoreBtn.disabled = true;
};

  const setDiceImage = (currentDie) => {
    let tempDice;
    for (let i = 0; i < currentDie.length; i++) {
      tempDice = document.getElementById(`dice${i + 1}`);
      tempDice.src = `assets/dice/${currentDie[i]}.png`;
      tempDice.dataset.number = `${currentDie[i]}`;
    }
  };

  const setCurrentDiceValue = (currentDie) => {
    currentDiceValue = [];
    currentDie.forEach((value) => currentDiceValue.push(value));
    // console.log("DICE VALUEs");
    // console.log(currentDiceValue);
  };

  const diceOnClick = (diceID) => {
    let tempDice = document.getElementById(`dice${diceID + 1}`);
    let tempIndex = 0;

    if (!diceClicked[diceID]) {
      diceClicked[diceID] = !diceClicked[diceID];
      tempDice.style.opacity = "0.5";
      currentSelectedDice.push(currentDiceValue[diceID]);
    } else {
      diceClicked[diceID] = !diceClicked[diceID];
      tempDice.style.opacity = "1";
      tempIndex = currentSelectedDice.indexOf(currentDiceValue[diceID]);
      currentSelectedDice.splice(tempIndex, 1);
    }

    // console.log("Currently Selected");
    // console.log(currentSelectedDice);

    if (currentSelectedDice.length > 0 && turnRemaining > 0) {
      rollDiceBtn.disabled = false;
      bankScoreBtn.disabled = false;
    } else {
      rollDiceBtn.disabled = true;
      bankScoreBtn.disabled = true;
    }

    calcScore();
  };

  const calcScore = () => {
    tempScore = 0;
    let tempVal = 0;
    let multiplier = 0;

    let occurence = currentSelectedDice.reduce(function (value, value2) {
      return value[value2] ? ++value[value2] : (value[value2] = 1), value;
    }, {});

    Object.keys(occurence).forEach(function (key) {
      // console.log(`KEY: ${key}`);
      if (key === "1") {
        tempVal = parseInt(occurence[key]);
        if (tempVal > 2) {
          multiplier = tempVal % 3;
          tempScore += 1000;
        } else {
          tempScore += 100 * parseInt(occurence[key]);
        }
      } else if (key === "5") {
        tempVal = parseInt(occurence[key]);
        if (tempVal > 2) {
          multiplier = tempVal % 3;
          tempScore += 500;
        } else {
          tempScore += 50 * parseInt(occurence[key]);
        }
      } else {
        tempVal = parseInt(occurence[key]);
        if (tempVal > 2) {
          multiplier = tempVal % 3;
          tempScore += parseInt(key) * 100 * (multiplier + 1);
        }
      }
    });
    currentScore.innerHTML = `${tempScore + tempBankedScore}`;
    // console.log(occurence);
  };

  const checkKeepGoing = () => {
    let tempVal = 0;
    let tempDice;
    let tempCurrentDiceValue = [];

    for (let i = 0; i < currentDiceValue.length; i++) {
      tempDice = document.getElementById(`dice${i + 1}`);
      if (!(tempDice.style.display === "none")) {
        tempCurrentDiceValue.push(currentDiceValue[i]);
      }
    }

    let occurence = tempCurrentDiceValue.reduce(function (value, value2) {
      return value[value2] ? ++value[value2] : (value[value2] = 1), value;
    }, {});
    let keepGoing = false;

    Object.keys(occurence).forEach(function (key) {
      tempVal = parseInt(occurence[key]);
      if (key === "1" || key === "5" || tempVal > 2) {
        keepGoing = true;
      }
    });

    return keepGoing;
  };

  playGame.addEventListener("click", async () => {
    let tempDice;
    gameMode = 0;
    playGame.disabled = true;
    playGame2.disabled = true;
    bankScoreBtn.disabled = true;
    rollDiceBtn.disabled = false;

    for (let i = 0; i < 6; i++) {
      tempDice = document.getElementById(`dice${i + 1}`);
      tempDice.style.display = "inline";
      tempDice.style.opacity = "1";
    }

    turnRemaining = startTurn;
    currentDiceValue = [];
    currentSelectedDice = [];
    diceClicked = [false, false, false, false, false, false];
    tempScore = 0;
    bankedScore = 0;
    tempBankedScore = 0;
    calcScore();

    currentScore.innerHTML = `${tempBankedScore}`;
    turnText.innerHTML = `${turnRemaining}`;

    rollDiceBtn.click();
  });

  playGame2.addEventListener("click", async () => {
    let tempDice;
    gameMode = 1;
    currentTurn = 0;
    playGame.disabled = true;
    playGame2.disabled = true;
    bankScoreBtn.disabled = true;
    rollDiceBtn.disabled = false;

    for (let i = 0; i < 6; i++) {
      tempDice = document.getElementById(`dice${i + 1}`);
      tempDice.style.display = "inline";
      tempDice.style.opacity = "1";
    }

    turnRemaining = 10;
    currentDiceValue = [];
    currentSelectedDice = [];
    diceClicked = [false, false, false, false, false, false];
    tempScore = 0;
    bankedScore = 0;
    tempBankedScore = 0;
    calcScore();

    currentScore.innerHTML = `${tempBankedScore}`;
    turnText.innerHTML = `${turnRemaining}`;
    turnDisplay.innerHTML = "Its now player 1's turn";

    rollDiceBtn.click();
  });

  document.getElementById('cancel').addEventListener('click', function () {
    gameWin.hide();
  });

  const submitScore = async () => {
    let name = 'guest'
    name = username.value
    if (name == '') {
      name = 'guest'
    }

    console.log(name)

    try {
      console.log("hello");
      const response = await fetch('https://cis4250w24-05.socs.uoguelph.ca/addScore.php', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${encodeURIComponent(name)}&score=${encodeURIComponent(turnRemaining)}&game=farkle`
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      confirmation.style.color = 'black'
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  logScoreBtn.addEventListener('click', function () {
    submitScore()
  })

});