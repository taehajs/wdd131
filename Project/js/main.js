document.addEventListener("DOMContentLoaded", () => {

 
  const highlightsContainer = document.getElementById("highlight-container");
  if (highlightsContainer) {
    const highlights = [
      "Messi scores an amazing goal!",
      "Ronaldo breaks a new record!",
      "Son leads Tottenham to victory!"
    ];
    highlights.forEach(item => {
      const p = document.createElement("p");
      p.textContent = item;
      highlightsContainer.appendChild(p);
    });
  }

  const playerList = document.getElementById("player-list");
  const playerDetails = document.getElementById("player-details");

  if (playerList && playerDetails) {
    const players = [
      { name: "Lionel Messi", position: "Forward", country: "Argentina" },
      { name: "Cristiano Ronaldo", position: "Forward", country: "Portugal" },
      { name: "Son Heung-min", position: "Forward", country: "South Korea" }
    ];


    players.forEach((player, index) => {
      const li = document.createElement("li");
      li.textContent = player.name;
      li.style.cursor = "pointer"; 
      li.addEventListener("click", () => {
        displayPlayerDetails(player);
      });
      playerList.appendChild(li);
    });

  
    const lastPlayer = localStorage.getItem("lastViewedPlayer");
    if (lastPlayer) {
      displayPlayerDetails(JSON.parse(lastPlayer));
    }

    
    function displayPlayerDetails(player) {
      playerDetails.innerHTML = `
        <h3>${player.name}</h3>
        <p>Position: ${player.position}</p>
        <p>Country: ${player.country}</p>
      `;
      localStorage.setItem("lastViewedPlayer", JSON.stringify(player));
    }
  }


  const quizForm = document.getElementById("quiz-form");
  if (quizForm) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const answer = Number(quizForm.players.value);
      const result = document.getElementById("quiz-result");
      if (answer === 11) {
        result.textContent = "Correct! A team has 11 players.";
      } else {
        result.textContent = "Incorrect. Try again!";
      }
    });
  }

});


function showPlayerDetails(index) {
  const details = document.getElementById("player-details");
  const player = players[index];
  if (details) {
    details.innerHTML = `<h3>${player.name}</h3>
                         <p>Position: ${player.position}</p>
                         <p>Country: ${player.country}</p>`;
    localStorage.setItem("lastViewedPlayer", JSON.stringify(player));
  }
}

function restoreLastViewedPlayer() {
  const last = localStorage.getItem("lastViewedPlayer");
  if (last) {
    const player = JSON.parse(last);
    const details = document.getElementById("player-details");
    if (details) {
      details.innerHTML = `<h3>${player.name}</h3>
                           <p>Position: ${player.position}</p>
                           <p>Country: ${player.country}</p>`;
    }
  }
}


function handleQuiz() {
  const form = document.getElementById("quiz-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const answer = Number(form.players.value);
      const result = document.getElementById("quiz-result");
      if (answer === 11) {
        result.textContent = "Correct! A team has 11 players.";
      } else {
        result.textContent = "Incorrect. Try again!";
      }
    });
  }
}


document.addEventListener("DOMContentLoaded", () => {
  loadHighlights();
  loadPlayers();
  restoreLastViewedPlayer();
  handleQuiz();
});
