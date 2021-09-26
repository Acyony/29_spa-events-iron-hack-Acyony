import "./App.css";
import React, { useState, useEffect } from "react";
import User from "./components/User.jsx";
import { randomColor } from './colors.js';
import Navbar from './components/Navbar.jsx'

function App() {

  //-------=^.^=-------- Task 2.
  const [bootcamp, setBootcamp] = useState("Ironhack");
  const [bgColor, setBgColor] = useState(randomColor());
  const [counter, setCounter] = useState(1);


  //-------=^.^=-------- Task 3.
  function clickHandler() {
    console.log(counter)
    if (counter > 0 && counter % 5 === 0) {
      setBgColor(randomColor());
    }
    setCounter(counter + 1);
  }

  //-------=^.^=-------- Update the document title using the browser API
  useEffect(() => {
    document.title = `You clicked ${counter - 1} times`;
  })

  return (
    <div className="App">
      <Navbar />
      <User event={bootcamp} bgColor={bgColor.hex} />
      <p>Every 5 clicks you will change the background color.</p>
      <p>You clicked {counter - 1} times!</p>
      <button className="button_style" onClick={clickHandler}>Let's change the color!</button>
    </div>
  );
}

export default App;
