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

  render() {
    console.log('RENDERING');
    return (
      <div>
        {this.state.matches.map(match => <Match key={match.key} {...match} />)}
      </div>
    );
  }
}
