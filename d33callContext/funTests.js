"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
 module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Array} arr input arr.
 * @param {function} func to modifiy.
 * @returns {Array} new array.
 */
function myMap(arr, func) {
let result =[];
for(let i=0; i< arr.length; i++){
    let newArr = func(arr[i],i);
    result.push(newArr);
}
return result;

}

/**
 * 
 * @param {Array} arr input array.
 * @param {function} func to filter the elements
 * @returns {Array} array of elemets.
 */
function myFilter(arr, func) {
    let newArr = [];
    for(let i=0; i< arr.length; i++){
        if(func(arr[i],i)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/**
 * 
 * @param {array} arr input array.
 * @param {function} func  to reduce the arr.
 * @param {Number} initialValue input value.
 * @returns {number} reduded num.
 */
function myReduce(arr, func, initialValue) {
    let num = initialValue; 
    for(let i = 0; i<arr.length; i++){
         num = func(num, arr[i],i );         
    }

    return num ;
    }