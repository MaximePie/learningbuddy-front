import React from 'react';
import reactBanner from "../../images/reactBanner.jpeg";
import ReactFlow from "react-flow-renderer";

import LinkedNode from "../molecules/LinkedNode";
import DefaultNode from "../molecules/DefaultNode";

export default function ReactModule() {
  const customTypes = {
    linkedNode: LinkedNode,
  };
  const elements = [
    {
      id: '1',
      type: 'input',
      data: { label:  <DefaultNode text="Choisissez un chapitre et un exercice" step={1}/>},
      position: { x: 0, y: 25 },
      sourcePosition: 'right'
    },
    {
      id: '2',
      type: 'default',
      data: { label: <DefaultNode step={2} text="Lisez les instructions"/> },
      position: { x: 300, y: 0 },
      targetPosition: 'left',
      sourcePosition: 'right'
    },
    {
      id: '3',
      // you can also pass a React component as a label
      type: 'linkedNode',
      data: {
        url: "https://youtube.com/playlist?list=PLxPhnioBp0U15Q3HOkrvgpU_e2aL3PAh3",
        icon: "youtube",
        text: "Corrigez-vous grâce aux vidéos Youtube"
      },
      position: { x: 900, y: 50 },
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
              defaultZoom={1.5}
            />
          </div>
          <div className="ReactModule__section">
            <h2>Choisissez un chapitre !</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
