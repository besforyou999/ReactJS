import React from "react";
import PropTypes from "prop-types"

class App extends React.Component { 
  constructor(props) {
    super(props)
    console.log("Hello");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  componentDidMount() {
    console.log("component rendered");
  };
  componentDidUpdate() {
    console.log("i just updated");
  }
  render() { 
    console.log("i am rendering");
    return (
      <div>
        <h1>I am a class {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

// everytime react call setState, it calls render() too