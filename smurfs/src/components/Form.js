import React from 'react';
import axios from 'axios';

const API_BASE_URL = "http://localhost:3333";

export default function Form() {

  const handy = () => {
    console.log("Adding Handy");
    axios.post(`${API_BASE_URL}/smurfs`, {
      name: 'Handy',
      age: 50,
      height: "8cm",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const smurfette = () => {
    console.log("Adding Smurfette");
    axios.post(`${API_BASE_URL}/smurfs`, {
      name: 'Smurfette',
      age: 22,
      height: "5cm",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const viewSmurfs = () => {
    axios
    .get(`${API_BASE_URL}/smurfs`)
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  return (
    <div>


      <button onClick={handy}>Add Handy</button>
      <button onClick={smurfette}>Add Smurfette</button>
      <button onClick={viewSmurfs}>View Smurfs</button>
    </div>
  )
}