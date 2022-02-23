"use strict"
/*
Question 5. sumDigits and multDigits
*/
function sumDigits(number){
    let sum = 0;
while(number > 0){
    sum += number % 10;
    number = Math.floor(number/10);
}
    return sum;
}

function multDigits(number){
    let product = 1;
    while(number > 1){
        product = product * number % 10;
        number = Math.floor(number/10);
    }
        return product;
}
console.log(sumDigits(1234));
console.log(multDigits(1234))