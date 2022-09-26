import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 9,
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 9 ? "warning" : "primary";
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          style={{ fontSize: 30, fontWeight: 700, color: "yellow" }}
          className="badge badge-primary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 9 ? <h1>Nine</h1> : count;
  }
}

export default Counter;
