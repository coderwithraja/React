import React, { useState } from 'react';

const Theme = () => {
  const [scooter,setScooter] = useState({
    brand: "Yamaha",
    color : "red",
    year : 2020
  })
  const updateScooter = () =>{
    setScooter(previousState => {
      return {...previousState, color : "blue"}
    })
  }
  return (
    <> 
      <h2>My Bike {scooter.brand} </h2>
      <h2>My Bike {scooter.color}</h2>
      <h2>My Bike {scooter.year}</h2>
      <button onClick={updateScooter}>Change Scooter</button>
     
    </>
  );
};

export default Theme;
