"use strict";
/* eslint-disable */

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
//Part-I
//Sum all numbers till the given one.
function sumAll(num) {
    if (num === 1) {
        return 1;
    } else {
        return num + sumAll(num - 1);
    }
}
console.log(sumAll(100));


//Calculate factorial
function factorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(4));


//Fibonacci numbers
function fibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
console.log(fibonacci(5));

//Output a single-linked list in a reverse order. 
function singleListReverse(list) {
    if (list.next === null) {
        console.log(list.value);
    } else {
        singleListReverse(list.next);
        console.log(list.value);
    }
}
singleListReverse(list);

//Part II
// "name: value"
function printKeyValueNode(node) {
    if (node.children == null) {
        console.log(`${node.name} : ${node.value} `);
    }
    else {
        for (let subNode of node.children) {
            printKeyValueNode(subNode);
        }
        console.log(`${node.name} : ${node.value} `);
    }
}


function printNodeNameValue(node) {
    console.log(`${node.name} : ${node.value} `);
    if (node.children !== null) {
        for (const child of node.children) {
            console.log(`${child.name} : ${child.value} `);
            if (child.children !== null) {
                for (const baby of child.children) {
                    console.log(`${baby.name} : ${baby.value} `);
                }
            }
        }
    }

}
/*2. Modify both versions to return an array containing the “name:value” strings for the entries rather
    than printing the values to the console.
*/
const collectionName = [];

function collectValues(node) {
    collectionName.push(`${node.name} : ${node.value}`);
    if (node.children !== null) {
        for (const kid of node.children) {
            collectionName.push(`${kid.name} : ${kid.value}`);
            if (kid.children !== null) {
                for (const baby of kid.children) {
                    collectionName.push(`${baby.name} : ${baby.value}`);
                }
            }
        }


    }
    return collectionName;
}








