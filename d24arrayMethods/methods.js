"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests



/**
 * 
 * @param {Array} arr input array
 * @param {Number} aaa  first number
 * @param {Number} bbb  second number
 * @returns {Array} returns sub array
 */
function filterRange(arr, aaa, bbb) {
    let subArray =[];
    for(const elements of arr){
        if(elements >= aaa && elements <= bbb){
            subArray.push(elements);
        }
    }
    return subArray;
}

/**
 * 
 * @param {Array} arr input the array 
 * @param {Number} aaa the first input number
 * @param {Number} bbb the second input number
 * @returns{Array} subset array 
 */
function filterRangeInPlace(arr, aaa, bbb) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < aaa || arr[i] > bbb) {
            arr.splice(i, 1);
            i--;
        }
    }

}

/**
 * @returns{Calculator} it return the object.
 */
function Calculator() {
    this.methods = {
        ["-"]: (aaa, bbb) => aaa - bbb,
        ["+"]: (aaa, bbb) => aaa + bbb
    };

    this.calculate = function (str) {
        let char = str.split(" ");
        let aaa = +char[0];
        let operator = char[1];
        let bbb = +char[2];

        if (!this.methods[operator]) {
            return NaN;
        }
        return this.methods[operator](aaa, bbb);
    };

    this.addMethod = function (prop, func) {
        this.methods[prop] = func;

    };
}



/**
 * 
 * @param {Array} array input array
 * @returns {Array} array with a new subset
 */
function unique(array) {

    let subsetArray = array.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
    });

    return subsetArray;

}

/**
 * 
 * @param {Array} array input an array
 * @returns {Number}reduced number.
 */
function groupById(array) {

    return array.reduce((user, currentUser) => {
        user[currentUser.id] = currentUser;
        return user;

    }, {});

}