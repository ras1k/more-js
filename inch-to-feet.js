
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const inches1 = 144;
const feet1 = inchToFeet(inches1);

console.log(feet1);


const moreInch = 1440;
const iFeet = inchToFeet(moreInch);
console.log(iFeet);