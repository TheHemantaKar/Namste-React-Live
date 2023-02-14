import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeInfo: {
        name: "employee_name",
        id: "id",
        age: "employee_age",
        salary: "employee_salary",
      },
    };

    //console.log(this.props.name + " child-constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    //console.log(json);
    this.setState({
      employeeInfo: json,
    });

    /* this.timer = setInterval(() => {
      console.log(" child-componentDidMount set intervel");
    }, 1000); */
    //console.log(this.props.name + " child-componentDidMount");
  }

  componentWillUnmount() {
    //clearInterval(this.timer);
  }
  render() {
    //console.log(this.props.name + " child-render");
    return (
      <div>
        <h1>Employee Profile</h1>
        <img src={this.state.employeeInfo.avatar_url} />
        <h2>Employee Name: {this.state.employeeInfo.name}</h2>
        <h3>Employee ID: {this.state.employeeInfo.id}</h3>
        <h3>Employee Location: {this.state.employeeInfo.location}</h3>
        <h3>Employee Followers: {this.state.employeeInfo.followers}</h3>
      </div>
    );
  }
}

export default ProfileClass;
