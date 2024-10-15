const players = [
  { name: "Amreliya Moin", image: "images/moin.jpeg" },
  { name: "Aayush Bharda", image: "images/aayush.jpeg" },
  { name: "Vedant Ambavne", image: "images/vedant.jpeg" },
  { name: "Prathamesh Chauhan", image: "images/prathamesh.jpeg" },
  { name: "Hamza Kapasi", image: "images/hamza.jpeg" },
  { name: "Krish Darji", image: "images/krish.jpeg" },
  { name: "Rohan Chiplunkar", image: "images/rohan.jpeg" },
  { name: "Vikas Chawla", image: "images/vikass.jpeg" },
  { name: "Devansh Jadhav", image: "images/devansh.jpeg" },
  { name: "Soham Amrule", image: "images/soham.jpeg" }
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
