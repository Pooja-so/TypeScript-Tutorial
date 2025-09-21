// import Parent from "./components/Parent";
// import Box from "./components/Box";
// import Form from "./components/Form";
// import { useState } from "react";

// import UserForm from "./components/Hooks/StateHook";
import ThemeProvider from "./components/Hooks/ThemeProvider";
import Home from "./components/Home";

import Counter from "./components/Hooks/ReducerHook";

function App() {
  // const [value, setValue] = useState<string>("");
  // function isAdult(age: number) {
  //   return age > 18;
  // }
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
      {/* Example 4: State variable 
      <UserForm />
      */}

      {/* Example 4: Context API */}
      <ThemeProvider>
        <Home />
      </ThemeProvider>

      {/* Example 5: useReducer Hook */}
      <Counter />
    </>
  );
}

export default App;
