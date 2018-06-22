import React from 'react';

export const Team = ({ name, group }) => {
  return (
    <div>
      <div>{name}</div>
      <div>Gruppe: {group}</div>
    </div>
  );
};

// don't export default () => {};
