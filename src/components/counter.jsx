import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 9,
  };

  render() {
    return (
      <div>
        <span className={this.getBatchClasses()}>{this.formatCount()}</span>
        <button
          style={{ fontSize: 30, fontWeight: 700, color: "yellow" }}
          className="badge badge-primary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBatchClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 9 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 9 ? <h1>Nine</h1> : count;
  }
}

export default Counter;
