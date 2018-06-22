import React from 'react';

const match = {
  teamA: 'Deutschland',
  teamB: 'Mexiko',
  scoreA: 0,
  scoreB: 1,
};

export const Match = () => {
  return (
    <div>
      <div>{match.teamA}</div>
      <div>{match.teamB}</div>
      <div>{match.scoreA}</div>
      <div>{match.scoreB}</div>
    </div>
  );
};
