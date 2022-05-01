"use strict"; 
/*eslint-disable */

let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
let company_1 = {
    accountant: "Tom", //String-----  if(typeof obj[key]!= 'object')
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],//Array object---- (Array.isArray(obj[key]))
    development: {//object
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};


function findKeyWithString(obj) {
    let arr = [];
    for (let key in obj) {
        if (typeof obj[key] != 'object') {
            arr.push(key);
        }
        else if (Array.isArray(obj[key])) {
            arr.push(key);
        } else {
            arr.push(key);
            arr = arr.concat(findKeys(obj[key]));
        }
    }
    return arr;

}
console.log(findKeyWithString(company_1));
// ["sales","development","sites","internals"]

function findKeys(obj) {
    let arr = [];
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            arr.push(key);
        } else {
            arr.push(key);
            arr = arr.concat(findKeys(obj[key]));
        }
    }
    return arr;
}
console.log(findKeys(company));

// Returns 6700
function sumSalaries(department) {
    if (Array.isArray(department))
        return department.reduce((prev, current) => prev + current.salary, 0);
    let sum = 0;
    for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep);
    }
    return sum;
}
console.log(sumSalaries(company));
//[
//     { name: 'John' },
//     { name: 'Alice' },
//     { name: 'Peter' },
//     { name: 'Alex' },
//     { name: 'Jack' }
//   ]
function getEmployeeNamesObjectsArray(department) {
    if (Array.isArray(department))
        return department.map((item) => { return { name: item.name } })
    let names = [];
    for (let subdep of Object.values(department)) {
        let subDepNames = getEmployeeNamesObjectsArray(subdep);
        names = names.concat(subDepNames); // recursively call for subdepartments, sum the results
    }
    return names;
}
console.log(getEmployeeNamesObjectsArray(company));


function getEmployeeNameSalary(department) {
    if (Array.isArray(department))
        return department.reduce(function (prev, current) {
            console.log(prev, current)
            prev[current.name] = current.salary;
            return prev;
        }, {});
    let nameSalary = {};
    for (let subdep of Object.values(department)) {
        let subDeptObj = getEmployeeNameSalary(subdep);
        for (let key in subDeptObj) {
            nameSalary[key] = subDeptObj[key];
        }
    }
    return nameSalary;
}

console.log(getEmployeeNameSalary(company));

//[ 'John', 'Alice', 'Peter', 'Alex', 'Jack' ]
function getEmployeeNameInArray(department) {
    if (Array.isArray(department))
        return department.map(item => item.name);
    let names = [];
    for (let subdep of Object.values(department)) {
        names = names.concat(getEmployeeNameInArray(subdep))
    }
    return names;
}

console.log(getEmployeeNameInArray(company));

function getEmployeeNameInArray(department) {
    if (Array.isArray(department))
        return department.map(item => item.name);
    let names = [];
    for (let subdep of Object.values(department)) {
        names = names.concat(getEmployeeNameInArray(subdep))
    }
    return names;
}

console.log(getEmployeeNameInArray(company));

function findAllKeys(department){
    let arr = []; 
    
    for(let key in department){
        if(typeof department != "object"){
            arr.push(key);
        }
        else if(Array.isArray(department[key])){
            arr.push(key);
            
        
         
        }else{
            arr.concat(findAllKeys(department[key]));
        }
    }
    return arr;
}