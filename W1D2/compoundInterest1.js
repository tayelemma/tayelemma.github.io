"use strict"
/*
Input                           Defining Table processing          output
--------------------------------------------------------------------------------------------
initial amount                 multiply the inital amount,anual    monthly compund interest
annual interest rate           interest, and years to compund  
number of years to compund     and divided by 12 months. 
*/

function compoundInterst(initialAmount, interestRate , yearsNumber){
    let monthlyCompund = initialAmount * ((1 + (interestRate/100))** yearsNumber)-1;
    return monthlyCompund;
}
console.log("expect 110.47",compoundInterst(100,10,1) );
console.log("expected 16470.09", compoundInterst(10000,5,10))
