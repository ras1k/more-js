function leapYear(year){
    const remainder = year%4;
    if (remainder === 0){
        // console.log('Leap Year', year);
        return true;
    }
    else {
        // console.log('Not Leap year', year);
        return false;
    }
}
const isLeapYear = leapYear(2024);
console.log(isLeapYear);