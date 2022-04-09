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


//1
function displayNames(simpsons) {
    if (simpsons.descendents === []) {
        console.log(`${simpsons.value}`);
    } else {
        for (const simpson of simpsons.descendents) {
            displayNames(simpson);
        }
        console.log(`${simpsons.value}`);
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
const collector = [];

function treeCollector(list) {
    collector.push(list.value);
    if (list.next !== null) {
        treeCollector(list.next);
    }
    return collector;
}








