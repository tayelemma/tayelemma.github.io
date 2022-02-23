"use strict"
/*
Input                             Ddefining Table processing                Output
-------------------------------------------------------------------------------------------------------
=>initial amount                 Calculate the compounds interst            compounds interest monthly. 
=>annual interest rate           monthly. By multipliying initial rate,
=>number of years to compound    annual interest

*/
const prompt = require("prompt-sync")();
let initialAmount = prompt("Enter initial amount.");
let annualInterestRate = prompt("Enter annual interest rate. ");
let yearToCompound = prompt("Enter the number of years to compound. ");

let finalMonthlyCompound = initialAmount * (1 + (annualInterestRate) ** yearToCompound)-initialAmount;
console.log(finalMonthlyCompound);