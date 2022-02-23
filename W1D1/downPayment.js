"use strict"
/*
Input                                 Defining Table Procesing                  Output
---------------------------------------------------------------------------------------------------
 cost of the House.                    =>if cost less than 50K then             down payment for the
                                          compute 5% of the cost                the house loan. 
                                       =>if cost is between $50K and 
                                          less than 100K compute                         
                                          (10% + $1000)
                                       => if cost is between greater than
                                          $100K and less than 200K  
                                          compute($2000 + 15%)
                                        => if cost is greater than $200
                                          compute ($5000 + 10%)                              

*/
const prompt= require("prompt-sync")();
const K = 1000;
let costofHouse=prompt("Please enter the coat of the house :")
let downPayment;

if(costofHouse>0 && costofHouse<=50*K){
    downPayment=costofHouse*0.05;
}
else if( costofHouse>50*K && costofHouse<=100*K){
    downPayment= 1000 + 0.01*(costofHouse - 50*K)
}
else if( costofHouse>100*K && costofHouse<=200*K){
    downPayment= 2000 + 0.15*(costofHouse-100*K);
}
else{
    downPayment= 5000 + 0.01 * (costofHouse - 200*K)
}
console.log("The down payment is $ " + downPayment);