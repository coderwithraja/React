import React, { useEffect ,useState } from 'react'

const Timer = () => { 
    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log("screen rendered");

   },);

   function checkcount(){
    if(count > 10){
        setCount(1)
    }
   }
   const updateCount = () => {
    setCount(prevState => prevState + 1);
  };
  
  return (
    <>

        <h1>Count: {count}</h1>
        <button onClick={updateCount}>Increase count</button>
    </>
  )
}

export default Timer