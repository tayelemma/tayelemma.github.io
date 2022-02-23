"use strict"
const prompt = require("prompt-sync")();
let num = prompt("Enter a integer number: ")
let sum = 0;
for(let i =0; i<num.length;i++){
    sum +=Number(num[i]);
}
console.log(sum);