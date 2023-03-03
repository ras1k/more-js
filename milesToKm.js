function milesToKm(miles){
    const km = miles * 1.61;
    return km;
}

const miles1 = 420;
const km1 = milesToKm(miles1);
console.log(km1);