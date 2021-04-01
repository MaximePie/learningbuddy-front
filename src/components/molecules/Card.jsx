import React from 'react';
import {PropTypes} from 'prop-types';

export default function Card({ children, title }) {
  return (
    <div className="Card">
      <h3 className="Card__name">{title}</h3>
      { children }
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
