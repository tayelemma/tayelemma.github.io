"use strict";

module.exports = { isVowel, computeSalesCommission, compoundInterest, calcDownpayment, calcDistance, sumDigit, multiDigit };

/**
 * @param {string} letter String. 
 * @return {boolean} true or false
 */
function isVowel(letter) {
    if (letter === "a" || letter === "e" || letter === "i" ||
        letter === "o" || letter === "u") {
        return true;
    } else {
        return false;
    }
}

/**
 * 
 * @param {Boolean} isSalaried check for the salaried.
 * @param {Number} salesAmnt second parameter is the number.
 * @returns {Number} number.
 */
function computeSalesCommission(isSalaried, salesAmnt) {
    let Commission = 0;
    if (isSalaried) {
        if (salesAmnt < 300) {
            Commission = 0;
        } else if (salesAmnt >= 300 && salesAmnt <= 500) {
            Commission = salesAmnt * 0.01;
        } else if (salesAmnt > 500) {
            Commission = ((salesAmnt - 500) * 0.02) + 5;
        }
    } else if (!isSalaried) {
        if (salesAmnt >= 300 && salesAmnt <= 500) {
            Commission = salesAmnt * 0.02;
        } else if (salesAmnt > 500) {
            Commission = ((salesAmnt - 500) * 0.03) + 10;
        }
    }

    return Commission;

}



/**
 * 
 * @param {Number} initialAmount first number.
 * @param {Number} interestRate second number. 
 * @param {Number} yearsNumber third number. 
 * @returns {Number}total payment. 
 */
function compoundInterest(initialAmount, interestRate, yearsNumber) {
    const MONTHS = 12;
    let totalPayment = Math.pow(initialAmount * (1 + (interestRate / 100) / MONTHS),(yearsNumber * MONTHS));
    return totalPayment;


}




/**
 * 
 * @param {number} cost  number. 
 * @returns {Number}number. 
 */
function calcDownpayment(cost) {
    let downPayment;
    if (cost >= 0 && cost <= 50000) {
        downPayment = cost * 0.05;
    } else if (cost > 50000 && cost <= 100000) {
        downPayment = 2500 + ((cost - 50000) * 0.10);
    } else if (cost < 100000 && cost > 200000) {
        downPayment = 7500 + ((cost - 100000) * 0.15);
    } else if (cost >= 200000) {
        downPayment = 5000 + ((cost - 200000) * 0.10);
    }
    return downPayment;
}



/**
 * 
 * @param {number} x1 first number.
 * @param {number} y1 second number. 
 * @param {number} x2 third number. 
 * @param {number} y2 fourth number. 
 * @returns {Number}distance. 
 */
function calcDistance(x1, y1, x2, y2) {
    let xCor = Math.pow((x2 - x1), 2);
    let YCor = Math.pow((y2 - y1), 2);
    let distance = Math.sqrt((xCor + YCor));
    return distance;
}



/**
 * 
 * @param {number} num is number input.
 * @return {Number}the sum of digits
 */
function sumDigit(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;

        num = Math.floor(num / 10);
    }
    return sum;
}


/**
 * 
 * @param {number} num input number. 
 * @returns {Number} the product of digits
 */
function multiDigit(num) {
    let product = 1;
    while (num) {
        product *= num % 10;
        num = Math.floor(num / 10);
    }
    return product;
}

