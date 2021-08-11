import React from 'react';
import ContentSeparator from './ContentSeparator'
import Container from '@material-ui/core/Container';


const About = () => {
  return(
    <Container maxWidth="sm">
      <div maxWidth="50">
        <h3>Hi there!</h3>
        <h4>My name is Kevin Hernandez. I like to make games and draw portraits.</h4>
        <p align="justify">
          I graduated from Middlebury College in May 2020 with a double major
          in Computer Scince and Studio Art. I am currently located in Southern
          California, but I hope to relocate in the future to experience a new
          place. I am currently working on a 2D platformer game called Color Seeker
          using Python and the  Arcade module! As much as I do enjoy coding, I also
          find enjoyment in designing game aesthetics in Adobe Photoshop and
          making game levels.
        </p>
        <p align="justify">
          I am also currently developing this website as of early August 2021.
          It is my practical dive into React, after I learned a little bit of it
          in my Spring 2020 Software Development class... But we all know what
          happened during that time of the year! Thus, I am applying my best
          React skills here. Please watch this site grow over time!
        </p>
        <p align="justify">
          More personally, I enjoy many other hobbies. I refuse to be contained
          to one box! My current hobbies include swimming, playing piano,
          learning and applying React, developing Color Seeker, drawing in my
          sketchbook, cooking, gardening, playing video games, watching Youtube
          videos, and occasionally hanging out with (vaccinated) friends!
        </p>
        <p align="justify">
          My intention with the formatting of this website is for it to be a
          cross between an artist's website and a tech enthusiast's website.
          However, I am mostly pulling inspiration from artist's websites!
        </p>
        <p align="justify">
          If you got this far, thanks for reading about me! I hope we can chat
          soon. Have a wonderful day!
        </p>
        <i>-Kevin Hernandez</i>
      </div>
      <ContentSeparator/>
    </Container>
  );
}

export default About;
