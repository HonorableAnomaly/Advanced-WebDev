const vikingsGames = [
  {
    awayTeam: {
      team: "Minnesota",
      points: 14,
      isWinner: true,
    },
    homeTeam: {
      team: "Green Bay",
      points: 7,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Minnesota",
      points: 21,
      isWinner: false,
    },
    homeTeam: {
      team: "Green Bay",
      points: 28,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Minnesota",
      points: 35,
      isWinner: true,
    },
    awayTeam: {
      team: "Green Bay",
      points: 14,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Minnesota",
      points: 7,
      isWinner: false,
    },
    awayTeam: {
      team: "Green Bay",
      points: 10,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Minnesota",
      points: 10,
      isWinner: false,
    },
    homeTeam: {
      team: "Green Bay",
      points: 14,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Minnesota",
      points: 31,
      isWinner: true,
    },
    awayTeam: {
      team: "Green Bay",
      points: 17,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Minnesota",
      points: 24,
      isWinner: true,
    },
    homeTeam: {
      team: "Green Bay",
      points: 3,
      isWinner: false,
    },
  },
];

// First example

// const ulParent = document.createElement("ul");
// for (let game of vikingsGames) {
//   const { homeTeam, awayTeam } = game;
//   const gameLi = document.createElement("li");
//   const { team: hTeam, points: hPoints } = homeTeam;
//   const { team: aTeam, points: aPoints } = awayTeam;
//   const teamNames = `${aTeam} @ ${hTeam}`;
//   let scoreLine;
//   if (aPoints > hPoints) {
//     scoreLine = `<b>${aPoints}</b>-${hPoints}`;
//   } else {
//     scoreLine = `${aPoints}-<b>${hPoints}</b>`;
//   }
//   const vikings = hTeam === "Minnesota" ? homeTeam : awayTeam;
//   gameLi.classList.add(vikings.isWinner ? "win" : "loss");
//   gameLi.innerHTML = `${teamNames} ${scoreLine}`;
//   ulParent.append(gameLi);
// }

// document.body.prepend(ulParent);

//
// Refactored for either team, or any data
const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement("ul");
  for (let game of games) {
    const { homeTeam, awayTeam } = game;
    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreLine(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss");
    ulParent.append(gameLi);
  }
  return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }
  return `${teamNames} ${scoreLine}`;
};

const mvSection = document.querySelector("#mv");
const gbpSection = document.querySelector("#gbp");

const mvChart = makeChart(vikingsGames, "Minnesota");
const gbpChart = makeChart(vikingsGames, "Green Bay");
mvSection.appendChild(mvChart);
gbpSection.appendChild(gbpChart);
