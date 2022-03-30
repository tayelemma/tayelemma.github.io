"use strict";
//module.exports ={maxOfThree,sum,multiply,findLongestWord,reverseArray,reverseArrayInPlace,scoreExams,generateArray};



/* 1.Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.  */

/**
 * 
 * @param {Number} firstNum is the first number. 
 * @param {Number} secondNum is the second number. 
 * @param {Number} thirdNum is the third number. 
 * @returns {Number} the largest number. 
 */
function maxOfThree(firstNum,secondNum,thirdNum){
    if( firstNum  >= secondNum && firstNum >= thirdNum){
        return firstNum;
    }else if(secondNum >= firstNum && secondNum >= thirdNum){
         return secondNum;
    }else {
        return thirdNum;
    }
}



/*
2.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10,
 and multiply([1,2,3,4]) should return 24. 
 */
/**
 * 
 * @param {Number} arrayToSum is an array of a number. 
 * @returns {Number} is number.  
 */
function sum(arrayToSum){
    let sumValue = 0; 
    for( let i = 0; i < arrayToSum.length; i++){
        sumValue = sumValue + arrayToSum [i];
    }
    return sumValue; 
}


/**
 * 
 * @param {Number} arrayToMultiply is the array to be multiplied. 
 * @returns {Number} it returns the product of the arrays. 
 */
function multiply(arrayToMultiply){
    let product = 1;
    for (let i = 0; i < arrayToMultiply.length; i++){
        product = product * arrayToMultiply[i];
    }
    return product;
}


//3.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one. 
/**
 * 
 * @param {String} array is a string of an array. 
 * @returns {String} is the longest word in an array. 
 */
function findLongestWord(array){
   let storeLength = [];
   for ( let i = 0; i < array.length; i++){
       storeLength[i] = array[i].length;
   }
   return Math.max(...storeLength);
}


//4.	Reverse an Array 
/**
 * 
 * @param {Array} array accepts an array.
 * @returns {Array} reverse array. 
 */
function reverseArray(array){
    const reverseArr = [];
    for(let i = array.length-1; i >= 0 ; i--){
        reverseArr.push(array[i]);
    }
    return reverseArr;
}

 
  /**
  * 
  * @param {Array} arr of number. 
  * @returns{Array} the modified arr
  */
   function reverseArrayInPlace(arr){
    const tempArr = arr.slice(0);
   for (let i = arr.length-1; i>=0; i--){
       arr[i] = tempArr[arr.length-1-i];
   }

     return arr;
}





//5.  Write a function, scoreExams, that takes an array of arrays of student answers and an array of the correct answers. 
/** 
 * @param {Array} studentAnswers an array of arrays
 * @param {Array} correctAnswers array of correct answers
 * @returns{Array} array of students answers
 */
 function scoreExams(studentAnswers, correctAnswers){
    let totalScore =[];
   for(let oneStudentAnswer of studentAnswers ){
       let index =0; 
       let singleScore =0;  
       for(let eachAnswer of oneStudentAnswer){
           if(eachAnswer === correctAnswers[index]){
               singleScore++;
           }
           index++;
       }
       totalScore.push(singleScore);
   }
   
   return totalScore;
}




/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows: */
/**
 * 
 * @param {Number} row number of rows in the array
 * @param {Number} colomun  number of colomuns in the array
 * @returns {Array} 2 -dimensional array of sequential numbers
 */
function generateArray(row,colomun){
   let multiArray = [];
   let value = 1 ;

   for(let i=0;i<row;i++){
       let arr =[];
       for(let j =0;j<colomun;j++){
          arr.push(value);
          value++;
       }
       multiArray.push(arr);
   }
   
   return multiArray;

}