import React from 'react';
import loginIllustration from "../../images/login-background.jpg"
import { useHistory } from "react-router-dom";

export default function BackgroundIllustration() {
  const history = useHistory();
  const illustration = backgroundIllustration();

  return (
    <img className="BackgroundIllustration" alt="Background illustration" src={illustration}/>
  );

  /**
   * Returns the illustration based on the current location path
   */
  function backgroundIllustration() {
    const locationPath = history.path;

    switch(locationPath) {
      case 'login':
        return loginIllustration;

      case '/':
      default:
        return null;
    }
  }
}
