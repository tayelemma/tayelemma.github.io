"use strict";
/* global assert isVowel*/
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */

const assert = require("assert");

// eslint-disable-next-line require-jsdoc
function isVowel(letter) {
    if (letter === "a" || letter === "e" || letter === "i" ||
        letter === "o" || letter === "u") {
        return true;
    } else {
        return false;
    }
}
/**
 * 
 * @param {Function} fun f
 * @param {number} xxx num
 * @param {nuber} yyy num
 * @returns {number}n 
 */
function executor (fun, xxx, yyy){
    return fun(xxx,yyy);
}

 /**
  * 
  * @param {number} xxx num
  * @param {number} yyy num
  * @returns {number}nu
  */
function add(xxx,yyy){
    return xxx + yyy;
}
/**
 * 
 * @param {number} xxx num 
 * @param {number} yyy num
 * @returns {number}n
 */
function mult (xxx,yyy){
    return xxx*yyy;
}

describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});
describe("executor", function () {
    it("tests add", function () {
        assert.strictEqual(executor(add, 5, 10), 15);
    });
    it("tests mult", function () {
        assert.strictEqual(executor(mult, 5, 10), 50);
    });
});


