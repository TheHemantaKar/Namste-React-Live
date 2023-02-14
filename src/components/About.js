/* import { Outlet } from "react-router-dom"; */
import { Component } from "react";

import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("parent-constructor");
  }
  componentDidMount() {
    //console.log("parent-componentDidMount");
  }
  render() {
    //console.log("parent-render");
    return (
      <>
        <div>
          <h1>About us page</h1>
          <p>Tis is Namaste React About Us page</p>
          <ProfileClass name={"First Child"} />
          <Profile name={"Second child"} />
        </div>
      </>
    );
  }
}

export default About;
