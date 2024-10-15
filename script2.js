const players = [
  { name: "Amreliya Moin", image: "images/moin.jpeg", department: "aids", expertise: "right hand batsman", runs: 50, wickets: 0 },
  { name: "Aayush Bharda", image: "images/aayush.jpeg", department: "aids", expertise: "right hand bowling allrounder", runs: 27, wickets: 9 },
  { name: "Vedant Ambavne", image: "images/vedant.jpeg", department: "aids", expertise: "left hand allrounder", runs: 10, wickets: 8 },
  { name: "Prathamesh Chauhan", image: "images/blank.png", department: "aids", expertise: "right hand batsman", runs: 20, wickets: 1 },
  { name: "Hamza Kapasi", image: "images/hamza.jpeg", department: "aids", expertise: "right hand batsman", runs: 11, wickets: 0 },
  { name: "Krish Darji", image: "images/krish.jpeg", department: "aids", expertise: "right hand allrounder", runs: 30, wickets: 0 },
  { name: "Rohan Chiplunkar", image: "images/rohan.jpeg", department: "aids", expertise: "right hand allrounder", runs: 20, wickets: 5 },
  { name: "Vikas Chawla", image: "images/vikass.jpeg", department: "aids", expertise: "right hand bowler", runs: 0, wickets: 3 },
  { name: "Devansh Jadhav", image: "images/blank.png", department: "aids", expertise: "left hand bowler", runs: 0, wickets: 8 },
  { name: "Soham Amrule", image: "images/soham.jpeg", department: "it", expertise: "right hand batsman", runs: 100, wickets: 3 },
  { name: "Prarambh Nandusekar", image: "images/blank.png", department: "it", expertise: "right hand batsman", runs: 40, wickets: 3 },
  { name: "Siddesh Pandey", image: "images/blank.png", department: "it", expertise: "left hand bowler", runs: 10, wickets: 10 },
  { name: "Harsh Parmar", image: "images/blank.png", department: "it", expertise: "right hand bowler", runs: 10, wickets: 6 },
  { name: "Harsh Mehta", image: "images/blank.png", department: "it", expertise: "right hand allrounder", runs: 30, wickets: 3 },
  { name: "Viral Makwana", image: "images/blank.png", department: "it", expertise: "right hand bowler", runs: 0, wickets: 3 },
  { name: "Ojas Narsana", image: "images/blank.png", department: "it", expertise: "right hand batsman", runs: 70, wickets: 3 },
  { name: "Vikas Mishra", image: "images/blank.png", department: "it", expertise: "right hand bowler", runs: 30, wickets: 20 },
  { name: "Nisarg Rathod", image: "images/blank.png", department: "it", expertise: "left hand bowler", runs: 40, wickets: 41 },
  { name: "Keyush Thumar", image: "images/blank.png", department: "it", expertise: "right hand batsman", runs: 23, wickets: 0 },
  { name: "Jayesh", image: "images/blank.png", department: "comps", expertise: "right hand allrounder", runs: 23, wickets: 3 },
  { name: "Meet Supeda", image: "images/blank.png", department: "comps", expertise: "", runs: 100, wickets: 3 },
  { name: "Aditya Sreevastava", image: "images/blank.png", department: "comps", expertise: "right hand batsman", runs: 10, wickets: 0 },
  { name: "Meet Supeda", image: "images/blank.png", department: "comps", expertise: "right hand batsman", runs: 11, wickets: 0 },
  { name: "Sujeet Pal", image: "images/blank.png", department: "comps", expertise: "right hand bowler", runs: 0, wickets: 3 },
  { name: "Bhavesh Khadke", image: "images/blank.png", department: "comps", expertise: "right hand bowler", runs: 15, wickets: 1 }, // Added runs value
  { name: "Nilesh Pradhan", image: "images/blank.png", department: "comps", expertise: "right hand allrounder", runs: 14, wickets: 3 },
  { name: "Yash Mistry", image: "images/blank.png", department: "comps", expertise: "right hand bowler", runs: 1, wickets: 7 },
  { name: "Nayan Dodia", image: "images/blank.png", department: "comps", expertise: "left hand batsman", runs: 17, wickets: 0 },
  { name: "Pruthvi Mehta", image: "images/blank.png", department: "comps", expertise: "right hand batsman", runs: 6, wickets: 0 },
  { name: "Aaryan Gori", image: "images/blank.png", department: "comps", expertise: "right hand allrounder", runs: 10, wickets: 1 },
  { name: "Mihir Bhosle", image: "images/blank.png", department: "extc", expertise: "right hand allrounder", runs: 30, wickets: 4 },
  { name: "Swaraj Chede", image: "images/blank.png", department: "extc", expertise: "right hand batsman", runs: 25, wickets: 0 },
  { name: "Aditya Kesarkar", image: "images/blank.png", department: "extc", expertise: "right hand bowler", runs: 0, wickets: 5 },
  { name: "Varad Shinde", image: "images/blank.png", department: "extc", expertise: "right hand batsman", runs: 30, wickets: 0 },
  { name: "Prathamesh Thaduru", image: "images/blank.png", department: "extc", expertise: "right hand bowler", runs: 10, wickets: 20 },
  { name: "Vraj Shah", image: "images/blank.png", department: "extc", expertise: "right hand batting allrounder", runs: 50, wickets: 3 },
  { name: "Sai Raj", image: "images/blank.png", department: "extc", expertise: "right hand fielder", runs: 0, wickets: 0 },
  { name: "Aaryan Pandey", image: "images/blank.png", department: "extc", expertise: "right hand allrounder", runs: 10, wickets: 4 },
  { name: "Varadraj Bajare", image: "images/blank.png", department: "extc", expertise: "right hand fielder", runs: 10, wickets: 0 },
  { name: "Ansh Taralekar", image: "images/blank.png", department: "extc", expertise: "right hand batsman", runs: 7, wickets: 0 },
];

const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get("player");

const player = players.find((player) => player.name === playerName);

if (player) {
  document.getElementById("player-image").src = player.image;
  document.getElementById("player-name").textContent = player.name;
  document.getElementById("player-department").textContent = `Player Department: ${player.department}`;
  document.getElementById("player-expertise").textContent = `Player Expertise: ${player.expertise}`;
  document.getElementById("player-runs").textContent = `Player Runs: ${player.runs}`;
  document.getElementById("player-wickets").textContent = `Player Wickets: ${player.wickets}`;
} else {
  console.error(`Player not found: ${playerName}`);
}
