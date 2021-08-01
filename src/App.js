// import logo from './logo.svg';
import {useState} from 'react';
import Headers from './components/Headers';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const [page, setPage] = useState("home");
  const [count, setCount] = useState(0);

  const handleSetPage = (pageName) => {
    console.log(pageName);
    setPage(pageName);
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={()=>{setCount(count + 1)}}>Add to count</button>

      <p>{page}</p>
      <Headers name="Kevin" setPage={handleSetPage}/>
      {page === "home" && (<Home/>)}
      {page === "about"  && (<About/>)}
      {page === "contact" && (<Contact/>)}
      {page === "projects" && (<Projects/>)}
    </div>
  );
}

export default App;
