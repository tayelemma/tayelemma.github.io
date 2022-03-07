"use strict";

/**
  Section: JSON
  Turn the object into JSON and back.
  Can this be used for cloning objects? Yes, but is not pure colonable. 
 */

const user = {
    name: "Taye",
    surname: "Lemma",
    isAdmin: false,
    birthday: { "year": 2000, "month": "February", "day": 3 },
    friends: [0, 1, 2, 3]
};

const userString = JSON.stringify(user);
console.log("userString is: ", userString);

const userClone = JSON.parse(userString);
console.log("userClone is: ", userClone);

console.log(user === userClone);


