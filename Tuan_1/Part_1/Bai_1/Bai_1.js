var Mark_Mass = 78;
console.log("Mass of Mark: ", Mark_Mass);
var Mark_Height = 1.69
console.log("Height of Mark: ", Mark_Height);
var BMIM = Mark_Mass / (Mark_Height * Mark_Height);
var Join_Mass = 92
console.log("Mass of Join: ", Join_Mass);
var Join_Height = 1.95
console.log("Height of Join: ", Join_Height);
var BMIJ = Join_Mass / (Join_Height * Join_Height);
var markHigherBMI = true
if (BMIM > BMIJ) {
    console.log("Mark has a higher BMI than John :", markHigherBMI)
} else {
    markHigherBMI = false;
    console.log("Mark has a higher BMI than John :", markHigherBMI)
}