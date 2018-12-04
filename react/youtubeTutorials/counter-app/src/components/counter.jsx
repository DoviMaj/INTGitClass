import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tag: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 30,
    fontWieght: "bold"
  };

  // one solution for 'this', the better way is arow function.
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    // console.log("Increment clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tag.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tag.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tag.length === 0 && <p>Please create a new tag!</p>}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
//continue on youtube 1:15:50
