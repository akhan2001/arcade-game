/* @jest-environment jsdom */

const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();

// Suppress Fetch-related errors in the leaderboard due to unnecessary JSON parsing for testing purposes
jest.spyOn(console, 'error').mockImplementation(() => null);

// Import the leaderboard module for testing
const leaderboard = require('../js/leaderboard');

// Define the HTML structure for the leaderboard in the test environment
document.body.innerHTML = `
<div class="leaderboard position-relative flex-wrap mt-0">
  <h1>Snake</h1>
  <ol id="snakeLeaderboard">
    <li><mark>-</mark><small>-</small></li>
    <li><mark>-</mark><small>-</small></li>
    <li><mark>-</mark><small>-</small></li>
    <li><mark>-</mark><small>-</small></li>
    <li><mark>-</mark><small>-</small></li>
  </ol>
</div>
`;

// Describe the suite of tests for the leaderboard functionality
describe('Leaderboard Functionality Tests', () => {
  // Before each test, reset mocks and set up the environment
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponseOnce(JSON.stringify([
      { "userID": "Developer 1", "score": "42" },
      { "userID": "Developer 2", "score": "10" },
      { "userID": "Developer 3", "score": "3" },
      { "userID": "Developer 4", "score": "2" },
      { "userID": "Developer 5", "score": "0" }
    ]));
    
    // Simulate the DOMContentLoaded event to trigger the fetchData function
    document.dispatchEvent(new Event("DOMContentLoaded"));
    leaderboard.fetchData('snake');
  });

  // Test to verify that the highest score and corresponding user are correctly displayed
  it('should display the user with the highest score correctly', () => {
    const firstUser = document.querySelector("ol#snakeLeaderboard li:first-child mark");
    expect(firstUser.innerHTML).toBe('Developer 1');
  });

  // Test to verify that the highest score value is correctly displayed
  it('should display the highest score correctly', () => {
    const highestScore = document.querySelector("ol#snakeLeaderboard li:first-child small");
    expect(highestScore.innerHTML).toBe('42');
  });
});
