/* import React, { useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import axios from "axios";


const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [cart, setCart] = useState([]);

  const getRestaurants = () => {
  };

  const states = { restaurants, cart };
  const setters = { setRestaurants, setCart };
  const requests = { getRestaurants };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState; */