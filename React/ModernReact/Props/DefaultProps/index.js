class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Pikachu"
          from="Ash"
          img="https://media2.giphy.com/media/G9qfCvxlwGAaQ/giphy.gif?cid=ecf05e47efe0pr0xx8e95wia00fc5xwcr8ux1s5cy03se89v&rid=giphy.gif&ct=g"
        />
        <Hello to="Brock" bangs={4} />
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
