"use strict";
/* eslint-disable */ 

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


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
 * @param  {Array} numbers the array input 
 * @returns {number} the minimum element
 */
function findMin(...numbers){

    return Math.min(...numbers);

}

/**
 * 
 * @param  {Array} numbers array input 
 * @returns {number} the minimum element 
 */
function findMin1(...numbers) {
    const min = +Infinity; 
    for (const element of numbers){
        if(element < min){
            min = element; 
        }
    }
    return min; 
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