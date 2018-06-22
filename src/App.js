import React, { Component } from 'react';
import './App.css';
import { Teams } from './Teams';
import { Matches } from './Matches';

const matches = [
  {
    date: '2018-06-17 17:00',
    teamA: 'Deutschland',
    teamB: 'Mexiko',
    scoreA: '0',
    scoreB: '012',
  },
  {
    date: '2018-06-23 17:00',
    teamA: 'Deutschland',
    teamB: 'Schweden',
    scoreA: '5',
    scoreB: '0',
  },
];

const teams = [
  { name: 'Deutschland', group: 'F' },
  { name: 'Schweden', group: 'F' },
  { name: 'Mexiko', group: 'F' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Teams teams={teams} />
        <hr />

        <Matches matches={matches} />
      </div>
    );
  }
}

export default App;
