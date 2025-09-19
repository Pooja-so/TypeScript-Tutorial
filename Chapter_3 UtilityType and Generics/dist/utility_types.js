"use strict";
/* ----------------------- 1. Type utility  in Typescript -------------------
-> Typescript provides type utility for ease of access.
-> Common utility types Returns "type alias":
    1. Partial<Type>: To make all properties under "type alias" optional
    2. Required<Type>: To make all properties under "type alias" mandatory
    3. Readonly<Type>: To make all properties readonly. (Unmmutable: Cannot be modified)
    4. Record<keys,Type>
    5. Pick<Type, keys>
    6. Omit<Type, keys>
    7. Exclude<Type, ExcludedUnion>
    8. Extract<Type, Union>
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Direct usage:
const userobj = {
    name: "Pooja",
    email: "pooja@gmail.com",
};
const product = {
    productId: 1234,
    productName: "laptop",
    stock: 20,
};
// Synatx: Record<keys, type> (means for every key must be of  specified "type")
const users = {
    john: { age: 20 },
    levi: { age: 30 },
    elon: { age: 40 },
    jack: { age: 30 },
};
// 10. Parameters<Type>: Returns the parameters of the function as an array
const myFunc = (a, b) => {
    console.log(a + b);
};
// 11. ReturnType<Type>: Return the return type of the function
const getName = () => {
    return "Pooja";
};
// 12. ConstructorParameters<Type>: Returns the parameters of the constructor of the class as an array
class UserClass {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = {
    name: "xyz",
    age: 20,
};
//# sourceMappingURL=utility_types.js.map