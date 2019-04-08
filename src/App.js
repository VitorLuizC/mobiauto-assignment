import React, { Component } from "react";
import { Provider } from "mobx-react";
import store from "../src/store";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import routes from "../src/config/routes";
class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <BrowserRouter>
          <Switch>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
