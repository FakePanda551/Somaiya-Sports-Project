const players = [
  { name: "amreliya moin", image: "images/aidsa.jpeg", department: "aids", expertise: "rhb" },
  { name: "shubham oza", image: "images/aidsb.jpeg", department: "aids", expertise: "rhb" },
  // ...
  { name: "prarambh nandusekar", image: "images/it.jpeg", department: "it", expertise: "rhb" }
];

const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get("player");

const player = players.find((player) => player.name === playerName);

if (player) {
  document.getElementById("player-image").src = player.image;
  document.getElementById("player-name").textContent = player.name;
  document.getElementById("player-department").textContent = `player-department: ${player.department}`;
  document.getElementById("player-expertise").textContent = `player-expertise: ${player.expertise}`;
  // Update player stats here
  document.getElementById("player-runs").textContent = "Runs: 100"; // Replace with actual runs value
  document.getElementById("player-wickets").textContent = "Wickets: 50"; // Replace with actual wickets value
} else {
  console.error(`Player not found: ${playerName}`);
}