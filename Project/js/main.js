document.addEventListener("DOMContentLoaded", () => {


  const highlightsContainer = document.getElementById("highlight-container");
  if (highlightsContainer) {
    const highlights = [
      { type: "video", src: "https://www.youtube.com/embed/nA8wHQvHPJU" },
      { type: "video", src: "https://www.youtube.com/embed/mmeLCAP74KA" },
      { type: "video", src: "https://www.youtube.com/embed/JA1E0631-lc" }
    ];

    highlights.forEach(item => {
      if (item.type === "video") {
        const iframe = document.createElement("iframe");
        iframe.src = item.src;
        iframe.width = "560";
        iframe.height = "315";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.style.marginBottom = "10px";
        highlightsContainer.appendChild(iframe);
      }
    });
  }

 
  const playerList = document.getElementById("player-list");
  const playerDetails = document.getElementById("player-details");

  if (playerList && playerDetails) {
    const players = [
      { name: "Lionel Messi", position: "Forward", country: "Argentina", image: "images/messi.jpg" },
      { name: "Cristiano Ronaldo", position: "Forward", country: "Portugal", image: "images/ronaldo.jpg" },
      { name: "Son Heung-min", position: "Forward", country: "South Korea", image: "images/son.jpg" }
    ];

   
    playerList.innerHTML = "";

    players.forEach(player => {
      const btn = document.createElement("button");
      btn.textContent = player.name;
      btn.style.margin = "5px";
      btn.style.padding = "5px 10px";
      btn.style.border = "2px solid #003366";
      btn.style.borderRadius = "5px";
      btn.style.backgroundColor = "#ffcc00";
      btn.style.cursor = "pointer";
      btn.addEventListener("click", () => displayPlayerDetails(player));
      playerList.appendChild(btn);
    });

 
    const lastPlayer = localStorage.getItem("lastViewedPlayer");
    if (lastPlayer) displayPlayerDetails(JSON.parse(lastPlayer));

 
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
      result.textContent = (answer === 11) 
        ? "Correct! A team has 11 players." 
        : "Incorrect. Try again!";
    });
  }

});
