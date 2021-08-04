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
    title: 'Color Seeker',
    date: '2021',
    description:
      'Tile-based platformer coded using Pythons Arcade library!',
    image: gameScreenshot,
    imageText: 'Cool Text',
  },
  {
    title: 'WiFi Controlled Robot',
    date: 'Fall 2019',
    description:
      'For our final project in our Embedded Systems course, we were given the task of building a hands-on, creative learning experience',
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

      <Headers name="Kevin" page={page} setPage={handleSetPage}/>
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
