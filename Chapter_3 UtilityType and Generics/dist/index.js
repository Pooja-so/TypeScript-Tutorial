"use strict";
/*--------------- 1. Generic in Function for custom type----------------- */
// Syntax: Type must be assigned for paramter, return type in case of functions
//  But when using custom type we must also include <CustomType>
// Object.defineProperty(exports, "__esModule", { value: true });
/* ----Without custom Data type---
Note: Typescript can automatically detects defined data type like number, boolean, string etc..*/
const addFunc = (a, b) => {
    return a + b;
};
addFunc(10, 10);
const userFunc = (user) => {
    return user;
};
const userObj = {
    name: "pooja",
    age: 18,
};
const user = userFunc(userObj);
/*--------------- 2. Generic in array for custom type----------------- */
const arr = [];
const arr2 = [];
/*-----------------3. Some case With custom Data type ------------------------- */
// Note: We must define the custom data type...*/
// Note: Either remove the return type or specify parameters with type like
const addFunc1 = (a, b) => {
    //  return a + b; // Error: Operator '+' cannot be applied to types 'T' and 'U'
    return { a, b };
};
const answer = addFunc1(10, 10);
console.log("Addition: ", answer.a + answer.b);
const personFunc = (p1, p2) => {
    return { p1, p2 };
};
// --------------------------------------------------------------------------------------
const personValue1 = {
    name: "Raina",
    email: "raina@gmail.com",
};
const personValue2 = {
    name: "Raina",
    email: "raina@gmail.com",
    age: 10,
};
const person = personFunc(personValue1, personValue2);
const users = [
    {
        name: "Pooja",
        age: 20,
    },
    {
        name: "Priya",
        age: 20,
    },
    {
        name: "Rhea",
        age: 22,
    },
    {
        name: "Isha",
        age: 24,
    },
];
const filterByField = (users, property, value) => {
    return users.filter((user) => user[property] === value);
};
let filteredUser = filterByField(users, "name", "Pooja");
console.log("Filtered user: ", filteredUser);
filteredUser = filterByField(users, "age", 20);
console.log("Filtered user: ", filteredUser);
//# sourceMappingURL=index.js.map