import { useState } from "react";
import "./App.css";

function App() {
  // Use to propagate the changes made by JS to the UI (DOM)
  // Enter default value within ()
  // Returns two elements in form of list - value, function
  // setCounter updates the counter variable in DOM
  // update counter using js and then setCounter updates in DOM
  const [counter, setCounter] = useState(15);

  // let counter = 15;
  const addValue = () => {
    setCounter(counter + 1);
    console.log("Value added", counter);
  };
  const addMultipleValues = () => {
    // Callback using previous Counter
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    console.log("Value added", counter);
  };
  const decreaseValue = () => {
    setCounter(counter - 1);
    console.log("Value Decreases", counter);
  };
  const decreaseValueTillZero = () => {
    if (counter > 0) {
      decreaseValue();
    }
  };
  const addTillTwenty = () => {
    if (counter < 20) {
      addMultipleValues();
    }
  };
  return (
    <>
      <h1>Counter Application</h1>
      <h2>Counter Value: {counter}</h2>
      {/* addValue instead of addValue() 
      we are passing the reference only, since we want the
      code to exec. on click of the button */}
      <button onClick={addTillTwenty}>Add Value : {counter} </button>
      {/* The changes made in JS are not refelcting back on DOM */}
      <br />
      <button onClick={decreaseValueTillZero}>
        Decrease Value : {counter}{" "}
      </button>
    </>
  );
}

export default App;
