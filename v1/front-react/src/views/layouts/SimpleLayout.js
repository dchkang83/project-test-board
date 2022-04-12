import { Component } from "react";
import { Outlet } from "react-router-dom";

class SimpleLayout extends Component {
  render() {
    return (
      <div>
        <div>SIMPLE header</div>
        <div>
          <Outlet />
        </div>
        <div>SIMPLE footer</div>
      </div>
    )
  }
}

export default SimpleLayout;