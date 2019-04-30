import { action, observable, decorate } from "mobx";
import remotedev from "mobx-remotedev";

const _defaultInitialState = {
  isFetching: false
};

class UIStore {
  constructor(initialState) {
    this.setInitialState(initialState || _defaultInitialState);
  }

  setInitialState = initialState => {
    const { isFetching } = initialState;

    this.isFetching = isFetching;
  };

  setIsFetching = isFetching => {
    this.isFetching = isFetching;
  };
}

export default remotedev(
  decorate(UIStore, {
    isFetching: observable,
    setInitialState: action,
    setIsFetching: action
  })
);
