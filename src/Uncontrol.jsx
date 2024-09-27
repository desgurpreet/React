import React, { Component, createRef } from "react";

class Uncontrol extends Component {
  constructor(props) {
    super(props);
    this.nameRef = createRef();
    this.ageRef = createRef();
  }
  componentDidMount() {
    console.log(this.nameRef);
    console.log(this.ageRef);
    this.nameRef.current.focus();
    this.ageRef.current.focus();
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log('Name=',this.nameRef.current.value)
    console.log('Age=',this.ageRef.current.value)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Enter Name: </label>
          <input ref={this.nameRef} type="text" placeholder="Name" />
          <br />
          <br />
          <label htmlFor="">Enter Age:</label>
          <input ref={this.ageRef} type="number" placeholder="Age" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Uncontrol;
