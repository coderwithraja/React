import React from 'react'

const Result = (props) => {
    const gameinputs = props;
    const secretNum = gameinputs.secretNum;
    const term = gameinputs.term;
    let result;

    if(term){
        if(term > secretNum){
            result = "higher";  
        }
        else if(term < secretNum){
            result = "lower";
        }
        else if(term == secretNum){
            result = "correct";
        }
        else{
            result = "Enter valid input";
        }
    }
   
  return (
    <div>
        <h3>You Guessed {result}</h3>
    </div>
  )
}

export default Result