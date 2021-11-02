import React, { Component } from "react";

export default class CCHello extends Component {
  constructor(props) {
    super(props);
    let num = 7; //local variable
    this.id = 1;  //
    this.state = { name: "avi", age: 30 };
  }

  add2Age = () => {
    this.id++;
    console.log(this.id);
    //this.setState({ age: 31 }); // no dependency
    this.setState((prev) => ({
      age: prev.age + 1,
      grade: 100
    })); // dependency
    //code...

  }

  render() {
    return (
      <div>
        <div>id={this.id}</div> <br />
        <div>state.name = {this.state.name} </div> <br />
        <div>state.age = {this.state.age} </div> <br />
        <div>state.grade = {this.state.grade} </div> <br />
        <button onClick={this.add2Age}>Add 2 Age</button>
      </div>
    );
  }


}