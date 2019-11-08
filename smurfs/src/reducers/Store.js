import React, { createContext, useReducer } from "react"
import axios from 'axios';

export const StoreContext = createContext({});
export const ADD_SMURF = "ADD_SMURF";
export const LIST_SMURFS = "LIST_SMURFS";
const API_BASE_URL = "http://localhost:3333";

const initialState = [{
  name: "",
  age: 0,
  height: ""
}];

const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_SMURF:
      console.log("Adding a smurf");
      axios.post(`${API_BASE_URL}/smurfs`, action.payload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      return state; // Don't change the state.
    case LIST_SMURFS:
        return axios
        .get(`${API_BASE_URL}/smurfs`)
        .then(res => console.log(res))
        .catch(err => console.error(err));
        //  TODO: Error checking
    default:
      console.error ("Unhandled state in appReducer.");
  }
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <StoreContext.Provider value={[state,dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store;