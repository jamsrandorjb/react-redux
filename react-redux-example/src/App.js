import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(increment(5))}
      >
        +
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(decrement(1))}
      >
        -
      </button>
      {isLogged ? <h3>Some protected data</h3> : ""}
    </div>
  );
}

export default App;
