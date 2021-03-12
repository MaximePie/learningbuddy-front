import React from 'react';

import {PropTypes} from 'prop-types';


export default function Button({onClick, text}) {
  return (
    <button className="Button" onClick={onClick}>{text}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '',
};
