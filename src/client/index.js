import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './counter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>JS Drome</h1>
        <Counter num={4}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));