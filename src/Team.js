import React from 'react';

import { PropTypes } from 'prop-types';

export const Team = ({ name, group }) => {
  return (
    <div>
      <div>{name}</div>
      <div>Gruppe: {group}</div>
    </div>
  );
};

Team.propTypes = {
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
};

// don't export default () => {};
