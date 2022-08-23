import logo from "./logo.svg";
import Game from "./Game";
import Demo from "./Demo";
import Rando from "./Rando";
import Button from "./Button";
import BrokenClick from "./BrokenClick";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Game color="purple" />
      <Demo animal="bobcat" food="pineapple" />
      <Rando maxNum={7} />
      <Button />
      <BrokenClick />
    </div>
  );
}

export default App;
