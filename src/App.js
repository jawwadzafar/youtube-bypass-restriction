import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search />
        <p>Bypass age restricted YouTube content.</p>
        <p>
          <a
            className="App-link"
            href="https://github.com/jawwadzafar/youtube-bypass-restriction"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code: Github
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
