import React, { Component } from 'react';
import { Team } from './Team';

export class Teams extends Component {
  constructor(props) {
    super(props);

    //this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      teams: props.teams,
    };

    setTimeout(() => {
      this.setState(prevState => {
        const teams = [...prevState.teams];
        teams[0].name = 'Klaus';

        return { teams };
      });
    }, 1000);
  }

  handleDelete(t) {
    this.setState(prevState => {
      const teams = prevState.teams.filter(team => team.name !== t.name);
      return { teams };
    });
  }

  render() {
    console.log('RENDERING');
    return (
      <div>
        {this.state.teams.map(team => (
          <Team
            key={team.name}
            {...team}
            onDelete={obj => this.handleDelete(obj)}
          />
        ))}
      </div>
    );
  }
}
