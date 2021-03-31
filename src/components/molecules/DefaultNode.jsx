import React from 'react';
import {PropTypes} from 'prop-types';
import select from "../../images/select.svg";

/**
 * This component is exclusively used for React-Flow-Renderer Library
 * Do not use outside an elements destined to be used on a ReactFlow component
 */
export default function DefaultNode({step, text, url, image}) {


  return (
    <>
      <p className="DefaultNode">
        <i className={`DefaultNode__icon ${fasOrFab()} fa-${image}`}/>
        {url ? <a href={url}>{text}</a> : text}
      </p>
    </>
  );

  /**
   * Returns the fab class, or fas class depending of the desired image
   */
  function fasOrFab() {
    return ["youtube", "github"].includes(image) ? 'fab' : 'fas';
  }
}


DefaultNode.propTypes = {
  text: PropTypes.string.isRequired, // The text we want to display as a label inside the node
  image: PropTypes.string, // Identifies the image we want to display on the tile
  url: PropTypes.string, // Modifies the text to make it redirect to the given URL
};

DefaultNode.defaultProps = {
  image: '',
  url: '',
};
