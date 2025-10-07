document.addEventListener("DOMContentLoaded", () => {

  const highlightsContainer = document.getElementById("highlight-container");
  if (highlightsContainer) {
    
    const highlights = [
      "https://youtu.be/nA8wHQvHPJU?si=nxGF4-coQJMY2KCg", 
      "https://youtu.be/mmeLCAP74KA?si=9SG1HdBRlTmRNaDe", 
      "https://youtu.be/JA1E0631-lc?si=8LI4_ALq0UGELo5T"  
    ];

    highlights.forEach(link => {
      const iframe = document.createElement("iframe");
      iframe.src = link;
      iframe.width = "560";
      iframe.height = "315";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.style.marginBottom = "10px";
      highlightsContainer.appendChild(iframe);
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
      const li = document.createElement("li");
      li.textContent = player.name;
      li.style.cursor = "pointer";
      li.addEventListener("click", () => displayPlayerDetails(player));
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
        <img src="${player.image}" alt="${player.name}" style="max-width:200px; display:block; margin:10px auto; border-radius:8px;">
        <!-- <-- 여기에 선수 사진 표시됨 -->
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
