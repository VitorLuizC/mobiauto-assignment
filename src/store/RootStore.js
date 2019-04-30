import { configure } from "mobx";
import UserStore from "./UserStore";
import UIStore from "./UIStore";

export default class RootStore {
  constructor() {
    configure({ enforceActions: "always" });
    this.userStore = new UserStore();
    this.uiStore = new UIStore();
  }
}
