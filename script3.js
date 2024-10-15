const players = [
    { name: "Prarambh Nandusekar", image: "images/blank.png" },
    { name: "Siddesh Pandey", image: "images/blank.png" },
    { name: "Harsh Parmar", image: "images/blank.png" },
    { name: "Harsh Mehta", image: "images/blank.png" },
    { name: "Akshat Mehta", image: "images/blank.png" },
    { name: "Viral Makwana", image: "images/blank.png" },
    { name: "Ojas Narsana", image: "images/blank.png" },
    { name: "Nisarg Rathod", image: "images/blank.png" },
    { name: "Vikas Mishra", image: "images/blank.png" },
    { name: "Keyush Thumar", image: "images/blank.png" }
  ];
  
  const playerList = document.querySelector(".player-list");
  
  players.forEach((player) => {
    const playerItem = document.createElement("div");
    playerItem.className = "player-item";
  
    const playerImage = document.createElement("img");
    playerImage.src = player.image;
    playerImage.alt = `${player.name} Profile Picture`;
    playerImage.className = "player-image";
  
    const playerName = document.createElement("div");
    playerName.className = "player-name";
    playerName.textContent = player.name;
  
    const playerPopup = document.createElement("div");
    playerPopup.className = "player-popup";
  
    const playerLink = document.createElement("a");
    playerLink.textContent = "View Profile";
    playerLink.href = `playerDetail.html?player=${player.name}`;
  
    playerPopup.appendChild(playerLink);
  
    playerItem.appendChild(playerImage);
    playerItem.appendChild(playerName);
    playerItem.appendChild(playerPopup);
  
    playerList.appendChild(playerItem);
  });