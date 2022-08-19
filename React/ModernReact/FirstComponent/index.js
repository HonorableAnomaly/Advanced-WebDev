// Class Component Hello
//
// class Hello extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello there!</h1>
//         <h1>Hello there!</h1>
//         <h1>Hello there!</h1>
//       </div>
//     );
//   }
// }

// Function Component Hello
//
function Hello() {
  return (
    <div>
      <h1>Hello there!</h1>
      <h1>Hello there!</h1>
      <h1>Hello there!</h1>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));
