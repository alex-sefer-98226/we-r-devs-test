import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./page/Home/Home";
import { About } from "./page/About/About";
import { Provider } from "react-redux";
import store from "./redux/store";
import Modal from "./containers/modal";

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename={"/"}>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/about"} component={About} />
        </Switch>
        <Modal />
      </HashRouter>
    </Provider>
  );
}

export default App;
