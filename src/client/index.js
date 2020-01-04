import React, { Component } from 'react';
import { render } from 'react-dom';
import Details from './person-details';

const name = {
  firstname: "Shreya",
  lastname: "Reddy",
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>JS Drome</h1>
        <Details name={name}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));