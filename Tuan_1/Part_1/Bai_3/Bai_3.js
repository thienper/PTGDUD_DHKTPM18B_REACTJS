const dolphinsScores = [70, 108, 89];
const koalasScores = [88, 75, 110];

let a = 0,
    b = 0;
for (i = 0; i < dolphinsScores.length; i++) {
    a += dolphinsScores[i];
    b += koalasScores[i];
}
averageDolphins = a / 3;
averageKoalas = b / 3;

console.log(`Dolphins' average: ${averageDolphins}`);
console.log(`Koalas' average: ${averageKoalas}`);
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("Dolphins win the trophy!");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log("Koalas win the trophy!");
} else if (
    averageDolphins === averageKoalas &&
    averageDolphins >= 100 &&
    averageKoalas >= 100
) {
    console.log("It's a draw!");
} else {
    console.log("No team wins the trophy!");
}