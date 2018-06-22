import React, { Component } from 'react';
import { Match } from './Match';

export class Matches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: props.matches,
    };

    /*setTimeout(() => {
      this.setState(prevState => {
        return { matches: [prevState.matches[0]] };
      });
    }, 1000);*/
  }

  handleDelete(m) {
    this.setState(prevState => {
      const matches = prevState.matches.filter(match => match.date !== m.date);
      return { matches };
    });
  }

  render() {
    console.log('RENDERING');
    return (
      <div>
        {this.state.matches.map(match => (
          <Match
            key={match.date}
            {...match}
            onDelete={obj => this.handleDelete(obj)}
          />
        ))}
      </div>
    );
  }
}
