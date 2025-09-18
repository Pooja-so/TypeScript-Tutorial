"use strict";
/* ----------------------- 1. Type utility  in Typescript -------------------
-> Typescript provides type utility for ease of access.
-> Most common utility types Returns "type alias":
    1. Partial<Type>: To make all properties under "type alias" optional
    2. Required<Type>: To make all properties under "type alias" mandatory
    3. Readonly<Type>: To make all properties readonly. (Unmmutable: Cannot be modified)
    4. Record<keys,Type>
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
//# sourceMappingURL=index.js.map