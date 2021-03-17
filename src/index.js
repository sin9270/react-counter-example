import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./containers/Counter";
import Count from "./containers/Count";
import IncrementButton from "./containers/IncrementButton";
import counter from "./reducers";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const store = createStore(counter);
const rootEl = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/count" component={Count} />
          <Route exact path="/increment" component={IncrementButton} />
          <Route path="/" component={Counter} />
        </Switch>
        <Link to={'/'}><div>トップ</div></Link>
        <Link to={'/count'}><div>カウント</div></Link>
        <Link to={'/increment'}><div>インクリメント</div></Link>
      </BrowserRouter>
    </Provider>,
    rootEl
  );

render();
store.subscribe(render);
