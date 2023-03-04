
// let sum = 0;
// for (let i=1; i<=7;i++){
//     console.log(i);
//     sum += i;

// }
// console.log(sum);

function sumOfnumbers(numbers) {
    let sum = 1;
    for (let i = 1; i <= numbers; i++) {
        sum *= i;
        console.log(i, sum);
    }
    return sum;
}

const sum = sumOfnumbers(4);
console.log(sum);