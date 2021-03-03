import React from 'react';
import {PropTypes} from 'prop-types';

export default function Textfield({name, type, defaultValue, label, register}) {
  return (
    <div className="Textfield">
      <label htmlFor={name}>
        {label}
        <input
          className="Textfield__input"
          name={name}
          type={type}
          defaultValue={defaultValue}
          ref={register({
            required: true,
            name
          })}
        />
      </label>
    </div>
  );
}

Textfield.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Textfield.defaultProps = {
  type: 'text',
  defaultValue: '',
};
