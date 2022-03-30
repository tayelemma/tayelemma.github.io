"use strict";
/**
 * while loop
 */

const prompt = require("prompt-sync")();
let age = prompt(" Please enter your age : ");

while (age <= 18) {
    age = prompt("Please Enter your age : ");
}


/**
 * do_while loop
 */

const prompt1 = require("prompt-sync")();
let age1 = prompt1(" Please enter your age : ");
do {
    age1 = prompt1("Please Enter your age : ");
}
while (age1 <= 18);

