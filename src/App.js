import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search />
        <i style={{ marginTop: "16px" }}>Bypass age restricted YouTube content.</i>
        <p>Tip: Open this app in Incognito/Private window</p>
        {/* <p>
          <a
            className="App-link"
            href="https://github.com/jawwadzafar/youtube-bypass-restriction"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code: Github
          </a>
        </p> */}
      </header>
    </div>
  );
}

export default App;
