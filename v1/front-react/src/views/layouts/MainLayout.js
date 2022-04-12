import { Component } from "react";
import { Outlet } from "react-router-dom";

class MainLayout extends Component {
  render() {
    return (
      <div>
        <div>MAIN header</div>
        <div>--------------------</div>
        <div>
          <Outlet />
        </div>
        <div>--------------------</div>
        <div>MAIN footer</div>
      </div>
    )
  }
}

export default MainLayout;