import React from 'react';
import ContentSeparator from './ContentSeparator'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(75),
      height: theme.spacing(50),
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return(
    <Container maxWidth="sm">
      <div maxWidth="50">
        <h3>Hi there!</h3>
        <h4>My name is Kevin Hernandez. I like to make games and draw portraits.</h4>
        I graduated from Middlebury College in May 2020 with a double major
        in Computer Scince and Studio Art. I am currently located in Southern
        California, but I hope to relocate in the future to experience a new
        place. I am currently working on a 2D platformer game called Color Seeker
        using Python and the  Arcade module! As much as I do enjoy coding, I also
        find enjoyment in designing game aesthetics in Adobe Photoshop and
        making game levels.
      </div>
      <ContentSeparator/>
    </Container>
  );
}

export default About;
