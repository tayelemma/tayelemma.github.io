"use strict"
/*
Question 5. sumDigits and multDigits
*/
/**
 * 
 * @param {int} number is first int.  
 * @returns {int} the sum of all the number.
 * 
 */
function sumDigits(number){
    let sum = 0;
while(number > 0){
    sum += number % 10;
    number = Math.floor(number/10);
}
    return sum;
}
/**
 * 
 * @param {int} num is the first number.  
 * @returns {int} product. 
 */
function multDigits(num){
    let product = 1;
    while(num > 1){
        product = product * num % 10;
        num = Math.floor(num/10);
    }
        return product;
}
console.log(sumDigits(1234));
console.log(multDigits(1234));