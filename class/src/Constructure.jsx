import React, { Component } from "react";
class Stu extends Component {
  constructor() {
    super(); //for calling parent func() and access property constructure
    console.log("Constructor from student");
  }
  render() {
    return (
      <>
        <h1>Hello</h1>
      </>
    );
  }
}
export default Stu;

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const std = new Student("gs", 25);
console.log(std);
