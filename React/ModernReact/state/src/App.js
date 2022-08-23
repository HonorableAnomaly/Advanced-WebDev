import logo from "./logo.svg";
import Game from "./Game";
import Demo from "./Demo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Game color="purple" />
      <Demo animal="bobcat" food="pineapple" />
    </div>
  );
}

export default App;
