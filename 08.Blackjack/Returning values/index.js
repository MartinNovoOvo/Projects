let player1Time = 102
let player2Time = 107

function getFastestTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestTime()
console.log(fastestRace)

console.log("---------------")

function getTotalTime() {
    return player1Time + player2Time
}
let fastestTime = getTotalTime()

console.log(fastestTime)

