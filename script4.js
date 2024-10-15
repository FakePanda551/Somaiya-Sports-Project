const players = [
    { name: "Jayesh ", image: "images/blank.png" },
    { name: "Meet Supeda", image: "images/blank.png" },
    { name: "Aditya Sreevastava", image: "images/blank.png" },
    { name: "Sujeet Pal", image: "images/blank.png" },
    { name: "Bhavesh Khadke", image: "images/blank.png" },
    { name: "Nilesh Pradhan", image: "images/blank.png" },
    { name: "Yash Mistry", image: "images/blank.png" },
    { name: "Nayan Dodia", image: "images/blank.png" },
    { name: "Pruthvi Mehta", image: "images/blank.png" },
    { name: "Aaryan Gori", image: "images/blank.png" }
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