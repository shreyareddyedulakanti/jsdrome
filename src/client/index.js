import React, { Component } from 'react';
import { render } from 'react-dom';
import Person from './person';

const name = {
  firstname: "Shreya",
  lastname: "Reddy",
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>JS Drome</h1>
        <Person name={name}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));