"use strict"

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += j;
    }
    console.log(row);
}
console.log();



for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}
console.log();



for (let i = 5; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}


/**
 * 
 * @param {String} name string  
 * @returns {string} s,.
 */
function hiT(name){return "Hi " + name;}

let goodBye= function(){
    return "Goodss Bye";
};
console.log(hiT("Developer","Welcome")); 
console.log(goodBye("Developer",23,true));
console.log(goodBye); 
console.log(goodBye()); 



/* eslint-disable
 */

//quiz
let letter = ["I", "m", "n"];

function printArray(word){
      for( let i = 0;  i < word.length;  i ++){
          console.log(word[i]);
    }
    return word.length;
}
console.log(printArray(letter));

// quiz 
function printArr(arr){
    for( let letter of arr){
        console.log(letter);
  }
  return word.length;
}
console.log(printArr(letter));