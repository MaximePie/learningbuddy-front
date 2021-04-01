import React, {useEffect} from 'react';
import reactBanner from "../../images/reactBanner.jpeg";
import ReactFlow from "react-flow-renderer";
import ChapterCard from "../molecules/ChapterCard";
import axios from "axios";

import DefaultNode from "../molecules/DefaultNode";
const url = "http://127.0.0.1:4001/chapters";

export default function ReactModule() {
  const [chapters, setChapters] = React.useState([]);

  useEffect(fetchLessons, []);

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
            <h2><i className="fas fa-question-circle"/>Comment pratiquer ?</h2>
            <ReactFlow
              elements={flowElements()}
              defaultZoom={1.5}
            />
          </div>
          <div className="ReactModule__section">
            <h2>Choisissez un chapitre !</h2>
            <div>
              {chapters.map((chapter, index) => (
                <ChapterCard key={index} chapter={chapter}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /**
   * Fetch the lessons and set it
   */
  function fetchLessons() {
    axios.get(url).then(response => {
      setChapters(response.data.chapters);
    })
  }

  /**
   *
   * @return [] An array of Nodes Elements to be displayed
   */
  function flowElements() {
    return [
      {
        id: '1',
        type: 'input',
        data: {label:  <DefaultNode
            text="Choisissez un chapitre et un exercice"
            image="search"
          />},
        position: { x: 0, y: 10 },
        sourcePosition: 'right'
      },
      {
        id: '2',
        type: 'default',
        data: { label: <DefaultNode
            text="Consultez la démo"
            image="youtube"
            url="https://www.youtube.com/playlist?list=PLxPhnioBp0U15Q3HOkrvgpU_e2aL3PAh3"
          /> },
        position: { x: 200, y: 10 },
        targetPosition: 'left',
        sourcePosition: 'right'
      },
      {
        id: '3',
        type: 'default',
        data: { label: <DefaultNode image="tools" text="Pratiquez"/> },
        position: { x: 400, y: 10 },
        targetPosition: 'left',
        sourcePosition: 'right'
      },
      {
        id: '4',
        type: 'default',
        data: { label: <DefaultNode
            text="Corrigez-vous à l'aide des vidéos"
            image="youtube"
            url="https://www.youtube.com/playlist?list=PLxPhnioBp0U15Q3HOkrvgpU_e2aL3PAh3"
          /> },
        position: { x: 600, y: 10 },
        targetPosition: 'left',
        sourcePosition: 'right'
      },
      {
        id: '5',
        type: 'default',
        data: { label: <DefaultNode
            text="Lisez le résumé"
            image="github"
            url="https://github.com/MaximePie/react-entrainement/blob/master/README.md#sommaire"
          /> },
        position: { x: 800, y: 10 },
        targetPosition: 'left',
        sourcePosition: 'right'
      },
      {
        id: '6',
        type: 'output',
        data: { label: <DefaultNode
            text="Appliquez vos connaissances dans vos propres projets"
            image="medal"
          /> },
        position: { x: 1000, y: 10 },
        targetPosition: 'left',
      },
      { id: 'e1-2', source: '1', target: '2', animated: true},
      { id: 'e2-3', source: '2', target: '3', animated: true },
      { id: 'e3-4', source: '3', target: '4', animated: true },
      { id: 'e4-5', source: '4', target: '5', animated: true },
      { id: 'e5-6', source: '5', target: '6', animated: true },
    ];
  }
}
