// import Parent from "./components/Parent";
// import Box from "./components/Box";
import Form from "./components/Form";
import { useState } from "react";

import UserForm from "./components/Hooks";

// function isAdult(age: number) {
//   return age > 18;
// }
function App() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      {/* Example 1
      <Box name={"Pooja"} age={21} isAdult={isAdult} /> */}
      {/* Example 2
      <Parent>
        <div>I am Child component. Wrapped within parent component.</div>
      </Parent>  */}
      {/* Example 3
        <Form label="Search" value={value} setValue={setValue} /> */}

      <UserForm />
    </>
  );
}

export default App;
