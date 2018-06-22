import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 15px;
  background-color: lime;
`;

const RedButton = Button.extend`
  background-color: red;
`;

export const Team = ({ name, group, onDelete }) => {
  return (
    <div>
      <div>{name}</div>
      <div>Gruppe: {group}</div>
      <RedButton
        onClick={() => {
          onDelete({ name, group });
        }}
      >
        lösch mich
      </RedButton>
    </div>
  );
};

Team.propTypes = {
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
};

// don't export default () => {};
