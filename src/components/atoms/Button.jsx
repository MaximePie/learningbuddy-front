import React from 'react';

import {PropTypes} from 'prop-types';

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default function Button({onClick, text}) {
  return (
    <button className="Button" onClick={onClick}>{text}</button>
  );
}
