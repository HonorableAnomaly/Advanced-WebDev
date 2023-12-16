// function App() {
// Lesson 1: JSX
//   let message = "Lates ";
//   if (Math.random() > 0.5) {
//     message = "Hello there! ";
//   }

//   return (
//     <h1>
//       {message}
//       {new Date().toLocaleTimeString()}
//     </h1>
//   );

// Lesson 2: Props
//   const inputType = "number";
//   const minValue = "3";

//   return (
//     <input
//       type={inputType}
//       min={minValue}
//     />
//   );

// Objects can't be displayed, but they can be used as Props
//   const variable = "something";

//   return (
//     <input
//       type='number'
//       min={3}
//       list={[1, 2, 3]} // array
//       style={{ border: "3px solid green" }} // object
//       alt={variable} // variable
//     />
//   );
// }

// Quiz #1 - What would display in the console?
// function App() {
//   return <input placeholder='hi there' />;
// }

// Quiz #2 - Fix the JSX
function App() {
  return (
    <div className='wrapper'>
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: "gray" }}
      />
    </div>
  );
}

export default App;
