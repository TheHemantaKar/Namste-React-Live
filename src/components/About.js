/* import { Outlet } from "react-router-dom"; */
import { Component } from "react";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";

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
          <UserContext.Consumer>
            {({ user }) => (
              <h1 className="font-bold">
                {user.name} - {user.email}
              </h1>
            )}
          </UserContext.Consumer>
          <ProfileClass name={"First Child"} />
          <Profile name={"Second child"} />
        </div>
      </>
    );
  }
}

export default About;
