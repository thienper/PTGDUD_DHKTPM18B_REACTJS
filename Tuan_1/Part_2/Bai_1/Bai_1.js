const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins!');
    }
};

const dolphinsData1 = [44, 23, 71];
const koalasData1 = [65, 54, 49];
console.log("Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49")
const avgDolphins1 = calcAverage(...dolphinsData1);
const avgKoalas1 = calcAverage(...koalasData1);
checkWinner(avgDolphins1, avgKoalas1);

const dolphinsData2 = [85, 54, 41];
const koalasData2 = [23, 34, 27];
console.log("Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27")
const avgDolphins2 = calcAverage(...dolphinsData2);
const avgKoalas2 = calcAverage(...koalasData2);
checkWinner(avgDolphins2, avgKoalas2);