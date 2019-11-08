import React, { useContext, useState  } from "react";
import { StoreContext } from '../reducers/Store';

export default function Village() {
  const [state, dispatch] = useContext(StoreContext);
  return (
    <div>
      <div>The smurf village will be displayed here</div> 


    </div>
  )
}
