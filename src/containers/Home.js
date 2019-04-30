import Home from "../components/Home";
import { connect } from "../store";

function toProps({ uiStore: ui, userStore: user }) {
  return {
    welcome: user.welcome
  };
}

export default connect(
  Home,
  toProps
);
