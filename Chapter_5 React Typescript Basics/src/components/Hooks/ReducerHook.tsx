import { useReducer } from "react";

// -------------- Type Declarations ----------------
interface stateType {
  count: number;
}
type ActionType =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number };

// ------------- useReducer Hook paramters -----------------
const initialState: stateType = {
  count: 0,
};

const reducer = (state: stateType, action: ActionType): stateType => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    default:
      return { count: state.count };
  }
};

//----------------- Component-----------------
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = (): void => {
    dispatch({ type: "Increment", payload: 1 });
  };
  const decrement = (): void => {
    dispatch({ type: "Decrement", payload: 1 });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
