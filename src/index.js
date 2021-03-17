import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers";

const store = createStore(counter);
const rootEl = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      onOverride={() => store.dispatch({ type: "OVERRIDE" })}
      onChangeNum={(num) =>
        store.dispatch({ type: "CHANGE_NUM", payload: num })
      }
    />,
    rootEl
  );

render();
store.subscribe(render);
