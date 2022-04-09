"use strict";
/*eslint-disable */
window.onload = function () {
    document.getElementById("addButton").onclick = add;
    document.getElementById("saveButton").onclick = save;
    document.getElementById("sortDrop").onchange = sortElements;
    document.getElementById("filterDrop").onchange = filterElem ;
}

let storageArray = [];
let table = document.getElementById("myTable");
let arrayOfValues;
let rowObj;
let index = 1;
//
//
function tableUpdate(arr) {
    let tableChildren = table.children[0];
    tableChildren.remove();
    table.innerHTML = "<tbody> <tr><th>Product Name</th><th>Category</th><th>Quantity</th><th>Rating</th><th class='button'>Edit</th><th class='button'>Remove</th></tr></tbody>";
    for (let element of arr) {
        let itemName = element.name;
        let category = element.category;
        let quantity = element.quantity;
        let rating = element.rating;
        let id = element.id;
        let newRow = table.insertRow(-1);
        newRow.id = id;
        newRow.insertCell(0).innerHTML = itemName;
        let cell2 = newRow.insertCell(1).innerHTML = category;
        let cell3 = newRow.insertCell(2).innerHTML = quantity;
        let cell4 = newRow.insertCell(3).innerHTML = rating;
        let cell5 = newRow.insertCell(4).innerHTML = "<button id='editButton' onclick='edit(this)'>Edit</button>";
        let cell6 = newRow.insertCell(5).innerHTML = "<button id='removeButton' onclick='remove(this)'>Remove</button>";
    }
}
//
//


function add() {
    let itemName = (document.getElementById("name")).value;
    let category = (document.getElementById("category")).value;
    let quantity = (document.getElementById("quantity")).value;
    let rating = (document.getElementById("rating")).value;
    let table = document.getElementById("myTable");
    if (itemName === "") {
        alert("Enter item name");
    } else if (category === "") {
        alert("Enter category");
    } else if (quantity === "") {
        alert("Enter quantity")
    } else if (rating === "") {
        alert("Enter rating")
    } else if (!(Number(quantity))) {
        alert("Quantity must be number");
        document.getElementById("quantity").style.backgroundColor = "red";
    } else {       
        document.getElementById("quantity").style.backgroundColor = "";
        let addedRow = table.insertRow(-1);
        addedRow.id = index;
        addedRow.insertCell(0).innerHTML = itemName;
        addedRow.insertCell(1).innerHTML = category;
        addedRow.insertCell(2).innerHTML = quantity;
        addedRow.insertCell(3).innerHTML = rating;
        addedRow.insertCell(4).innerHTML = "<button id='editButton' onclick='edit(this)'>Edit/Input again</button>";
        addedRow.insertCell(5).innerHTML = "<button id='removeButton' onclick='remove(this)'>Remove</button>";
        storageArray.push({ name: itemName, category: category, quantity: quantity, rating: rating, id: index });
        index++;
    }
}
//
//

function remove(obj) {
    let rowToRemove = obj.parentNode.parentNode;
    for (let element of storageArray) {
        if (element.id == rowToRemove.id) {
            storageArray.splice(storageArray.indexOf(element), 1);
        }
    }
    rowToRemove.remove();
}
//
//
function edit(nw) {
    rowObj = nw.parentNode.parentNode
    arrayOfValues = rowObj.childNodes;
    document.getElementById("name").value = arrayOfValues[0].innerHTML;
    document.getElementById("category").value = arrayOfValues[1].innerHTML;
    document.getElementById("quantity").value = arrayOfValues[2].innerHTML;
    document.getElementById("rating").value = arrayOfValues[3].innerHTML;
    
}
//
//
function save() {
    let itemName = (document.getElementById("name")).value;
    let category = (document.getElementById("category")).value;
    let quantity = (document.getElementById("quantity")).value;
    let rating = (document.getElementById("rating")).value;
    arrayOfValues[0].innerHTML = itemName;
    arrayOfValues[1].innerHTML = category;
    arrayOfValues[2].innerHTML = quantity;
    arrayOfValues[3].innerHTML = rating;

    for (let element of storageArray) {
        if (element.id == rowObj.id) {
            element.name = itemName;
            element.category = category;
            element.quantity = quantity;
            element.rating = rating;
        }
    }
    console.log(rowObj);
    console.log(storageArray)
}
//
//


function sortElements() {
    let sortBy;
    for (let option of this.options) {
        if (option.selected) {
            sortBy = option.value;
        }
    }
    if (sortBy === "name") {
        console.log("sort by name");
        storageArray.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        })
        tableUpdate(storageArray);

    } else if (sortBy === "quantity") {
        console.log("sort by quantity");
        storageArray.sort((a, b) => a.quantity - b.quantity);
        tableUpdate(storageArray);
    }
}
//
//
function filterElem() {
    let filteredList;
    let filtedArr;
    for (let option of this.options) {
        if (option.selected) {
            filteredList = option.value
        }
    }
    if (filteredList === "filterquantity") {
        filtedArr = storageArray.filter(item => item.quantity > 100);
        tableUpdate(filtedArr);
    } else if (filteredList === "filterrating") {
        filtedArr = storageArray.filter(item => item.rating > 4);
        tableUpdate(filtedArr);
    }
}
