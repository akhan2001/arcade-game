/* global username */
/* global confirmationText */

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("hitButton").addEventListener("click", function() {
        console.log("Hit button clicked!");
        document.getElementById("hitOrStand").innerText = "Hit button clicked!"
        if (isGameLive) {
            playerCards.push(deck.pop());
            printCards();
            if (calculateSum(playerCards) > 21) {
                compareResults();
                isGameLive = false;
                endGame()
            }
        } else {
            console.log("You can't hit right now...")
            document.getElementById("hitOrStand").innerText = "You can't hit right now..."
        }
    });

    document.getElementById("standButton").addEventListener("click", function() {
        console.log("Stand button clicked!");
        document.getElementById("hitOrStand").innerText = "Stand button clicked!"
        if (isGameLive) {
            isGameLive = false;
            dealerLogic();
            printCards();
            compareResults();
            endGame()
        } else {
            console.log("You can't Stand right now...")
            document.getElementById("hitOrStand").innerText = "You can't Stand right now..."
        }
    });
    document.getElementById("restartGameBtn").addEventListener("click", function() {
        console.log("Restart button clicked!");
        document.getElementById("hitOrStand").innerText = "";
        document.getElementById("compareResults").innerText = "";
        playerMoney = 500; // Initial amount of money the player has
        roundsRemaining = 10; // Number of rounds remaining
        betAmount = 0;
        playBlackjack();
    });
    const logScoreBtn = document.getElementById('logScoreBtn')
    logScoreBtn.addEventListener('click', function () {
        submitScore()
    })
});

function endGame() {
    setTimeout(function() {
        if (roundsRemaining <= 0 || playerMoney <= 0) {
            alert(`Game Over. You finished with $${playerMoney}`);
        } else {
            console.log("Waiting 1 second");
            document.getElementById("hitOrStand").innerText = "";
            document.getElementById("compareResults").innerText = "";
            playBlackjack();
        }
    }, 1000);
}

// Generates a deck of cards
function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    let deck = [];

    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }

    return deck;
}

// Shuffles the deck
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap
    }
}

// Deals the cards to player and dealer
function dealCards() {
    return [deck.pop(), deck.pop()];
}

// Calculates the sum of card values
function calculateSum(cards) {
    let sum = 0;
    let aceCount = 0;

    for (let card of cards) {
        if (card.value === 'Ace') {
            aceCount += 1;
            sum += 11;
        } else if (['Jack', 'Queen', 'King'].includes(card.value)) {
            sum += 10;
        } else {
            sum += parseInt(card.value);
        }
    }

    while (sum > 21 && aceCount > 0) {
        sum -= 10; // Count Ace as 1 instead of 11
        aceCount -= 1;
    }

    return sum;
}

// Print Cards
function printCards() {
    const playerHandElement = document.getElementById("playerHand");
    const dealerHandElement = document.getElementById("dealerHand");
    
    playerHandElement.innerHTML = "";
    dealerHandElement.innerHTML = "";
    
    // Display player's cards
    playerCards.forEach(card => {
        const cardImg = document.createElement("img");
        cardImg.src = `assets/cards/${card.value.toLowerCase()}_of_${card.suit.toLowerCase()}.png`;
        cardImg.style.width = "80px";
        cardImg.style.height = "auto";
        playerHandElement.appendChild(cardImg);
    });
    const playerSum = calculateSum(playerCards);
    playerHandElement.innerHTML += `<br>Total: ${playerSum}`;
    
    // Display dealer's cards
    if (isGameLive) {
        // Back of Card
        const cardImgBack = document.createElement("img");
        cardImgBack.src = `assets/cards/card_back.png`;
        cardImgBack.style.width = "80px";
        cardImgBack.style.height = "auto";
        dealerHandElement.appendChild(cardImgBack);

        const cardImg = document.createElement("img");
        cardImg.src = `assets/cards/${dealerCards[1].value.toLowerCase()}_of_${dealerCards[1].suit.toLowerCase()}.png`;
        cardImg.style.width = "80px";
        cardImg.style.height = "auto";
        dealerHandElement.appendChild(cardImg);
        dealerHandElement.innerHTML += `<br>Total: ${dealerCards[1].value}`;
    } else {
        dealerCards.forEach(card => {
            console.log(card.value);
            const cardImg = document.createElement("img");
            cardImg.src = `assets/cards/${card.value.toLowerCase()}_of_${card.suit.toLowerCase()}.png`;
            cardImg.style.width = "80px"; 
            cardImg.style.height = "auto";
            dealerHandElement.appendChild(cardImg);
        });
        const dealerSum = calculateSum(dealerCards);
        dealerHandElement.innerHTML += `<br>Total: ${dealerSum}`;
    }
}




// Compare Results
function compareResults() {
    const playerSum = calculateSum(playerCards);
    const dealerSum = calculateSum(dealerCards);

    if (playerSum > 21) {
        console.log('Player busts! Dealer wins.');
        document.getElementById("compareResults").innerText = "Player busts! Dealer wins."
    } else if (dealerSum > 21) {
        console.log('Dealer busts! Player wins.');
        document.getElementById("compareResults").innerText = "Dealer busts! Player wins."
        playerMoney += betAmount * 2;
        document.getElementById('player-money').innerHTML = "Money: $" + playerMoney;
    } else if (playerSum > dealerSum) {
        console.log('Player wins!');
        document.getElementById("compareResults").innerText = "Player wins."
        playerMoney += betAmount * 2;
        document.getElementById('player-money').innerHTML = "Money: $" + playerMoney;
    } else if (playerSum < dealerSum) {
        console.log('Dealer wins!');
        document.getElementById("compareResults").innerText = "Dealer wins!"
    } else {
        console.log('It\'s a tie!');
        document.getElementById("compareResults").innerText = "It's a tie!"
        playerMoney += betAmount;
    }
}

// Dealer Logic
function dealerLogic() {
    let dealerSum = calculateSum(dealerCards);
    while (dealerSum < 17) {
        dealerCards.push(deck.pop());  
        dealerSum = calculateSum(dealerCards); 
    }
}

// Main function to run the game
function playBlackjack() {
    setTimeout(function() {
        deck = createDeck();
    shuffle(deck);

    betAmount = prompt("Enter your bet amount (you have $" + playerMoney + "):");
    betAmount = parseInt(betAmount);

    if (isNaN(betAmount) || betAmount <= 0 || betAmount > playerMoney) {
        alert("Invalid bet amount!");
        playBlackjack();
        return;
    }

    playerCards = dealCards();
    dealerCards = dealCards();

    isGameLive = true; 

    printCards();

    playerMoney -= betAmount;
    document.getElementById('player-money').innerHTML = "Money: $" + playerMoney;
    roundsRemaining--;
    document.getElementById('rounds-remaining').innerHTML = "Rounds Remaining: " + roundsRemaining;
    }, 1000);
}


const submitScore = async () => {
    let name = 'guest'
    name = username.value
    if (name == '' || name == null) {
      name = 'guest'
    }

    try {
      const response = await fetch('https://cis4250w24-05.socs.uoguelph.ca/addScore.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${encodeURIComponent(name)}&score=${encodeURIComponent(playerMoney)}&game=blackjack`
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      confirmationText.style.display = 'block'
    } catch (error) {
      console.error('Error:', error.message)
    }
  }


let playerCards = [];
let dealerCards = [];
let deck = [];
let isGameLive = false;
let playerMoney = 500;
let roundsRemaining = 10;
let betAmount = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playGameBtn').addEventListener('click', playBlackjack);
});
module.exports = {game: playBlackjack, gameRun: playBlackjack(), deck: createDeck(), deal: dealCards()};