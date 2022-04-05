// With Destructuring

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        }
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      }
    }
  }
}

const { home: { teamName: homeTeamName, colors: homeTeamColors, players: homeTeamPlayers },
  away: { teamName: awayTeamName, colors: awayTeamColors, players: awayTeamPlayers } } = gameObject()

const { home } = gameObject()
const { away } = gameObject()

function getPlayers() {
  let allPlayersArr = { ...homeTeamPlayers, ...awayTeamPlayers }
  // console.log("All Players Array: ", allPlayersArr)
  return allPlayersArr
}

function findPlayersInfo(playerTeam, objKey) {
  let playerArr = [];
  for (let player in playerTeam) {
    playerArr.push(playerTeam[player][objKey])
  }
  return playerArr
}

// console.log(getPlayers())

function numPointsScored(playerName) {
  return getPlayers()[playerName].points
}

function shoeSize(playerName) {
  return getPlayers()[playerName].shoe
}

function teamColors(teamName) {
  return (home.teamName === teamName) ? home.colors : away.colors
}

function teamNames() {
  return [home.teamName, away.teamName]
}

function playerNumbers(teamName) {
  if (home.teamName === teamName) {
    return findPlayersInfo(homeTeamPlayers, 'number')
  } else {
    return findPlayersInfo(awayTeamPlayers, 'number')
  }
}

function playerStats(playerName) {
  for (let player in getPlayers()) {
    if (player === playerName) {
      return getPlayers()[playerName]
    }
  }
}

function bigShoeRebounds() {
  // get All Players... make .shoe in an arr
  let shoeArr = Object.values(getPlayers()).map(el => el.shoe)
  let highestShoe = Math.max(...shoeArr)
  // get player with largest shoe size
  for (let player in getPlayers()) {
    if (highestShoe === getPlayers()[player].shoe) {
      return getPlayers()[player].rebounds
    }
    // console.log(getPlayers()[player].shoe)
  }
}

function mostPointsScored() {
  // get All Players... make .shoe in an arr
  let pointsArr = Object.values(getPlayers()).map(el => el.points)
  let highestPoints = Math.max(...pointsArr)
  // get player with largest shoe size
  for (let player in getPlayers()) {
    if (highestPoints === getPlayers()[player].points) {
      return player
    }
    // console.log(getPlayers()[player].shoe)
  }
}


function findPlayersInfo(playerTeam, objKey) {
  let playerArr = [];
  for (let player in playerTeam) {
    playerArr.push(playerTeam[player][objKey])
  }
  return playerArr
}

function winningTeam() {
  const homePoints = findPlayersInfo(homeTeamPlayers, "points").reduce((prev, curr) => prev + curr)
  const awayPoints = findPlayersInfo(awayTeamPlayers, "points").reduce((prev, curr) => prev + curr)
  return (homePoints > awayPoints ? homeTeamName : awayTeamName)
  // if (Object.values(homeTeamPlayers).map((prev, curr) => prev + curr) >
  // ){

  // }
}


function playerWithLongestName() {
  return Object.keys(getPlayers()).reduce((prev, curr) => curr.length > prev.length ? curr : prev)
}

function doesLongNameStealATon() {
  let stealsArr = (Object.values(getPlayers()).map(el => el.steals))
  let highestSteals = Math.max(...stealsArr)
  // console.log("Steals", playerStats(playerWithLongestName()).steals)
  return highestSteals === playerStats(playerWithLongestName()).steals
  // find an array of every players steals,
  // find max number
  // does longestName Player have that number

}


console.log('numPointsScored Player: ', numPointsScored('DeSagna Diop'))
console.log('shoeSize: ', shoeSize('Brook Lopez'))
console.log('teamColors: ', teamColors('Brooklyn Nets'))
console.log('teamColors: ', teamColors('Charlotte Hornets'))
console.log('teamNames: ', teamNames())
console.log('playerNumbers: ', playerNumbers('Brooklyn Nets'))
console.log('playerNumbers: ', playerNumbers('Charlotte Hornets'))
console.log('playerStats: ', playerStats('Ben Gordon'))
console.log('playerStats: ', playerStats('Reggie Evans'))
console.log('bigShoeRebounds: ', bigShoeRebounds())
console.log('mostPointsScored: ', mostPointsScored())
console.log('winningTeam: ', winningTeam())
console.log('playerWithLongestName: ', playerWithLongestName())
console.log('doesLongNameStealATon: ', doesLongNameStealATon())


