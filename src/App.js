import React, { Component } from 'react';
import './App.css';
import { Team } from './Team';
import { Match } from './Match';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Team name="Schweden" group="F" />
        <Team name="Deutschland" group="F" />
        <Team name="Mexiko" group="F" />
        <Team name="Südkorea" group="F" />
        <hr />
        <Match
          date="2018-06-17 17:00"
          teamA="Deutschland"
          teamB="Mexiko"
          scoreA="0"
          scoreB="1"
        />
      </div>
    );
  }
}

export default App;
