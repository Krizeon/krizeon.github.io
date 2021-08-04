import React from 'react';
import Content from './Content';
import HomepageImage from './HomepageImage';
import ImageCollection from './ImageCollection';
import BlogPost from './BlogPost'
import '../assets/css/home.css';
import Container from '@material-ui/core/Container';
import ContentSeparator from './ContentSeparator'


const Home = ({posts}) => {
  return(
    <div class="home">
      <Container maxWidth="md" class="center">
        <h1>Kevin Hernandez</h1>
        <HomepageImage/>
        <p align="justify">
          Here is a project I’ve been working on using React with the MaterialUI
           framework. Here you can see some essential info about me, including a
           projects, home, contact, and about page! A big thank you to Stephanie
           for guiding me through the process of building a React website!
        </p>
        <ContentSeparator/>
        <p>
          This is a placeholder. Just to test!
        </p>
      <ContentSeparator/>
        {posts.map((post) => (
              <BlogPost key={post.title} post={post} />
            ))}
        <p>This is my Home Page!</p>
        <Content></Content>
      </Container>
    </div>
  );
}

export default Home;
