import * as React from "react";

class HomeComponent extends React.Component {
  render() {
    const { welcome } = this.props;
    console.log("welcome", welcome);

    return (
      <React.Fragment>
        <h2>{welcome}</h2>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
