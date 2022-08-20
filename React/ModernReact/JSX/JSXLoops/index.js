class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Ash Ketchum" hobbies={["eating", "whining", "befriending every Pokémon"]} />
        <Friend name="Misty" hobbies={["eating", "complaining", "training water Pokémon"]} />
      </div>
    );
  }
}

// React 17
ReactDOM.render(<App />, document.getElementById("root"));

// React 18
// const rootElement = document.getElementById("root");
// const root = ReactDOMClient.createRoot(rootElement);
// root.render(<App />);
