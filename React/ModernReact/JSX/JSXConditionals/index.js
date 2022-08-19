function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

// Example 1
// class NumPicker extends React.Component {
//   render() {
//     const num = getNum();
//     return (
//       <div>
//         <h1>Your number is: {num}</h1>
//         <p>{num === 7 ? "Congrats! You're lucky!" : "Unfortunate..."}</p>
//         {num === 7 && <img src="https://media4.giphy.com/media/89x4osEodHEoo/200w.webp?cid=ecf05e470vbs8mj1zbz4z98on5fazohs9q2qp1zw7ac7do0v&rid=200w.webp&ct=g" />}
//       </div>
//     );
//   }
// }

// Example 2
class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>Congrats! You're lucky!</h2>
          <img src="https://media4.giphy.com/media/89x4osEodHEoo/200w.webp?cid=ecf05e470vbs8mj1zbz4z98on5fazohs9q2qp1zw7ac7do0v&rid=200w.webp&ct=g" />
        </div>
      );
    } else {
      msg = <p>Unfortunate...</p>;
    }
    return (
      <div>
        <h1>Your number is: {num}</h1>
        {msg}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
