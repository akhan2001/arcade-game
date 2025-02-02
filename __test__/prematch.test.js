/* @jest-environment jsdom */

function startGame() {
    document.getElementById("playGameBtn").disabled = true;
}

describe('Start Game Test', () => {
    beforeAll(() => {
        // Set up the document html for the button class
        document.body.innerHTML = `
		<button type="button" id="playGameBtn" class="btn btn-dark btn-lg play-game-btn" >Play Game</button>
        `;
    });

    it('should disable "Play Game" button when game starts', () => {
        // Will click the "playGameBtn" to simulate the game
        const playGameBtn = document.getElementById('playGameBtn');
        playGameBtn.addEventListener('click', startGame);
        playGameBtn.click();

        // Check if the "Play Game" button is disabled when clicking
        expect(playGameBtn.disabled).toBe(true);
    });
});

// TODO:

// describe('Button Click Response Test', () => {
//     beforeAll(() => {
//         // Mock setup for the game environment
//         document.body.innerHTML = `
//         <ul class="list-group list-group-horizontal-sm justify-content-center">
//             <button id="button1" type="button" class="btn btn-success w-25 m-3" style="height:25rem;"></button>
//             <audio id="sound1" src="assets\button-124476.mp3"></audio>
//             <button id="button2" type="button" class="btn btn-danger w-25 m-3"  style="height:25rem;"></button>
//             <audio id="sound2" src="assets\click-124467.mp3"></audio>
//         </ul>
//         <ul class="list-group list-group-horizontal-sm justify-content-center">
//             <button id="button3" type="button" class="btn btn-warning w-25 m-3"  style="height:25rem;"></button>
//             <audio id="sound3" src="assets\interface-124464.mp3"></audio>
//             <button id="button4" type="button" class="btn btn-primary w-25 m-3"  style="height:25rem;"></button>
//             <audio id="sound4" src="assets\shooting-sound-fx-159024.mp3"></audio>
//         </ul>
//         `;

//         // global.playSound = jest.fn();
//         // global.turn = jest.fn();
//         // global.startGame = jest.fn(() => {
//         //     // Game initialization logic
//         //     gameStarted = true; // Set the game as started
//         // });

//         // // Initialize game for testing
//         // startGame();
//     });

//     it('should play the correct sound and call turn function on button click', () => {
//         const playGameBtn = document.getElementById('playGameBtn');
//         // Assuming the button exists, simulate a click
//         playGameBtn.click();

//         // Simulate clicking each game button
//         ['button1', 'button2', 'button3', 'button4'].forEach((buttonId, index) => {
//             const button = document.getElementById(buttonId);
//             button.click();

//             // Check if the correct sound was played
//             expect(playSound).toHaveBeenCalledWith((index + 1).toString());
//         });
//     });
// });
