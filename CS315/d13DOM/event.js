"use strict";
/**
 * 
 */
function addItem() {
    let table = document.getElementById("tableId");
    let names = document.getElementById("name");
    let category = document.getElementById("category");
    let quantity = document.getElementById("quantity");
    let tr = document.createElement("tr");
    table.append(tr);
    let td1 = document.createElement("td");
    tr.append(td1);
    td1.innerText = names.value;
    td1.style.paddingRight = "200px";

    let td2 = document.createElement("td");
    tr.append(td2);
    td2.innerText = category.value;
    td2.style.paddingRight = "200px";

    let td3 = document.createElement("td");
    tr.append(td3);
    td3.innerText = quantity.value;
    td3.style.paddingRight = "200px";
}