const players = [
  { name: "amreliya moin", image: "images/aidsa.jpeg" },
  { name: "shubham oza", image: "images/aidsb.jpeg" },
  // ...
  { name: "prarambh nandusekar", image: "images/it.jpeg" }
];

const playerList = document.querySelector(".player-list");

players.forEach((player) => {
  const playerItem = document.createElement("div");
  playerItem.className = "player-item";

  const playerImage = document.createElement("img");
  playerImage.src = player.image;
  playerImage.alt = `${player.name} Profile Picture`;

  const playerName = document.createElement("a");
  playerName.textContent = player.name;
  playerName.href = `playerDetail.html?player=${player.name}`;

  playerItem.appendChild(playerImage);
  playerItem.appendChild(playerName);

  playerList.appendChild(playerItem);
});

// Handle click events on player items
playerList.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const playerName = e.target.textContent;
    // Redirect to player detail page with the selected player's name
    window.location.href = `playerDetail.html?player=${playerName}`;
  }
});