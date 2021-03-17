import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./containers/Counter";
import counter from "./reducers";
import { Provider } from 'react-redux';

const store = createStore(counter);
const rootEl = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Counter />
    </Provider>,
    rootEl
  );

render();
store.subscribe(render);
