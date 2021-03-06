// import logo from './logo.svg';
import {useState} from 'react';
import  './App.css';
import Headers from './components/Headers';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Art from './components/Art';
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
    title: 'Color Seeker game',
    date: '2021',
    description:
      'Tile-based platformer coded using Pythons Arcade library!',
    image: gameScreenshot,
    imageText: 'Color Seeker',
    link: 'https://github.com/Krizeon/Color-seeker-game'
  },
  {
    title: 'WiFi Controlled Robot',
    date: 'Fall 2019',
    description:
      'For our final project in our Embedded Systems course, we were given the task of building a hands-on, creative learning experience',
    image: robotPic,
    imageText: 'Image Text',
    link: 'https://github.com/Krizeon/CS435-Robot'
  },
];

function App() {
  const [page, setPage] = useState("Home");
  // const [count, setCount] = useState(0); // states demo

  const handleSetPage = (pageName) => {
    console.log(pageName);
    setPage(pageName);
  }

  return (
    <div className="App">
      <Headers name="Kevin" page={page} setPage={handleSetPage}/>
      <Container maxWidth="lg">
      <Toolbar/>
      {page === "Home" && (<Home posts={posts}/>)}
      {page === "About"  && (<About/>)}
      {page === "Contact" && (<Contact/>)}
      {page === "Projects" && (<Projects/>)}
      {page === "Art" && (<Art/>)}

      </Container>
      <FooterBar/>
    </div>
  );
}

export default App;
