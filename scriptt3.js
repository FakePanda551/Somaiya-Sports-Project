const teams = [
    { name: "FY_COMPS", image: "images/blank.png" },
    { name: "SY_COMPS", image: "images/sy comps.jpeg" },
    { name: "TY_COMPS", image: "images/ty_comps.jpeg" },
    { name: "LY_COMPS", image: "images/ly comps.jpeg" },
  ];
  
  const teamList = document.querySelector(".cricket-teams");
  
  teams.forEach((team) => {
    const teamItem = document.createElement("div");
    teamItem.className = "cricket-team";
  
    const teamImage = document.createElement("img");
    teamImage.src = team.image;
    teamImage.alt = `${team.name} Logo`;
    teamImage.className = "team-image";
  
    const teamName = document.createElement("h2");
    teamName.className = "team-name";
    teamName.textContent = team.name;
  
    const selectButton = document.createElement("button");
    selectButton.textContent = "Select Team";
    selectButton.className = "select-button";
    selectButton.onclick = () => {
      window.location.href = `teamdetail.html?team=${encodeURIComponent(team.name)}`;
      // Here you can add code to handle the selection further, e.g., redirecting or storing the selection.
    };
  
    teamItem.appendChild(teamImage);
    teamItem.appendChild(teamName);
    teamItem.appendChild(selectButton);
  
    teamList.appendChild(teamItem);
  });
  