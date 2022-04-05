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


function numPointsScored(player) {
  // takes name of player
  const gameObj = gameObject()
  for (let team in gameObj) { // find home or away team
    // debugger
    let teamObj = gameObj[team]
    // console.log(teamObj) // Shows home and away
    for (let teamKey in teamObj) {
      // debugger
      let teamInfo = teamObj[teamKey]
      // console.log(teamInfo, teamKey) // should print all keys and info
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
    // console.log(teamObj) // Shows home and away
    for (let teamKey in teamObj) {
      // debugger
      let teamInfo = teamObj[teamKey]
      // console.log(teamInfo, teamKey) // should print all keys and info
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
    // console.log(gameObj[indiTeam]) // shows individual team OBJ
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
  console.log('******* IN PLAYER NUMBER FUNCTION *******')
  const gameObj = gameObject()
  const playerNumArr = []
  for (let singleTeamKey in gameObj) {
    // console.log(gameObj[singleTeamKey]) // indi home and away
    let singleTeamObj = gameObj[singleTeamKey]
    if (singleTeamObj.teamName === team) {
      console.log("Inside teamName", singleTeamObj)
      console.log("There is a match")
      for (teamInfo in singleTeamObj) {
        let infoObj = singleTeamObj[teamInfo]
        if (teamInfo === 'players') {
          console.log(infoObj) // info objects (3)
          for (let player in infoObj) {
            let playerObj = infoObj[player]
            console.log(playerObj)
            playerNumArr.push(playerObj.number)
          }

        }
      }
    }
  }

  // for (let singleTeamKey in gameObj) {
  //   console.log(gameObj[singleTeamKey]) // indi home and away
  //   console.log(singleTeamKey, "WHAT THIS IS") // should show home and away
  //   let singleTeamObj = gameObj[singleTeamKey]
  //   for (let teamKey in singleTeamObj) {
  //     console.log(singleTeamObj[teamKey], "names") // 3 team info objects
  //     const infoObj = singleTeamObj[teamKey]
  //     console.log(singleTeamObj[teamKey] === team, "Conditional")
  //     if (singleTeamObj[teamKey] === team) {
  //       if (teamKey === 'players') {
  //         console.log("Players Obj", infoObj)
  //         for (let singlePlayer in infoObj) {
  //           let singlePlayerObj = infoObj[singlePlayer]
  //           console.log(singlePlayerObj) // individual player stats
  //           for (let indiPlayerStatsKey in singlePlayerObj) {
  //             console.log(indiPlayerStatsKey) // individual Keys to stats
  //             console.log(singlePlayerObj[indiPlayerStatsKey]) // individual Keys Info
  //             const statValue = singlePlayerObj[indiPlayerStatsKey]
  //             if (indiPlayerStatsKey === 'number') {
  //               console.log(statValue) // numbers
  //               playerNumArr.push(statValue)
  //               console.log(playerNumArr)
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  console.log('******* END OF PLAYER NUMBER FUNCTION *******')
  // for (let indiTeam in gameObj) { // should be home and away teams
  //   let teamObj = gameObj[indiTeam]
  //   for (let teamInfo in teamObj) { // should open up 3 properties of team
  //     // debugger
  //     let teamPlayerObj = teamObj.players //
  //     for (let player in teamPlayerObj) {
  //       // debugger
  //       let playerObj = teamPlayerObj[player]
  //       playerNumArr.push(playerObj.number)
  //       console.log("in Player Loop", player)
  //     }
  //   }
  // }
  return playerNumArr
} // come back to this

function playerStats(playerName) {
  const gameObj = gameObject() // entire game object
  for (let singleTeamKey in gameObj) {
    const singleTeamObj = gameObj[singleTeamKey]
    // console.log(singleTeamObj, "Home or Away") // shows indi home and away blocks
    for (let teamKey in singleTeamObj) {
      let infoObj = singleTeamObj[teamKey]
      // console.log(singleTeamObj[teamKey], teamKey) // shows 3 blocks of info
      if (teamKey === 'players') {
        // console.log("Info Obj", infoObj) // shows players Obj
        for (let singlePlayerKey in infoObj) {
          // console.log(singlePlayerKey) // shows names of indi players
          if (singlePlayerKey === playerName) {
            return infoObj[playerName]
          }
        }
      }
    }
  }

  // for (let singleTeam in gameObj) {
  //   let teamObject = gameObj[singleTeam]
  //   console.log(singleTeam) // name of home and away
  //   console.log(teamObject)
  //   for (let singleInfo in teamObject) {
  //     const teamInfo = teamObject[singleInfo]
  //     console.log(singleInfo)// should show 3 info sections
  //     if (singleInfo === 'players') {
  //       // console.log("Hi", teamInfo)
  //       for (let singlePlayer in teamInfo) {
  //         console.log(Object.keys(teamInfo))
  //         let singlePlayers = Object.keys(teamInfo)
  //         // console.log(teamInfo[singlePlayer])
  //         console.log(singlePlayers)
  //         if (singlePlayers === playerName) {
  //           console.log("HI", teamInfo[playerName])

  //         }
  //       }

  //     }
  //   }
  // }
}

function bigShoeRebounds() {
  console.log('******* IN BIG SHOE REBOUNDS FUNCTION *******')
  const gameObj = gameObject()
  const playerNumArr = []
  let biggerShoe = 0
  for (let singleTeamKey in gameObj) {
    // console.log(gameObj[singleTeamKey]) // indi home and away
    let singleTeamObj = gameObj[singleTeamKey]
    console.log("Inside teamName", singleTeamObj)
    console.log("There is a match")
    for (teamInfo in singleTeamObj) {
      let infoObj = singleTeamObj[teamInfo]
      if (teamInfo === 'players') {
        console.log(infoObj) // info objects (3)
        for (let singlePlayerKey in infoObj) {
          if (infoObj[singlePlayerKey].shoe > biggerShoe)
            biggerShoe = infoObj[singlePlayerKey].shoe
          console.log("Bigger Shoe", biggerShoe) // shows names of indi players
          console.log("Player", infoObj[singlePlayerKey].rebounds) // shows names of indi players

        }
      }
    }
    console.log()

  }
  console.log('******* END BIG SHOE REBOUNDS FUNCTION *******')
}


// console.log(gameObject())
// console.log("Points Scored: ", numPointsScored('Bismak Biyombo'))
// console.log("Points Scored: ", numPointsScoredClass('Jeff Adrien'))
// console.log("Shoe Size: ", shoeSize('Bismak Biyombo'))
// console.log("Team Colors: ", teamColors('Brooklyn Nets'))
// console.log("Team Colors: ", teamColors('Charlotte Hornets'))
// console.log("Team names: ", teamNames())
// console.log("Player Numbers:", playerNumbers('Brooklyn Nets'))
// console.log("Player Stats:", playerStats('Brendan Haywood'))
console.log("Biggest Rebounds", bigShoeRebounds())