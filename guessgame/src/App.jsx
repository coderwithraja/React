import React, { useState } from "react";
import Result from "./Result";
const secretNum = Math.floor(Math.random() * 10) + 1;


function App() {
  const [term,setTerm]= useState("");
 
  const handlechange=(event)=>{
    setTerm(event.target.value);
  };
 
  return (
    <div>
      <div className="container">
        <div className="head">
          <label htmlFor="term">Guess the Number between 1 to 10 
          </label>
        </div>
        <input type="number" id="term" name="term" onChange={handlechange} placeholder="Enter your guess" />
        <Result secretNum={secretNum} term={term} />
      </div>
    </div>
  );
}

export default App;
