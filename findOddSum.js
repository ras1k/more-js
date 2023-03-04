function getSum(numbers){
    let sum = 0;
    for (let i =0; i<numbers.length; i++){
        
        const index = i;
        const element = numbers[index];
        sum += element;
        // console.log(index,element, sum);
    }
    return sum;
    
}

function getOddNumbers(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[i];
        if (element%2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12,23,34,45,56,67,78,89];
const oddNumbers = getOddNumbers(myNumbers);
getSum(myNumbers);
console.log (oddNumbers);