import React from 'react';
import * as moment from 'moment';

export const Match = ({ date, teamA, teamB, scoreA, scoreB }) => {
  return (
    <div>
      <div>{moment(date).format('DD.MM.YYYY hh:ss')}</div>
      <div>{teamA}</div>
      <div>{teamB}</div>
      <div>{scoreA}</div>
      <div>{scoreB}</div>
    </div>
  );
};
