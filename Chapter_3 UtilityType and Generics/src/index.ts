/*--------------- 1. Generic in Function for custom type----------------- */
// Syntax: Type must be assigned for paramter, return type in case of functions
//  But when using custom type we must also include <CustomType>

/* ----Without custom Data type--- 
Note: Typescript can automatically detects defined data type like number, boolean, string etc..*/
const addFunc = (a: number, b: number): number => {
  return a + b;
};

addFunc(10, 10);

/* ------------ With custom Data type  ------------------- 
Note: We must define the custom data type...*/

// const addFunc1 = <T>(a: T, b: T): T => {
//     return a + b; // Error: Operator '+' cannot be applied to types 'T' and 'T'
// };

// const answer = addFunc(10, 10);

// ------------------------------------------------------------

type Person = {
  name: string;
  age: number;
};

const userFunc = <T>(user: T): T => {
  return user;
};

const userObj: Person = {
  name: "pooja",
  age: 18,
};
const user = userFunc<Person>(userObj);

/*--------------- 2. Generic in array for custom type----------------- */
const arr: number[] = [];
const arr2: Array<number> = [];

/*-----------------3. Some case With custom Data type ------------------------- */
// Note: We must define the custom data type...*/

// Note: Either remove the return type or specify parameters with type like
const addFunc1 = <T, U extends T>(a: T, b: U): { a: T; b: U } => {
  //  return a + b; // Error: Operator '+' cannot be applied to types 'T' and 'U'
  return { a, b };
};

const answer = addFunc1<number, number>(10, 10);
console.log("Addition: ", answer.a + answer.b);

//  Example 2:
type Person1 = {
  name: string;
  email: string;
};

type Person2 = {
  name: string;
  email: string;
  age: number;
};

const personFunc = <T, U extends T>(p1: T, p2: U): { p1: T; p2: U } => {
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
const person = personFunc<Person1, Person2>(personValue1, personValue2);

/* -------------------------------------------------------------------------------------- */
// Filter an array of objects
interface User {
  name: string;
  age: number;
}

const users: User[] = [
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

const filterByField = <T, key extends keyof T>(
  users: T[],
  property: key,
  value: T[key]
): T[] => {
  return users.filter((user) => user[property] === value);
};

let filteredUser = filterByField(users, "name", "Pooja");
console.log("Filtered user: ", filteredUser);

filteredUser = filterByField(users, "age", 20);
console.log("Filtered user: ", filteredUser);
