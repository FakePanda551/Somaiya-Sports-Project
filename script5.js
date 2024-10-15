const players = [
    { name: "Mihir Bhosle", image: "images/blank.png" },
    { name: "Swaraj Chede", image: "images/blank.png" },
    { name: "Aditya Kesarkar", image: "images/blank.png" },
    { name: "Varad Shinde", image: "images/blank.png" },
    { name: "Prathamesh Thaduru", image: "images/blank.png" },
    { name: "Ansh Taralekar", image: "images/blank.png" },
    { name: "Varadraj Bajare", image: "images/blank.png" },
    { name: "Aaryan Pandey", image: "images/blank.png" },
    { name: "Vraj Shah", image: "images/blank.png" },
    { name: "Sai Raj", image: "images/blank.png" }
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