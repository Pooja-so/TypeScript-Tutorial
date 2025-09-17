/* ----------------------- 1. Classes in Typescript ------------------- */
/* Parent class */
class Player {
  public id: string;
  constructor(
    protected height: number,
    protected weight: number,
    protected healthPoint: number
  ) {
    this.id = crypto.randomUUID();
    this.height = height;
    this.weight = weight;
    this.healthPoint = healthPoint;
  }

  /* Getter functions */
  get getHeight(): number {
    return this.height;
  }
  get getWeight(): number {
    return this.weight;
  }

  /* Setter Function */
  set setHeight(heightValue: number) {
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
  constructor(
    height: number,
    weight: number,
    healthPoint: number,
    private level: number
  ) {
    super(height, weight, healthPoint);
    this.level = level;
  }
}

/*----------- Class with Interfaces---------- */
interface ProductType {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
}

interface RetrieveID {
  getId: () => string;
}

class Product implements ProductType, RetrieveID {
  private id: string = crypto.randomUUID();

  constructor(public name: string, public price: number, public stock: number) {
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
const btn1 = document.getElementById("btn") as HTMLElement;
const btn2 = <HTMLElement>document.getElementById("btn");
// btn1.onclick;
// btn2.onclick;

// Third way: Using NOT operator to make it not-null when values is null (Not come under Type Assertion)
const btn3 = document.getElementById("btn")!;
// btn3.onclick;

// Example 2. Image Element (As id and class does not help in predicting the eaxct the type of DOM element it will refer to,
// We must use type assertion for acessing the desired properties of the DOM node)
const image1 = document.getElementById("photo") as HTMLImageElement;
// image1.src;
const image2 = <HTMLImageElement>document.getElementById("photo");
// image1.src;
// Third way: We must specify the exact HTML tag in order to use Logical NOT(!). Here getElementById() method won't work.
const image3 = document.querySelector("img")!;
// image3.src;

// Example 3: Accessing Form and its elements
const submissionForm = document.getElementById(
  "submission-form"
) as HTMLFormElement;

const numeric = document.querySelector(
  "#submission-form > input"
) as HTMLInputElement;

submissionForm.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  // Way 1: Modifying an existing elemnent
  const num = Number(numeric.value);
  const answer = document.getElementById("answer") as HTMLParagraphElement;
  answer.textContent += String(num + 20);

  // Way 2: Creating node
  const h2 = document.createElement("h2");
  const body = document.querySelector("body") as HTMLBodyElement;
  h2.textContent = String(num + 20);
  body.append(h2);
});

/*-----------------------------3. Object  with Dynamic Key in Typescript----------------------------*/
interface Person {
  // [key: string]: string;
  name: string;
  email: string;
}

const personObj: Person = {
  name: "Pooja",
  email: "pooja@gmail.com",
};

const getName = (): string | undefined => {
  return personObj["name"];
};

const getEmail = (): string | undefined => {
  return personObj["email"];
};

const getData = (key: keyof Person): string => {
  return personObj[key];
};

/* Way 2:
interface Person {
  [key: string] : string
}
const getData1 = (key:string) => {
  return personObj[key];
};
*/

// ---------- Type Assertion in Object ------------------
interface Person2{
  name: string;
  email: string;
}

const personObj2 : Person2= {
  name:"Raina",
  email: "raina@gmail.com"
}

// works fine as const will not ne reassigned, remain unchnaged in future.
const key1 = "name";
personObj2[key1];

// In case of let, the value can get change in future, so in order to ensure 
// that the value of key2 in future will always be a key of Person2 interface we'll use "keyof" operator as type assertion
let key2 = "email";
personObj2[key2 as keyof Person2]; // Way 1: On the basis of interface if accessible
personObj2[key2 as keyof typeof personObj2]; // Way 2: On the basis of Object if interface is not accessible Here (typeof personObj2 === Person2) 
