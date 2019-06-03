import React, { Component } from "react";

class valueer extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    // if(prevProps.counte.value !== this.props.counter.value) {
    //   Ajax call and get new data fromserver
    // }
  }

  componentWillUnmount() {
    console.log('Counter Unmount');
  }

  // state = {
  //   value: this.props.counter.value
  //   // tag: ["tag1", "tag2", "tag3"]
  // };

  styles = {
    fontSize: 20,
    fontWieght: "bold"
  };

  // one solution for 'this', the better way is arow function.
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = product => {
  //   // console.log("Increment clicked", this);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderTags() {
  //   if (this.state.tag.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tag.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    console.log('Counter Rendered');

    const {onClick, onDelete, onIncrement, counters, counter} = this.props;

    return (
      <div>
        {/* <h4>Counter #{this.props.id}</h4> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatvalue()}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          // style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        {/* {this.state.tag.length === 0 && <p>Please create a new tag!</p>}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default valueer;
//continue on youtube 1:15:50
