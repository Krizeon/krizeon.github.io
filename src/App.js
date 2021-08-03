// import logo from './logo.svg';
import {useState} from 'react';
import Headers from './components/Headers';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import FooterBar from './components/FooterBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function App() {
  const [page, setPage] = useState("home");
  const [count, setCount] = useState(0); // states demo

  const handleSetPage = (pageName) => {
    console.log(pageName);
    setPage(pageName);
  }

  return (
    <div className="App">
      <Container maxWidth="lg">

      <Headers name="Kevin" setPage={handleSetPage}/>
      {page === "home" && (<Home/>)}
      {page === "about"  && (<About/>)}
      {page === "contact" && (<Contact/>)}
      {page === "projects" && (<Projects/>)}
      <FooterBar/>
      </Container>
      <p>{count}</p>
      <button onClick={()=>{setCount(count + 1)}}>Add to count</button>
      <h1>{page}</h1>
    </div>
  );
}

export default App;
