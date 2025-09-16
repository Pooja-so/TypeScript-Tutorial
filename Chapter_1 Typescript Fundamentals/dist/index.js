"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Different ways for varaible and function declration with typescript */
// 1. Syntax: Both are same
let numo = 343;
let num = 343;
// 2. Union type: (or, |)
let surname;
surname = 1234;
surname = "Singh";
// 3. function with return type
const multiply = (n, m) => {
    return n * m;
};
console.log(multiply(10, 20));
let username = 12345;
const add = (x, y) => {
    return x + y;
};
console.log(add(10, 20));
/* 5. Array : Two syntax
const arr: type[] = []        e.g. const arr:string[] = ["Pooja", "Ray"]
const arr: Array<type> = []   e.g. const arr:Array<string> = ["Pooja", "Ray"]
*/
// 5.a) common
const arr = [10, 20, 30, 40];
const strArr = ["Ray", "Pooja", "Raina"];
// 5.b) Preferred Generic (Using array keyword)
const arr2 = ["abc", "efg", "hfhs"];
const arr3 = ["Pooja", 12234, "Ray"];
/* 6. Tuple: Fixed size array,
Syntax: const arr[type, type, type] = []
*/
const tupleArr = [10, 20, 30];
//# sourceMappingURL=index.js.map