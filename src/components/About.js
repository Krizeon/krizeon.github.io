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
          Welcome.  I started this website in early August to refine my practical
          React skills after an introduction to React in a Software Development
          class at Middlebury College.  Consistent with my educational background
          - a double major in Computer Science and Studio Art from Middlebury
          College -  this website is intended to reflect elements of
          [and formatting from] both an artist's website and a tech enthusiast's
          website.
        </p>
        <p align="justify">
          I am currently working on a 2D platformer game called Color Seeker
          using Python and the Arcade module.  In addition to the real 
          satisfaction that I get from  coding, I enjoy both designing game
          aesthetics in Adobe Photoshop and making game levels.
        </p>
        <p align="justify">
          I am currently working on a 2D platformer game called Color Seeker
          using Python and the Arcade module.  In addition to the real
          satisfaction that I get from  coding, I enjoy both designing game
          aesthetics in Adobe Photoshop and making game levels.
        </p>
        <p align="justify">
          I am currently located in Southern California, but plan to relocate
          in the future for work experience.  Please contact me using the
          contact information above if you would like to discuss potential work
          opportunities or if you have any questions regarding this website.
          I appreciate your interest.  Enjoy the website.
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
