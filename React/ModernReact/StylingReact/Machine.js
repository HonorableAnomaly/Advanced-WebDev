// Example 1
// class Machine extends React.Component {
//   render() {
//     const { s1, s2, s3 } = this.props;
//     const isWinner = s1 === s2 && s2 === s3;

//     return (
//       <div className="Machine">
//         <p style={{ fontSize: "30px", backgroundColor: "lightgray" }}>
//           {s1} {s2} {s3}
//         </p>
//         <p>{isWinner ? "Winner!" : "Sorry, try again."}</p>
//       </div>
//     );
//   }
// }

// Example 2
class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const isWinner = s1 === s2 && s2 === s3;
    const colors = { fontSize: "30px", backgroundColor: "lightgray" };

    return (
      <div className="Machine">
        <p style={colors}>
          {s1} {s2} {s3}
        </p>
        <p className={isWinner ? "Machine-win" : "Machine-lose"}>{isWinner ? "Winner!" : "Sorry, try again."}</p>
      </div>
    );
  }
}
