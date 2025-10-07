document.addEventListener("DOMContentLoaded", () => {

 
  const highlightsContainer = document.getElementById("highlight-container");
  if (highlightsContainer) {
    const highlights = [
      { 
        name: "Lionel Messi Highlight",
        video: "https://www.youtube.com/embed/nA8wHQvHPJU"
      },
      { 
        name: "Cristiano Ronaldo Highlight",
        video: "https://www.youtube.com/embed/mmeLCAP74KA"
      },
      { 
        name: "Son Heung-min Highlight",
        video: "https://www.youtube.com/embed/JA1E0631-lc"
      }
    ];

    highlights.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("video-card");
      card.innerHTML = `
        <h3 style="margin-bottom:10px;">${item.name}</h3>
        <iframe 
          src="${item.video}" 
          width="560" height="315" 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      `;
      highlightsContainer.appendChild(card);
    });
  }

  
  const playerList = document.getElementById("player-list");
  const playerDetails = document.getElementById("player-details");

  if (playerList && playerDetails) {
    const players = [
      { 
        name: "Lionel Messi", 
        position: "Forward", 
        country: "Argentina",
        image: "images/messi.jpg" 
      },
      { 
        name: "Cristiano Ronaldo", 
        position: "Forward", 
        country: "Portugal",
        image: "images/ronaldo.jpg" 
      },
      { 
        name: "Son Heung-min", 
        position: "Forward", 
        country: "South Korea",
        image: "images/son.jpg" 
      }
    ];

    players.forEach((player) => {
      const btn = document.createElement("button");
      btn.textContent = player.name;
      btn.classList.add("player-btn");
      btn.addEventListener("click", () => displayPlayerDetails(player));
      playerList.appendChild(btn);
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
        <img src="${player.image}" alt="${player.name}" style="max-width:200px; display:block; margin:10px auto; border-radius:8px;">
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
