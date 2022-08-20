class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machine s1="🍇" s2="🍒" s3="🍋" />
        <Machine s1="🍒" s2="🍒" s3="🍒" />
        <Machine s1="🍇" s2="🍌" s3="🍒" />
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
