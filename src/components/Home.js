import React from 'react';
import Content from './Content';
import HomepageImage from './HomepageImage';
import ImageCollection from './ImageCollection';
import BlogPost from './BlogPost';
import '../assets/css/home.css';
import Container from '@material-ui/core/Container';
import ContentSeparator from './ContentSeparator';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(75),
    },
  },
}));

const Home = ({posts}) => {
  const classes = useStyles();
  return(
      <Container maxWidth="sm" className={classes.root}>
          <h1 class='h1'>Kevin Hernandez</h1>
        <HomepageImage/>
        <div maxWidth="50">
          <p align="justify">
            Here is a project I’ve been working on using React with the MaterialUI
             framework. Here you can see some essential info about me, including a
             projects, home, contact, and about page! A big thank you to Stephanie
             for guiding me through the process of building a React website!
          </p>
          <ContentSeparator/>
          {posts.map((post) => (
                <BlogPost key={post.title} post={post} />
              ))}
        </div>
      </Container>
  );
}

export default Home;
