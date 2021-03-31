import React from 'react';
import {PropTypes} from 'prop-types';

export default function DefaultNode({ step, text}) {
  return (
    <p className="DefaultNode">
      <span className="DefaultNode__number">{step}</span>
      {text}
    </p>
  );
}


DefaultNode.propTypes = {
  step: PropTypes.number,
  text: PropTypes.string,
};
