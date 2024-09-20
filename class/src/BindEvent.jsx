import React, { Component } from "react";

class BindEvent extends Component {
  constructor() {
    super();
    // at time we call bind in constructor
    // this.HandleEvent = this.HandleEvent.bind(this);
    this.state = {
      name: "gs",
    };
  }
  //   binding with regular function
  HandleEvent() {
    this.setState({
      name: "hs",
    });
  }

  // HandleEvent=()=> {
  //   this.setState({
  //     name: "hs",
  //   });
  // }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button type="button" onClick={() => this.HandleEvent()}>
          HandleEvent
        </button>
        {/* <button type="button" onClick={this.HandleEvent}>
          HandleEvent
        </button>  with arrow function*/}
        {/* <button type="button" onClick={this.HandleEvent.bind(this)}>
          HandleEvent
        </button> binding with regular function */}
        {/* <button type="button" onClick={this.HandleEvent}>
          HandleEvent
        </button>  for constructure*/}
      </div>
    );
  }
}

export default BindEvent;
