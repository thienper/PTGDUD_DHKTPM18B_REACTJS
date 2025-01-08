var Mark_Mass = prompt("Mass of Mark:");
var Mark_Height = prompt("Height of Mark:");
var BMIM = Mark_Mass / (Mark_Height * Mark_Height);
var Join_Mass = prompt("Mass of Join:");
var Join_Height = prompt("Height of Join:");
var BMIJ = Join_Mass / (Join_Height * Join_Height);
var markHigherBMI = true
if (BMIM > BMIJ) {
    console.log(markHigherBMI)
} else {
    markHigherBMI = false;
    console.log(markHigherBMI)
}