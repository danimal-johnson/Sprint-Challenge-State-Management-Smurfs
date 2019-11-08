import React, { useContext, useState } from 'react';
import { StoreContext } from '../reducers/Store';
export const ADD_SMURF = "ADD_SMURF";
export const LIST_SMURFS = "LIST_SMURFS";

export default function Form() {
  const [state, dispatch] = useContext(StoreContext);

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

  const viewSmurfs = () => {
    dispatch({type: LIST_SMURFS})
  }

  return (
    <div>

      <button onClick={handy}>Add Handy</button>
      <button onClick={smurfette}>Add Smurfette</button>
      <button onClick={viewSmurfs}>View Smurfs</button>
    </div>
  )
}