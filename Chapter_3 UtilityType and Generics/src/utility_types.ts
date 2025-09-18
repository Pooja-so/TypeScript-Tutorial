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

/* 1. Partial<Type>: used for making properties optional using under "type alias" */
type User = {
  name: string;
  email: string;
};
/* Way 1:
type User2 = {
   name?: string;
   email?: string;
 }; */
/* way 2: */
type User2 = Partial<User>; // All porperties of type User is now optional under using "type User2"

/* 2. Required<Type>: Opposite of Patial<Type>. To make all properties under "type alias" mandatory */
type User3 = Required<User>;
// Direct usage:
const userobj: Required<User> = {
  name: "Pooja",
  email: "pooja@gmail.com",
};

/* 3. ReadOnly<Type>: To make properties readonly. (Unmmutable: Cannot be modified)  */
type Product = {
  productId: number;
  productName: string;
  stock: number;
};
const product: Readonly<Product> = {
  productId: 1234,
  productName: "laptop",
  stock: 20,
};

// product.productId = 2341; Error: Cannot assign to productId because it is a read-only property.

/* 4. Record<keys,Type> 
type UserRecord = {
  name: string;
  email: string;
  gender: string;
};
*/

type UserRecord = Record<"name" | "email" | "gender", string>;

/* Usage: Utility types are used when we want to combine more than one types */
// Task: Create a object users where every user has fieldname "age"
interface UserInfo {
  age: number;
}
type UserName = "john" | "levi" | "elon" | "jack";

// Synatx: Record<keys, type> (means for every key must be of  specified "type")
const users: Record<UserName, UserInfo> = {
  john: { age: 20 },
  levi: { age: 30 },
  elon: { age: 40 },
  jack: { age: 30 },
};

/* 5. Pick<Type, keys> 
  6. Omit<Type, keys> */
interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}

type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country" | "status">;

type Random = Omit<ShippingInfo, "country">;
// Note: Exclude and omit are very much similar, but in
//  In Omit, we are skipping keys(properties) of objects and in exclude we are skipping union data types

/* 7. Exclude<Type, ExcludedUnion> : Excluding data type from the UnionType
  8. Extract<>Type, ExtractedUnion : Extracting data type from the UnionType */
type UnionType = string | number | boolean;
type excludedType = Exclude<UnionType, number | string>; // number and string data type are excluded from UnioinType

type extractedType = Extract<UnionType, boolean>;

/* 9.  NonNullable<Type> - Exclude nullish values like null and undefined from the union type */
type UnionType2 = string | number | null | undefined;
type nonNullType = NonNullable<UnionType2>;

// 10. Parameters<Type>: Returns the parameters of the function as an array
const myFunc = (a: number, b: number) => {
  console.log(a + b);
};
type functionParameters = Parameters<typeof myFunc>;

// 11. ReturnType<Type>: Return the return type of the function
const getName = (): string => {
  return "Pooja";
};
type returnType = ReturnType<typeof getName>;

// 12. ConstructorParameters<Type>: Returns the parameters of the constructor of the class as an array
class UserClass {
  constructor(public name: string, public age: number) {}
}
type classConstructors = ConstructorParameters<typeof UserClass>;

// 13. InstanceType<Type>
type userInstanceType = InstanceType<typeof UserClass>;
const user: userInstanceType = {
  name: "xyz",
  age: 20,
};
