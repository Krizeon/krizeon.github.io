import React from 'react';
import Content from './Content';
import HomepageImage from './HomepageImage';
import ImageCollection from './ImageCollection';
import '../assets/css/home.css';
import Container from '@material-ui/core/Container';


const Home = () => {
  return(
    <div class="home">
      <Container maxWidth="sm">
        <h2 aligncenter>Welcome to my website!</h2>
        <HomepageImage/>
        <ImageCollection/>
        <p>
          This is a placeholder. Just to test!
        </p>
        <a
          className="App-link"
          href="https://github.com/Krizeon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github page
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/kevin-hernandez-3816331a7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <p>This is my Home Page!</p>
        <Content></Content>
      </Container>
    </div>
  );
}

export default Home;
