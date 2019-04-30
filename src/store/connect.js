import { createElement, Component } from "react";
import { inject, observer } from "mobx-react";

function createContainerFor(component) {
  const Container = class extends Component {
    render() {
      return createElement(component, this.props);
    }
  };

  Object.defineProperty(Container, "name", {
    value: (component.name || "Anonymous") + "Container"
  });

  return Container;
}

function connect(component, mapToProps) {
  if (!component) {
    throw new Error("Component argument is required.");
  }

  if (typeof mapToProps !== "function") {
    throw new Error("mapToProps argument is required.");
  }

  return inject(mapToProps)(observer(createContainerFor(component)));
}

export default connect;
