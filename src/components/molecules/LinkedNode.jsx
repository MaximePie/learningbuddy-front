import React from 'react';
import { Handle } from 'react-flow-renderer';

/**
 *
 * This component is only used for React Flow Chart library.
 * Do not use outside a ReactFlow component
 *
 * @param data
 * @returns {*}
 * @constructor
 */
export default function LinkedNode({ data }) {
  const { url, icon, text } = data;
  return (
    <div className="LinkedNode">
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <div className="LinkedNode__body">
        <i className={`fas fab fa-${icon} LinkedNode__icon`}/>
        <a href={url} className="LinkedNode__text">
          {text}
        </a>
      </div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, background: '#555' }}
      />
    </div>
  );
}
