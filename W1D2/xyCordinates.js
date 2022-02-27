"use strict";
/*
Question 6. The distance between two points. 
*/
/**
 * 
 * @param {int} xX1 the firsts number. 
 * @param {int} yY1 the second number.
 * @param {int} xX2 the third number.
 * @param {int} yY2 the fourth number.
 * @returns {int} the distance between two points. 
 */
function calcDistance(xX1,yY1,xX2,yY2){
    let number = Math.pow((xX2-xX1),2) + Math.pow((yY2-yY1),2);
    return Math.sqrt(number);
}
console.log("expect 7.07: ", calcDistance(0,0,5,5));