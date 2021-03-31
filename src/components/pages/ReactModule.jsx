import React from 'react';
import reactBanner from "../../images/reactBanner.jpeg";
import ReactFlow from "react-flow-renderer";

import LinkedNode from "../molecules/LinkedNode";

export default function ReactModule() {
  const customTypes = {
    linkedNode: LinkedNode,
  };
  const elements = [
    {
      id: '1',
      type: 'input', // input node
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 },
    },
    // default node
    {
      id: '2',
      // you can also pass a React component as a label
      type: 'linkedNode',
      data: { url: "haha.com", icon: "youtube", text: "Corrigez-vous grâce aux vidéos Youtube" },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      type: 'output', // output node
      data: { label: 'Output Node' },
      position: { x: 250, y: 250 },
    },
    { id: 'e1-2', source: '1', target: '2', animated: true},
    { id: 'e2-3', source: '2', target: '3', animated: true },
  ];

  return (
    <div className="ReactModule">
      <div className="ReactModule__banner-container">
        <img className="ReactModule__banner" src={reactBanner} alt="React"/>
      </div>
      <div className="ReactModule__content">
        <div className="ReactModule__header">
          <h1><i className="fab fa-react ReactModule__header-icon"/>Apprenez React par la pratique</h1>
        </div>
        <div className="ReactModule__body">
          <div className="ReactModule__section">
            <h2><i className="fas fa-question-circle"/> Comment pratiquer ?</h2>
            <ReactFlow
              elements={elements}
              nodeTypes={customTypes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
