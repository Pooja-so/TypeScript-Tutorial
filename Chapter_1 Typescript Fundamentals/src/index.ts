/* Different ways for varaible and function declration with typescript */
// 1. Syntax: Both are same
let numo = <number>343;
let num: number = 343;

// 2. Union type: (or, |)
let surname: number | string;
surname = 1234;
surname = "Singh";

// 3. function with return type
const multiply = (n: number, m: number): number => {
  return n * m;
};
console.log(multiply(10, 20));

// 4. type aliases
// 4.1) Custom data type
type usernametype = string | number;
let username: usernametype = 12345;

// 4.2) Custom function type (defines type for parameters and return type)
type numerical = (x: number, y: number) => number;
const add: numerical = (x, y) => {
  return x + y;
};
console.log(add(10, 20));

/* 5. Array : Two syntax
const arr: type[] = []        e.g. const arr:string[] = ["Pooja", "Ray"]  
const arr: Array<type> = []   e.g. const arr:Array<string> = ["Pooja", "Ray"]
*/
// 5.a) common
const arr: number[] = [10, 20, 30, 40];
const strArr: string[] = ["Ray", "Pooja", "Raina"];

// 5.b) Preferred Generic (Using array keyword)
const arr2: Array<string> = ["abc", "efg", "hfhs"];
const arr3: Array<string | number> = ["Pooja", 12234, "Ray"];

/* 6. Tuple: Fixed size array, 
Syntax: const arr[type, type, type] = [] */
const tupleArr: [number, number, number] = [10, 20, 30];

/* 7 Objects 
-> Syntax for optional property::   property?  
-> use interface instead of type.
-> Using interface is beneficial for creating classes and objects as it can extends*/

type funcType = (x: number, y: number) => number;

interface userObj {
  name: string;
  age: number;
  adult?: boolean;
  getName: () => string;
  func?: funcType; // Decrease complexity, can use type aliases for function within interface
}

const user: userObj = {
  name: "Pooja",
  age: 10,
  adult: true,
  getName: () => "Pooja",
};
console.log(user);

// Extending properties
interface userBody extends userObj {
  height: number;
  weight: number;
}

const user2: userBody = {
  name: "Ray",
  age: 21,
  height: 4,
  weight: 40,
  getName: () => {
    return "Ray";
  },
};

/* --------------------  Function Declaration in Typescript ------------------ */
/* Note: First create type alias for the function and then write function definition */
// 8. Working with function declaration
// Example 8.1  Optional parameter
type userInfoFunType = (name: string, age?: number) => void;

const userInfoFun: userInfoFunType = (username) => {
  console.log(`Name: ${username}`);
};
userInfoFun("Pooja");

// Example 8.2: Handling Optional parameter with multiple return types
type multiplyFunType = (x: number, y: number, z?: number) => number | string;

const multiplyFun: multiplyFunType = (x, y, z) => {
  if (typeof z === "undefined") return "Third varaible is missing";
  if (typeof z === "undefined") return x * y;
  return x * y * z;
};
multiplyFun(10, 20);

// Example 8.3: Handling Optional parameter with Default paramter
type multiplyFunType1 = (x: number, y: number, z?: number) => number;

const multiplyFun1: multiplyFunType1 = (x, y, z = 1) => {
  return x * y * z;
};
multiplyFun(10, 20);

// Example 8.4: Handling multiple parameters using rest operator
type addFuncType = (...nums: number[]) => number;
const addFunc: addFuncType = (...nums) => {
  const summation = nums.reduce((accumulator, num) => accumulator + num, 0);
  return summation;
};
addFunc(10, 20, 3, 5, 5, 60);

// Example 8.5.1: Normal Function
function greet(username: string): void {
  console.log(`Hello ${username}`);
}
greet("Zoya");

// Example 8.5.2: Normal function with type alias
type greetFunType = (name: string) => void;
const greet1: greetFunType = function (username) {
  console.log(`Hello ${username}`);
};
greet1("Issabelle");

//  Example 8.5.3: Functions with object
interface productType {
  readonly id: string; // cannot be modified after once defined
  name: string;
  stock: number;
  price: number;
  photo?: string;
}
type getProductInfoType = (product: productType) => void;

const getProductInfo: getProductInfoType = (product) => {
  // product.id = "SBIN12344";  // Error: Cannot assign to 'id' because it is a read-only property.
  console.log("Product info: ", product);
};

const digitalProduct: productType = {
  id: "IN034SO4",
  name: "laptop",
  stock: 12,
  price: 50000,
  photo: "ImageURL",
};
getProductInfo(digitalProduct);

/*------------------ Other types ---------- */
// 9. Never type: By default the return type of function throwing Error will be "never"
const errorHandler = (): never => {
  throw new Error();
};

//  Here we are returning error, So return type is "Error"
const errorHandler2 = (): Error => {
  return new Error();
};

// 10. Make Enum using type alias
type themeMode = "light" | "dark";
const mode: themeMode = "dark"