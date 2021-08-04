// import logo from './logo.svg';
import {useState} from 'react';
import  './App.css';
import Headers from './components/Headers';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import FooterBar from './components/FooterBar';
import gameScreenshot from './assets/images/color-seeker-screenshot1.jpg'
import robotPic from './assets/images/robot-front.jpeg'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

// <p>{count}</p>
// <button onClick={()=>{setCount(count + 1)}}>Add to count</button>

const posts = [
  {
    title: 'My Game',
    date: '2021',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: gameScreenshot,
    imageText: 'Cool Text',
  },
  {
    title: 'WiFi-controlled Robot',
    date: 'Fall 2019',
    description:
      'Here is a block of test that I put here on purpose!.',
    image: robotPic,
    imageText: 'Image Text',
  },
];

function App() {
  const [page, setPage] = useState("home");
  // const [count, setCount] = useState(0); // states demo

  const handleSetPage = (pageName) => {
    console.log(pageName);
    setPage(pageName);
  }

  return (
    <div className="App">
      <Container maxWidth="lg">

      <Headers name="Kevin" setPage={handleSetPage}/>
      <Toolbar/>
      <h2>{page}</h2>
      {page === "home" && (<Home posts={posts}/>)}
      {page === "about"  && (<About/>)}
      {page === "contact" && (<Contact/>)}
      {page === "projects" && (<Projects/>)}
      <FooterBar/>
      </Container>

    </div>
  );
}

export default App;
