import React, { Component } from "react";

class ChangeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
//   without constructor using state
//   state = {
    // name: this.props.name,
//   };
  changeName() {
    this.setState({
      name: "Welcome",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input type="button" value="Click" onClick={() => this.changeName()} />
      </div>
    );
  }
}

export default ChangeClass;
