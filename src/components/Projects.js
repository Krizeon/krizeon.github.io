import React from 'react';
import ContentSeparator from './ContentSeparator'

const Projects = () => {
  return(
    <>
      <p>This is my Projects Page! Please wait for this page to be updated
      with more content in the future.</p>
    <p>In the meantime, check out the following:</p>
      <a href="https://github.com/Krizeon/Color-seeker-game">
        Color Seeker game - Python
      </a>
      <div></div>
      <a href="https://github.com/Krizeon/CS435-Robot">
        Embedded Systems Robot Project - MicroPython, ESP32 hardware
      </a>
      <ContentSeparator/>
    </>
  );
}

export default Projects;
