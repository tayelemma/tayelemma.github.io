"use strict";
/* eslint-disable */ 

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat,concatArrays, findMin,findMax, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr the input array
 * @returns {Array} a copy of an array
 */
function copyArray(arr){
    const clone = [...arr];
    return clone;
}

/**
 * 
 * @param {Array} arr1 firist array input
 * @param {Array} arr2 second array input
 * @returns {Array} the combination of the two arrays. 
 */
function concat(arr1, arr2){
    const newArr = arr1.concat(arr2); 
    return newArr; 
}
/**
 * 
 * @param {Array} arr1 first array input 
 * @param {Array} arr2 second array input
 * @param {Array} arr3 third array input
 * @returns {Array} combined array
 */
function concatArrays(arr1, arr2, arr3){
    let arr4 = [...arr1, ...arr2, ...arr3];
    return arr4;
}


/**
 * 
 * @param  {Array} numbers the array input 
 * @returns {number} the minimum element
 */
function findMin(...numbers){
    return Math.min(...numbers);
}
/**
 * 
 * @param  {Array} number input array 
 * @returns {number} the maximum number
 */
function findMax(...number){
    return Math.max(...number);
}


/**
 * 
 * @param {Object} obj1 first object input
 * @param {Object} obj2 second object input
 * @returns {Object} the combination of the two object
 */
function combineObjs(obj1, obj2){
    let obj3 ={
        ...obj1,...obj2
    }
    return obj3;
}