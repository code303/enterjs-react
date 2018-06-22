import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Team } from './Team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Team />
      </div>
    );
  }
}

export default App;
