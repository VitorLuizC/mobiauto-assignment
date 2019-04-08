import * as React from "react";
import { connect } from "../../store";

import HomeContainer from "./HomeContainer";
import HomeComponent from "./HomeComponent";

const Container = connect(
  HomeContainer,
  ["userStore", "uiStore"]
);

function HomeMain(props) {
  return <Container viewComponent={HomeComponent} {...props} />;
}

export default HomeMain;
