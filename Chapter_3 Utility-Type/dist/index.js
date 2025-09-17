"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* ----------------------- 1. Classes in Typescript ------------------- */
/* Parent class */
class Player {
    height;
    weight;
    healthPoint;
    id;
    constructor(height, weight, healthPoint) {
        this.height = height;
        this.weight = weight;
        this.healthPoint = healthPoint;
        this.id = crypto.randomUUID();
        this.height = height;
        this.weight = weight;
        this.healthPoint = healthPoint;
    }
    /* Getter functions */
    get getHeight() {
        return this.height;
    }
    get getWeight() {
        return this.weight;
    }
    /* Setter Function */
    set setHeight(heightValue) {
        this.height = heightValue;
    }
}
const player1 = new Player(100, 150, 23);
console.log(player1.getHeight);
console.log(player1.getWeight);
player1.setHeight = 55;
console.log("Player Id: ", player1.id);
/* Child class */
class AdvancedPalyer extends Player {
    level;
    constructor(height, weight, healthPoint, level) {
        super(height, weight, healthPoint);
        this.level = level;
        this.level = level;
    }
}
class Product {
    name;
    price;
    stock;
    id = crypto.randomUUID();
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    getId = () => this.id;
}
const product1 = new Product("laptop", 50000, 30);
console.log(product1.getId());
/*------------------------------2. Type Assertions in Typescript--------------------------
-> Type Assetion tells the type of the DOM node for correctly accessing the properties of that DOM Node .
-> There are two syntax for type assertion
Note: Be as specific as possible in case of type assertion*/
// Example 1. Button element
const btn1 = document.getElementById("btn");
const btn2 = document.getElementById("btn");
// btn1.onclick;
// btn2.onclick;
// Third way: Using NOT operator to make it not-null when values is null (Not come under Type Assertion)
const btn3 = document.getElementById("btn");
// btn3.onclick;
// Example 2. Image Element (As id and class does not help in predicting the eaxct the type of DOM element it will refer to,
// We must use type assertion for acessing the desired properties of the DOM node)
const image1 = document.getElementById("photo");
// image1.src;
const image2 = document.getElementById("photo");
// image1.src;
// Third way: We must specify the exact HTML tag in order to use Logical NOT(!). Here getElementById() method won't work.
const image3 = document.querySelector("img");
// image3.src;
// Example 3: Accessing Form and its elements
const submissionForm = document.getElementById("submission-form");
const numeric = document.querySelector("#submission-form > input");
submissionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Way 1: Modifying an existing elemnent
    const num = Number(numeric.value);
    const answer = document.getElementById("answer");
    answer.textContent += String(num + 20);
    // Way 2: Creating node
    const h2 = document.createElement("h2");
    const body = document.querySelector("body");
    h2.textContent = String(num + 20);
    body.append(h2);
});
const personObj = {
    name: "Pooja",
    email: "pooja@gmail.com",
};
const getName = () => {
    return personObj["name"];
};
const getEmail = () => {
    return personObj["email"];
};
const getData = (key) => {
    return personObj[key];
};
const personObj2 = {
    name: "Raina",
    email: "raina@gmail.com"
};
// works fine as const will not ne reassigned, remain unchnaged in future.
const key1 = "name";
personObj2[key1];
// In case of let, the value can get change in future, so in order to ensure 
// that the value of key2 in future will always be a key of Person2 interface we'll use "keyof" operator as type assertion
let key2 = "email";
personObj2[key2]; // Way 1: On the basis of interface if accessible
personObj2[key2]; // Way 2: On the basis of Object if interface is not accessible Here (typeof personObj2 === Person2) 
//# sourceMappingURL=index.js.map