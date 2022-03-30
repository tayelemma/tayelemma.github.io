"use strict"
let commission;
const prompt = require("prompt-sync")();
const salesMan = prompt("Salaried ? ");
let isSalaried = salesMan== "yes";
let salesAmount = prompt("Enter sales amount ");

if(isSalaried){
    if(salesAmount < 300){
        console.log("There is no commision for sales below $300.");
    }else if( 300 < salesAmount && salesAmount <= 500){
        commission = 0.01 * salesAmount;
        console.log("The commission is $" + commission);
    }else{
        commission = 500 * 0.02;
        console.log("The commision is "  + commission);
    }
}else if(!isSalaried){
    if(salesAmount>=300 &&  salesAmount<=500){
        commission=salesAmount*0.02;
    }
    else if(salesAmount > 500){
         commission= salesAmount*0.03;
    }
    console.log (" The commision is $" + commission);
    }