// wins = 3, draws = 1, losses = 0;
// on default one win equals 3 points, one draw equals 1 point, and one loss equals 0 points
let defaultWin = 3,
    defaultDraw = 1,
    defaultLoss = 0;

function footballPoints(wins, draws, losses) {
    return defaultWin * wins + defaultDraw * draws + defaultLoss * losses;
}

// function footballPoints(wins, draws, losses) {
//     return wins * 3 +  draws;
// }

console.log(footballPoints(3, 4, 2)); // 13
console.log(footballPoints(5, 0, 2)); // 15
console.log(footballPoints(0, 0, 1)); // 0