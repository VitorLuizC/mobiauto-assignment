import * as React from "react";

class HomeContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      userStore: { welcome }
    } = this.props;
    const viewComponentProps = {
      welcome
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default HomeContainer;
