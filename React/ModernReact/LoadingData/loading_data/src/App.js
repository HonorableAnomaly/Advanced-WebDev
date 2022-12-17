import logo from "./logo.svg";
import "./App.css";
import GithubUserInfo from "./GithubUserInfo";

function App() {
  return (
    <div className='App'>
      <GithubUserInfo username='facebook' />
      <GithubUserInfo username='instagram' />
    </div>
  );
}

export default App;
