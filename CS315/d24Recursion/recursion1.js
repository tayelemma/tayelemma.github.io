"use strict";
/* eslint-disable */
function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}

const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);


//4
function LinkedList(value, next) {
    this.value = value;
    this.next = next;
}
const maggie1 = new LinkedList("Maggie", null);
const lisa1 = new LinkedList("Lisa", maggie1);
const bart1 = new LinkedList("Bart", lisa1);
const homer1 = new LinkedList("Homer", bart1);
const abe1 = new LinkedList("Abe", homer1);


console.log(treeCollector(abe1));
displayNames(abe);
/*

function generateList(root){
    if(root.descendents ==null || root.descendents.length==0)
        return new LinkedList(root.value);
        let linkedlist = new LinkedList(root.value); //{value:"abe"} //2nd {value}
        let list = linkedlist;//home.next = maggie
    for(let eachchild of root.descendents){ //{homer},{lisa},{bart}
        list.next = generateList(eachChild);
        list =list.next;
        //linkedlist.next =generateList(eachchild);
    }
    return linkedlist;
}
console.log(JSON.stringify(generateList(abe)));

*/

//1
function displayNames(tree) {
    if (tree.descendents === []) {
        console.log(`${tree.value}`);
    } else {
        for (const simpson of tree.descendents) {
            displayNames(simpson);
        }
        console.log(`${tree.value}`);
    }
}
//2
function findTarget(tree, str) {
    if (tree.value === str) {
        return true;
    }
    if (tree.descendents !== []) {
        for (const subTree of tree.descendents) {
            if (findTarget(subTree, str)) {
                return true;
            }
        }

    }
    return false;
}
console.log("This should return you true:-" + " "+  findTarget( abe,"Maggie"));

//3
function findSubtree(tree, str) {
    if (tree.value === str) {
        return tree;

    } else if (tree.descendents.length !== 0) {
        for (const subTree of tree.descendents) {
            if (findTarget(subTree, str)) {
                return findSubtree(subTree, str);
            }

        }
    }
    return null;
}
console.log(findSubtree(abe,"Homer"))


//5
function findListNode(list, str) {
    if (list.value === str) {
        return list;

    } else if (list.next !== null) {
        return (findListNode(list.next, str));
    }
}


//6
function treeModifier(list, modifierFun) {
    modifierFun(list);
    if (list.next !== null) {
        treeModifier(list.next, modifierFun);
    }
}
//6a
function allCaps(list) {
    list.value = list.value.toUpperCase();

}
//6b
function addStars(list) {
    list.value = "***" + list.value + "***";
}
//6c
function reverseNode(list) {
    let reversed = "";
    for (let i = list.value.length - 1; i >= 0; i--) {
        reversed += list.value.charAt(i);
    }
    list.value = reversed;

}

//7
//const collector = [];

function treeCollector(list) {

   let  collector = [];  
    collector.push(list.value);
    if (list.next !== null) {
        treeCollector(list.next);
    }
    return collector;
}








