import "./App.css";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Description from "./components/Description";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader>
        <Logo />
        <Search />
        <Description />
      </AppHeader>
    </div>
  );
}

export default App;
