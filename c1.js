const massM = 50;
const heightM = 2;
const massJ = 20;
const heightJ = 1.5;

function bmi(mass, height) {
    return mass / (height * height);
}

var markBMI = bmi(massM, heightM);
var johnBMI = bmi(massJ, heightJ);

var markHasHigherBMI = markBMI > johnBMI;
console.log("Mark's BMI: ", markBMI, " John's BMI: ", johnBMI);
console.log("Does Mark have the higher BMI? ", markHasHigherBMI);
