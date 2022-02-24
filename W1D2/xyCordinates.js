"use strict";
/*
Question 6. The distance between two points. 
*/
/**
 * 
 * @param {int} x_1 the firsts number. 
 * @param {int} y_1 the second number.
 * @param {int} x_2 the third number.
 * @param {int} y_2 the fourth number.
 * @returns {int} the distance between two points. 
 */
function calcDistance(x_1,y_1,x_2,y_2){
    let number = (Math.pow(x_2-x_1),2)+ (Math.pow(y_2-y_1),2);
    return Math.sqrt(number);
}
console.log("expect 7.07: ", calcDistance(0,0,5,5));