import React, { Component } from "react";

class CallBack extends Component {
  constructor(props) {
    super(props);
    //instances property jo this ke sath bnate hai(this.myRef)
    this.myRef = null;
    //call back func()/ref
    this.setMyRef = (element) => {
        //html dom ele pass in argument like->element use in this.myRef
      this.myRef = element;
    };
  }
  componentDidMount() {
    // console.log(this.myRef);
    this.myRef.focus();
    this.myRef.style.backgroundColor = "yellow";
  }
  handle = (e) => {
    e.preventDefault();
    console.log(this.myRef.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handle}>
          <lable>Enter Name: </lable>
          <input
            type="text"
            ref={this.setMyRef}
            placeholder="Enter your name"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CallBack;
