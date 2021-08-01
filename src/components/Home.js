import React from 'react';
import HomepageImage from './HomepageImage';
import '../assets/css/home.css';

const Home = () => {
  return(
    <div class="home">
      <HomepageImage/>
      <h1>
        Kevin Hernandez
      </h1>
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
    </div>
  );
}

export default Home;
