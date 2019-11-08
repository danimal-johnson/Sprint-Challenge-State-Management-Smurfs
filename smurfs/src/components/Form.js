import React, { useContext, useState } from 'react';
import { StoreContext } from '../reducers/Store';
export const ADD_SMURF = "ADD_SMURF";
export const LIST_SMURFS = "LIST_SMURFS";

export default function Form() {
  const [state, dispatch] = useContext(StoreContext);
  const [smurfName, setSmurfName] = useState("");
  const [smurfAge, setSmurfAge] = useState("");
  const [smurfHeight, setSmurfHeight] = useState("");

  const handy = () => {
    console.log("Adding Handy");
    dispatch({type: ADD_SMURF, payload: 
      {
        name: 'Handy',
        age: 50,
        height: "8cm",
      }});
  }

  const smurfette = () => {
    console.log("Adding Smurfette");
    dispatch({type: ADD_SMURF, payload: 
    {
      name: 'Smurfette',
      age: 22,
      height: "5cm",
    }});
  }

  const saveSmurf = () => {
    dispatch({ type: 'ADD_SMURF', payload: 
      {
        name: smurfName,
        age: smurfAge,
        height: smurfHeight
      }
    });
  };

  const handleNameChange = event => {
    setSmurfName(event.target.value);
  }

  const handleAgeChange = event => {
    setSmurfAge(event.target.value);
  }

  const handleHeightChange = event => {
    setSmurfHeight(event.target.value);
  }

  const viewSmurfs = () => {
    dispatch({type: LIST_SMURFS})
  }


  
  return (
    <div>

      <input type="text"
        name="smurfName"
        label="name"
        onChange={handleNameChange}
      />
      <input type="text"
        name="smurfAge"
        onChange={handleAgeChange}
      />
      <input type="text"
        name="smurfHeight"
        onChange={handleHeightChange}
      />

      <button
        type="button"
        onClick={saveSmurf}>Save Smurf
      </button>




      <button onClick={handy}>Add Handy</button>
      <button onClick={smurfette}>Add Smurfette</button>
      <button onClick={viewSmurfs}>View Smurfs</button>
    </div>
  )
}