function leader(){
  const setScore = (leaderboardId, highScores) => {
    const leaderboard = document.getElementById(leaderboardId)
    const names = leaderboard.getElementsByTagName('mark')
    const scores = leaderboard.getElementsByTagName('small')

    for (let i = 0; i < 5; i++) {
      names[i].innerHTML = highScores[i].userID
      scores[i].innerHTML = highScores[i].score
    }
  }

  const fetchData = async (game) => {
    try {
      const response = await fetch(`https://cis4250w24-05.socs.uoguelph.ca/getscores?game=${game}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
  
      const sortedData = data.sort((a, b) => parseInt(b.score) - parseInt(a.score));
      setScore(`${game}Leaderboard`, sortedData);
  
      console.log(sortedData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  fetchData('snake')
  fetchData('hockey')
  fetchData('match')
  fetchData('farkle')
  fetchData('blackjack')
  // Fetch data from the server endpoint

  //For Testing Purposes
  leader.setScore = setScore;
  leader.fetchData = fetchData;
}

document.addEventListener('DOMContentLoaded', leader () )

module.exports = leader;
