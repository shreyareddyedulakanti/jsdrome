import React, { Component } from 'react';
import { render } from 'react-dom';
import Profile from './profile';
import profileData from '../../profile.json';

class App extends Component {
  render() {
    return (
      <div>
        <h1>JS Drome</h1>
        <Profile profile={profileData}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));