// import logo from './logo.svg';
import './App.css';
import HomepageImage from './components/HomepageImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomepageImage />
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
      </header>
    </div>
  );
}

export default App;
