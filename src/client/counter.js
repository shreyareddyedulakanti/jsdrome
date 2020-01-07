import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num,
    }
  }

  multiplyME = () => {
    const a = 2;
    this.setState({
      num: this.state.num * a,
    })
  }

  render() {
    return (
      <div>
        <h1>Counter Shoot</h1>
        <p><b>Count:</b> { this.state.num }</p>
        <button onClick={ this.multiplyME }>*</button>
      </div>
    );
  }
}

export default Counter;