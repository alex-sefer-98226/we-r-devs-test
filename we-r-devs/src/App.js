import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./page/home/Home";
import { About } from "./page/about/About";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact={true} path={"/"} component={Home} />
            <Route exact={true} path={"/about"} component={About} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
