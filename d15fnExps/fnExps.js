"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
// module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} num any input number.
 * @returns {number} create double the number. 
 */
function double(num){
    return 2 * num;
  
}


/**
 * 
 * @param {number} num any inpu number.
 * @returns {number} create the number multiply by a 100. 
 */
 function times100(num){
     return 100 * num; 
 }


/**
 * 
 * @param {Array} arr input array.
 * @param {Function} fun is a helper function. 
 * @returns {Array} create a new array that are function mapped to it. 
 */
function myMap(arr, fun){
    let newArray = [];
    for (let values of arr){
        let newvalue = fun(values);
        newArray.push(newvalue);
    }
    return newArray;
}
