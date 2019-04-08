// @flow

import { action, observable, computed, decorate } from "mobx";
import remotedev from "mobx-remotedev";

const _defaultInitialState = {
  welcome: "Bem vindo ao teste de frontend mobiauto :)"
};

class UserStore {
  constructor(initialState) {
    this.setInitialState(initialState || _defaultInitialState);
  }

  setInitialState = initialState => {
    const { welcome } = initialState;

    this.welcome = welcome;
  };
}

export default remotedev(
  decorate(UserStore, {
    welcome: observable,
    setInitialState: action
  })
);
