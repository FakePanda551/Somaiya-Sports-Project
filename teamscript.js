const teams = [
    { name: "FY_AI-DS", image: "images/aidsa.jpeg", gamesPlayed: 9, gamesWon: 7, gamesLost: 3 },
    { name: "SY_AI-DS", image: "images/aidsb.jpeg", gamesPlayed: 9, gamesWon: 8, gamesLost: 4 },
    { name: "TY_AI-DS", image: "images/blank.png", gamesPlayed: 9, gamesWon: 5, gamesLost: 10 },
    { name: "LY_AI-DS", image: "images/ly aids.jpeg", gamesPlayed: 9, gamesWon: 6, gamesLost: 2 },
    { name: "FY_IT", image: "images/it.jpeg", gamesPlayed: 9, gamesWon: 5, gamesLost: 4 },
    { name: "SY_IT", image: "images/blank.png", gamesPlayed: 9, gamesWon: 4, gamesLost: 5 },
    { name: "TY_IT", image: "images/blank.png", gamesPlayed: 9, gamesWon: 3, gamesLost: 6 },
    { name: "LY_IT", image: "images/blank.png", gamesPlayed: 9, gamesWon: 2, gamesLost: 7 },
    { name: "FY_COMPS", image: "images/blank.png.jpeg", gamesPlayed: 9, gamesWon: 3, gamesLost: 6 },
    { name: "SY_COMPS", image: "images/sy comps.jpeg", gamesPlayed: 9, gamesWon: 1, gamesLost: 9 },
    { name: "TY_COMPS", image: "images/ty comps.jpeg", gamesPlayed: 9, gamesWon: 9, gamesLost: 0},
    { name: "LY_COMPS", image: "images/ly comps.jpeg", gamesPlayed: 9, gamesWon: 3, gamesLost: 6 },
    { name: "FY_EXTC", image: "images/fyextc.jpeg", gamesPlayed: 9, gamesWon: 7, gamesLost: 62},
    { name: "SY_EXTC", image: "images/sy extc .jpeg", gamesPlayed: 9, gamesWon: 6, gamesLost: 3},
    { name: "TY_EXTC", image: "images/ty extc.jpeg", gamesPlayed: 9, gamesWon: 4, gamesLost: 5 },
    { name: "LY_EXTC", image: "images/ly extc.jpeg", gamesPlayed: 9, gamesWon: 4, gamesLost: 5},

  ];
  
  const urlParams = new URLSearchParams(window.location.search);
  const teamName = urlParams.get("team");
  
  const team = teams.find((team) => team.name === teamName);
  
  if (team) {
    document.getElementById("team-image").src = team.image;
    document.getElementById("team-name").textContent = team.name;
    document.getElementById("team-games-played").textContent = `Games Played: ${team.gamesPlayed}`;
    document.getElementById("team-games-won").textContent = `Games Won: ${team.gamesWon}`;
    document.getElementById("team-games-lost").textContent = `Games Lost: ${team.gamesLost}`;
  } else {
    console.error(`Team not found: ${teamName}`);
  }
  