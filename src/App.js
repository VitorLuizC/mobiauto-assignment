import React from "react";
import { Provider } from "mobx-react";
import store from "../src/store";
import HomeContainer from "./containers/Home";

function App() {
  return (
    <Provider {...store}>
      <HomeContainer />
    </Provider>
  );
}

export default App;
