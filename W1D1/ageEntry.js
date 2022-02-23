"use strict"


const prompt = require("prompt-sync")();
let age = prompt(" Please enter your age : ");

while (age <= 18) {
    age = prompt("Please Enter your age : ")
}



const prompt = require("prompt-sync")();
let age = prompt(" Please neter your age : ");
do {
    age = prompt("Please Enter your age : ")
}
while (age <= 18);