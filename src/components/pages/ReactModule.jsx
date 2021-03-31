import React from 'react';
import reactBanner from "../../images/reactBanner.jpeg";

export default function ReactModule() {
  return (
    <div className="ReactModule">
      <img className="ReactModule__banner" src={reactBanner} alt="React"/>
      <div className="ReactModule__header">
        <i className="fas fa-heart ReactModule__header-icon"/>
        <h1>Apprenez React par la pratique</h1>
      </div>
      <div className="ReactModule__body">
        <div className="ReactModule__section">
          <h2>(?) Comment pratiquer ?</h2>
        </div>

      </div>
    </div>
  );
}
