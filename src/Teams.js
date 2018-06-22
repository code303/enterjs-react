import React, { Component } from 'react';
import { Team } from './Team';

export class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: props.teams,
    };

    setTimeout(() => {
      this.setState(prevState => {
        return { teams: [prevState.teams[0]] };
      });
    }, 1000);
  }

  render() {
    console.log('RENDERING');
    return (
      <div>
        {this.state.teams.map(team => <Team key={team.name} {...team} />)}
      </div>
    );
  }
}
