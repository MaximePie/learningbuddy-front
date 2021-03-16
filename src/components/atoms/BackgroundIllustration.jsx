import React from 'react';
import loginIllustration from "../../images/login-background.jpg"

export default function BackgroundIllustration() {

  const backgroundIllustration = loginIllustration;

  return (
    <img className="BackgroundIllustration" alt="Background illustration" src={backgroundIllustration}/>
  );
}
