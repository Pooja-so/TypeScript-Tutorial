// import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

// interface stateType {
//   count: number;
// }
// // ---------------------------------------------------------
// const initialState: stateType = {
//   count: 0,
// };
// const increment = createAction("increment");
// const decrement = createAction("decrement");

// const rootReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.count += 1;
//     })
//     .addCase(decrement, (state) => {
//       state.count += 1;
//     });
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

/*----------------------------Redux Toolkit: Using createSlice----------------- */

/*----------------------- Redux Store ---------------------------------- */
import { configureStore } from "@reduxjs/toolkit";
import conterReducer from "./counterSlice";
const store = configureStore({
  reducer: {
    counter: conterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
