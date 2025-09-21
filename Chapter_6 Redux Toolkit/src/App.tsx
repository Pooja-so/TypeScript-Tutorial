import { useState } from "react";
import { increment, incrementByValue, decrement } from "./counterSlice";
import { type RootState, type AppDispatch } from "./store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);

  const [value, setValue] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const incrementByValueHandler = () => {
    dispatch(incrementByValue(value));
  };

  const decrementHanlder = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>Redux Toolkit</h1>
      <h2>Count: {count}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={incrementByValueHandler}>Add By Value</button>
      <button disabled={count === 0} onClick={decrementHanlder}>
        Subtract
      </button>
      <button onClick={() => dispatch(increment())}>Add</button>
    </>
  );
}

export default App;
