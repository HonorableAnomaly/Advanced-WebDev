class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My image!</h1>
        <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
      </div>
    );
  }
}

function mood() {
  const moods = ["angry", "depressed", "happy", "hungry", "contemplative"];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemoJS extends React.Component {
  render() {
    return (
      <div>
        <h1>My mood ring says I'm currently {mood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
ReactDOM.render(<JSXDemoJS />, document.getElementById("js"));
