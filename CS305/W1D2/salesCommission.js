"use strict";
/*
Input:             sales amount; 
Output:            sales commission. 
Processing Output: if salesman isSalaried compute, execute if sales amount is less than 300 compute no commission
                    if sales amount is greater than 300 and less than and equal to 500 comput sales amount * 0.01, 
                    otherwise,  compute 500 * 0.01 plus sales amount minus 500 times 0.02. 
                    if salesman is not salaried compute
                    -if sales amount is  less than 300 compute no commission -if sales amount is grater than
                    $300 and less than and equal $500  compute sales amount * 0.02.
                    -otherwise sales amount is above $500 compute sales amount * 0.03.

*/


let isSalaried = true;
/**
 * @param{boolean} isSalaried boolean. 
 * @param{int} salesAmount number. 
 * @returns {int } number. 
 *
 */
function computeSalesCommission(isSalaried,salesAmount){
    if(isSalaried){
        if(salesAmount < 300){
            return 0;
        }else if(salesAmount >= 300 && salesAmount <= 500){
            return salesAmount * 0.01;
        }else 
            return ((500 * 0.01) + ((salesAmount-500) * 0.02) ) ;
    }else{
        if(salesAmount < 300){
            return 0;
        }else if(salesAmount >= 300 && salesAmount <= 500){
            return salesAmount * 0.02;
        }else{
            return ( (500 * 0.02) + ((salesAmount-500) * 0.03));
        }
    }  
}

console.log("expect 0: ", computeSalesCommission(true,200));
console.log("expect 0: ", computeSalesCommission(false,200));
console.log("expect 3: ", computeSalesCommission(true,300));
console.log("expect 6: ", computeSalesCommission(false,300));
console.log("expect 65: ", computeSalesCommission(true,3500));
console.log("expect 100: ", computeSalesCommission(false,3500));