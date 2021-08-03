import React from 'react';
import Content from './Content';
import HomepageImage from './HomepageImage';
import ImageCollection from './ImageCollection';
import '../assets/css/home.css';
import Container from '@material-ui/core/Container';
import ContentSeparator from './ContentSeparator'


const Home = () => {
  return(
    <div class="home">
      <Container maxWidth="sm">
        <h2>Welcome to my website!</h2>
        <HomepageImage/>
        <ContentSeparator/>
        <p>
          This is a placeholder. Just to test!
        </p>
        <p>This is my Home Page!</p>
        <Content></Content>
      </Container>
    </div>
  );
}

export default Home;
