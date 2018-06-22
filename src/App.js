import React, { Component } from 'react';
import './App.css';
import { Team } from './Team';
import { Match } from './Match';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Team />
        <Match />
      </div>
    );
  }
}

export default App;
