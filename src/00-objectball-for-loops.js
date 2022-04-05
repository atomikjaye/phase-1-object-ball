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

function numPointsScoredClass(playersName) {
  const game = gameObject()
  for (const team in game) {
    for (const player in game[team].players) {
      if (playersName === player) {
        debugger
        return playersName.points
      }
    }
  }
}

let DEBUG = false

function numPointsScored(player) {
  // takes name of player
  const gameObj = gameObject()
  for (let team in gameObj) { // find home or away team
    // debugger
    let teamObj = gameObj[team]
    // if(DEBUG) console.log(teamObj) // Shows home and away
    for (let teamKey in teamObj) {
      // debugger
      let teamInfo = teamObj[teamKey]
      // if(DEBUG) console.log(teamInfo, teamKey) // should print all keys and info
      if (teamKey === 'players') {

        for (let singPlayer in teamInfo) {
          // debugger
          let singPlayerObj = teamInfo[singPlayer]
          if (singPlayer === player) {
            return singPlayerObj.points
          }
        }
      }
    }
  }
  // search for player in object
  // find points
}

function shoeSize(player) {
  // takes name of player
  const gameObj = gameObject()
  for (let team in gameObj) { // find home or away team
    // debugger
    let teamObj = gameObj[team]
    // if(DEBUG) console.log(teamObj) // Shows home and away
    for (let teamKey in teamObj) {
      // debugger
      let teamInfo = teamObj[teamKey]
      // if(DEBUG) console.log(teamInfo, teamKey) // should print all keys and info
      if (teamKey === 'players') {

        for (let singPlayer in teamInfo) {
          // debugger
          let singPlayerObj = teamInfo[singPlayer]
          if (singPlayer === player) {
            return singPlayerObj.shoe
          }
        }
      }
    }
  }
  // search for player in object
  // find points
}
function teamColors(team) {
  const gameObj = gameObject();
  for (let indiTeam in gameObj) {
    let teamObj = gameObj[indiTeam]
    // if(DEBUG) console.log(gameObj[indiTeam]) // shows individual team OBJ
    if (teamObj.teamName === team) {
      return teamObj.colors
    }
  }
}

function teamNames() {
  const gameObj = gameObject()
  const teamArr = []
  for (let team in gameObj) {
    teamArr.push(gameObj[team].teamName)
  }
  return teamArr
}

function playerNumbers(team) {
  if (DEBUG) console.log('******* IN PLAYER NUMBER FUNCTION *******')
  const gameObj = gameObject()
  const playerNumArr = []
  for (let singleTeamKey in gameObj) {
    // if(DEBUG) console.log(gameObj[singleTeamKey]) // indi home and away
    let singleTeamObj = gameObj[singleTeamKey]
    if (singleTeamObj.teamName === team) {
      if (DEBUG) console.log("Inside teamName", singleTeamObj)
      if (DEBUG) console.log("There is a match")
      for (teamInfo in singleTeamObj) {
        let infoObj = singleTeamObj[teamInfo]
        if (teamInfo === 'players') {
          if (DEBUG) console.log(infoObj) // info objects (3)
          for (let player in infoObj) {
            let playerObj = infoObj[player]
            if (DEBUG) console.log(playerObj)
            playerNumArr.push(playerObj.number)
          }

        }
      }
    }
  }

  // for (let singleTeamKey in gameObj) {
  //   if(DEBUG) console.log(gameObj[singleTeamKey]) // indi home and away
  //   if(DEBUG) console.log(singleTeamKey, "WHAT THIS IS") // should show home and away
  //   let singleTeamObj = gameObj[singleTeamKey]
  //   for (let teamKey in singleTeamObj) {
  //     if(DEBUG) console.log(singleTeamObj[teamKey], "names") // 3 team info objects
  //     const infoObj = singleTeamObj[teamKey]
  //     if(DEBUG) console.log(singleTeamObj[teamKey] === team, "Conditional")
  //     if (singleTeamObj[teamKey] === team) {
  //       if (teamKey === 'players') {
  //         if(DEBUG) console.log("Players Obj", infoObj)
  //         for (let singlePlayer in infoObj) {
  //           let singlePlayerObj = infoObj[singlePlayer]
  //           if(DEBUG) console.log(singlePlayerObj) // individual player stats
  //           for (let indiPlayerStatsKey in singlePlayerObj) {
  //             if(DEBUG) console.log(indiPlayerStatsKey) // individual Keys to stats
  //             if(DEBUG) console.log(singlePlayerObj[indiPlayerStatsKey]) // individual Keys Info
  //             const statValue = singlePlayerObj[indiPlayerStatsKey]
  //             if (indiPlayerStatsKey === 'number') {
  //               if(DEBUG) console.log(statValue) // numbers
  //               playerNumArr.push(statValue)
  //               if(DEBUG) console.log(playerNumArr)
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  if (DEBUG) console.log('******* END OF PLAYER NUMBER FUNCTION *******')
  // for (let indiTeam in gameObj) { // should be home and away teams
  //   let teamObj = gameObj[indiTeam]
  //   for (let teamInfo in teamObj) { // should open up 3 properties of team
  //     // debugger
  //     let teamPlayerObj = teamObj.players //
  //     for (let player in teamPlayerObj) {
  //       // debugger
  //       let playerObj = teamPlayerObj[player]
  //       playerNumArr.push(playerObj.number)
  //       if(DEBUG) console.log("in Player Loop", player)
  //     }
  //   }
  // }
  return playerNumArr
} // come back to this

function playerStats(playerName) {
  const gameObj = gameObject() // entire game object
  for (let singleTeamKey in gameObj) {
    const singleTeamObj = gameObj[singleTeamKey]
    // if(DEBUG) console.log(singleTeamObj, "Home or Away") // shows indi home and away blocks
    for (let teamKey in singleTeamObj) {
      let infoObj = singleTeamObj[teamKey]
      // if(DEBUG) console.log(singleTeamObj[teamKey], teamKey) // shows 3 blocks of info
      if (teamKey === 'players') {
        // if(DEBUG) console.log("Info Obj", infoObj) // shows players Obj
        for (let singlePlayerKey in infoObj) {
          // if(DEBUG) console.log(singlePlayerKey) // shows names of indi players
          if (singlePlayerKey === playerName) {
            return infoObj[playerName]
          }
        }
      }
    }
  }

  // for (let singleTeam in gameObj) {
  //   let teamObject = gameObj[singleTeam]
  //   if(DEBUG) console.log(singleTeam) // name of home and away
  //   if(DEBUG) console.log(teamObject)
  //   for (let singleInfo in teamObject) {
  //     const teamInfo = teamObject[singleInfo]
  //     if(DEBUG) console.log(singleInfo)// should show 3 info sections
  //     if (singleInfo === 'players') {
  //       // if(DEBUG) console.log("Hi", teamInfo)
  //       for (let singlePlayer in teamInfo) {
  //         if(DEBUG) console.log(Object.keys(teamInfo))
  //         let singlePlayers = Object.keys(teamInfo)
  //         // if(DEBUG) console.log(teamInfo[singlePlayer])
  //         if(DEBUG) console.log(singlePlayers)
  //         if (singlePlayers === playerName) {
  //           if(DEBUG) console.log("HI", teamInfo[playerName])

  //         }
  //       }

  //     }
  //   }
  // }
}

function bigShoeRebounds() {
  if (DEBUG) console.log('******* IN BIG SHOE REBOUNDS FUNCTION *******')
  const gameObj = gameObject()
  // const playerNumArr = []
  let rebound = 0;
  let biggerShoe = 0
  for (let singleTeamKey in gameObj) {
    if (DEBUG) console.log(gameObj[singleTeamKey]) // indi home and away
    let singleTeamObj = gameObj[singleTeamKey]
    if (DEBUG) console.log("Inside teamName", singleTeamObj)
    for (teamInfo in singleTeamObj) {
      let infoObj = singleTeamObj[teamInfo]
      if (teamInfo === 'players') {
        if (DEBUG) console.log(infoObj) // info objects (3)
        for (let singlePlayerKey in infoObj) {
          if (infoObj[singlePlayerKey].shoe > biggerShoe)
            biggerShoe = infoObj[singlePlayerKey].shoe
          rebound = infoObj[singlePlayerKey].rebounds
        }
      }
    }
  }
  if (DEBUG) console.log('******* END BIG SHOE REBOUNDS FUNCTION *******')
  return rebound
}

function mostPointsScored() {
  // basically same as rebounds, but if points scored is bigger, return player key
  // invoke gameObject
  const gameObj = gameObject()
  let highestPoints = 0;
  let highestPointsPlayer = ""

  for (let singleTeamKey in gameObj) {
    for (teamInfoKey in gameObj[singleTeamKey]) {
      if (teamInfoKey === "players") {
        for (let playerKey in gameObj[singleTeamKey][teamInfoKey]) {
          let currentPoints = gameObj[singleTeamKey][teamInfoKey][playerKey].points
          if (currentPoints > highestPoints) {
            highestPoints = currentPoints
            highestPointsPlayer = playerKey
            console.log(gameObj[singleTeamKey][teamInfoKey][playerKey].points, playerKey)
          }
        }
      }
    }
  }
  return highestPointsPlayer
}

function winningTeam() {
  const gameObj = gameObject()
  let awayPoints = 0
  let homePoints = 0
  let homeTeam = gameObj.home.teamName;
  let awayTeam = gameObj.away.teamName;
  for (let singleTeamKey in gameObj) {
    if (DEBUG) console.log(singleTeamKey)
    if (singleTeamKey === 'away') {
      for (teamInfoKey in gameObj[singleTeamKey]) {
        if (teamInfoKey === "players") {
          for (let playerKey in gameObj[singleTeamKey][teamInfoKey]) {
            awayPoints += gameObj[singleTeamKey][teamInfoKey][playerKey].points
            if (DEBUG) console.log(awayPoints)
          }
        }
      }
    }
    if (singleTeamKey === 'home') {
      for (teamInfoKey in gameObj[singleTeamKey]) {
        if (teamInfoKey === "players") {
          for (let playerKey in gameObj[singleTeamKey][teamInfoKey]) {
            homePoints += gameObj[singleTeamKey][teamInfoKey][playerKey].points
            if (DEBUG) console.log(homePoints)
          }
        }
      }
    }
  }
  if (homePoints > awayPoints) {
    return homeTeam
  } else {
    return awayTeam
  }
}


function playerWithLongestName() {
  const gameObj = gameObject()
  let largestName = "";

  for (let singleTeamKey in gameObj) {
    for (teamInfoKey in gameObj[singleTeamKey]) {
      if (teamInfoKey === "players") {
        for (let playerKey in gameObj[singleTeamKey][teamInfoKey]) {
          let currentLargestName = playerKey.length
          // if (DEBUG) console.log(playerKey.length)
          if (currentLargestName > largestName.length) {
            largestName = playerKey
            // if (DEBUG) console.log(largestName)
            // if (DEBUG) console.log(currentLargestName)
          }
        }
      }
    }
  }
  return largestName
}

function doesLongNameStealATon() {

  // find person with longest name
  // cycle thorough all players steals
  // compare longestName Steals with All Players steals
  const gameObj = gameObject()
  let largestName = playerWithLongestName();
  let longestNameSteals = playerStats(largestName).steals

  if (DEBUG) console.log('******* IN doesLongNameStealATon FUNCTION *******')
  if (DEBUG) console.log('steals', longestNameSteals)
  if (DEBUG) console.log(largestName)
  // const playerNumArr = []
  let highestSteals = 0
  for (let singleTeamKey in gameObj) {
    if (DEBUG) console.log(gameObj[singleTeamKey]) // indi home and away
    let singleTeamObj = gameObj[singleTeamKey]
    if (DEBUG) console.log("Inside teamName", singleTeamObj)
    for (teamInfo in singleTeamObj) {
      let infoObj = singleTeamObj[teamInfo]
      if (teamInfo === 'players') {
        if (DEBUG) console.log(infoObj) // info objects (3)
        for (let singlePlayerKey in infoObj) {
          if (DEBUG) console.log("single Player", infoObj[singlePlayerKey].steals)
          if (infoObj[singlePlayerKey].steals > longestNameSteals) {
            return false
            // console.log('HELLO  ')
          }
        }
        return true
      }
    }
  }
  if (DEBUG) console.log('******* END doesLongNameStealATon FUNCTION *******')





  // for (let singleTeamKey in gameObj) {
  //   for (teamInfoKey in gameObj[singleTeamKey]) {
  //     if (teamInfoKey === "players") {
  //       for (let playerKey in gameObj[singleTeamKey][teamInfoKey]) {
  //         let currentLargestName = playerKey.length
  //         if (DEBUG) console.log(playerKey.length)
  //         if (currentLargestName > largestName.length) {
  //           largestName = playerKey

  //           if (DEBUG) console.log(largestName)
  //           if (DEBUG) console.log(currentLargestName)
  //         }
  //       }
  //     }
  //   }
  // }
  // return largestName
}


// console.log(gameObject())
// console.log("Points Scored: ", numPointsScored('Bismak Biyombo'))
// console.log("Points Scored: ", numPointsScored('Jeff Adrien'))
// console.log("Points Scored: ", numPointsScoredClass('Jeff Adrien'))
// console.log("Shoe Size: ", shoeSize('Brook Lopez'))
// console.log("Shoe Size: ", shoeSize('Bismak Biyombo'))
// console.log("Team Colors: ", teamColors('Brooklyn Nets'))
// console.log("Team Colors: ", teamColors('Charlotte Hornets'))
// console.log("Team names: ", teamNames())
// console.log("Player Numbers: ", playerNumbers('Brooklyn Nets'))
// console.log("Player Numbers: ", playerNumbers('Charlotte Hornets'))
// console.log("Player Stats: ", playerStats('Brendan Haywood'))
// console.log("Player Stats: ", playerStats('Mason Plumlee'))
// console.log("Biggest Rebounds: ", bigShoeRebounds())
// console.log("Most Points Scored (player): ", mostPointsScored())
// console.log("Winning Team: ", winningTeam())
// console.log("Player With Longest Name: ", playerWithLongestName())
console.log("Does LongestName Steal: ", doesLongNameStealATon())