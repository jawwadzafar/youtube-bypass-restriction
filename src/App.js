import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search />
        <h5>Bypass age restricted YouTube content</h5>
        <p>Tip: Open this app in Incognito/Private window</p>
      </header>
    </div>
  );
}

export default App;
