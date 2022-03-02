"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, truncate, camelize, checkSpam, extractCurrencyValue }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {String} str the input string  
 * @returns {String} return the string with the first letter capitalized 
 */
function ucFirst(str) {
    let firstword = str.slice(0, 1);
    firstword = firstword.toUpperCase();
    return firstword + str.slice(1);
}

/**
 * 
 * @param {String} str the input string  
 * @returns {boolean} return true if the value included in the string.
 */
function checkSpam(str) {

    return (str.includes("ViAgRA") || str.includes("xxxxx"));
}


/**
 * 
 * @param {String} str the input string 
 * @param {number} maxlength of the string 
 * @returns {String} the truncated string 
 */
function truncate(str, maxlength) {
    const ending = "…"
    if (str.length >= maxlength) {
        return str.slice(0, maxlength - 1) + ending;
    } else {
        return str.slice(0, maxlength + 1)
    }
}

/**
 * 
 * @param {String} string of currency 
 * @returns {number} the currency value 
 */
function extractCurrencyValue(str) {
    const number = str.slice(1);
    const curValue = Number(number);
    return curValue;
}


/**
 * 
 * @param {Array}  numbers
 * @returns {number} max sub-array
 
 */
function getMaxSubSum(arr) {

    let maximumSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            maximumSum = Math.max(maximumSum, sum);
        }
    }
    return maximumSum;
}

/**
 * 
 * @param {String} str the input string 
 * @returns {String} returns the camel case string. 
 */
function camelize(str) {
    let words = str.split("-");

    let result = "";
    result = words[0];
    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        result += capitalizedWord;
    }

    return result;

}


