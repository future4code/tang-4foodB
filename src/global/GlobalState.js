import React, { useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import axios from "axios";
import { UrlApi } from "../constants/urls";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [cart, setCart] = useState([]);
  const [title, setTitle] = useState("4FoodB"); //guardar o título da janela na TopBar

  const getRestaurants = () => {
    axios.get(`${UrlApi}/restaurants`, {
      headers: {
        auth: localStorage.getItem('token'),
        "Content-Type": "application/json"
      }
    }).then((response) => {
      setRestaurants(response.data.restaurants)
    }).catch((error) => {
      console.log(error)
    })
  };

  const getRestaurantDetail = (restId) => {
    axios.get(`${UrlApi}/restaurants/${restId}`, {
      headers: {
        auth: localStorage.getItem('token'),
        "Content-Type": "application/json"
      }
    }).then((response) => {
      setRestaurant(response.data.restaurant)
      setTitle(response.data.restaurant.name)
    }).catch((error) => {
      console.log(error)
    })
    return restaurant;
  };


const states = { restaurant, restaurants, cart, title };
const setters = { setRestaurant, setRestaurants, setCart, setTitle };
const requests = { getRestaurants, getRestaurantDetail };

const data = { states, setters, requests };

return (
  <GlobalStateContext.Provider value={data}>
    {props.children}
  </GlobalStateContext.Provider>
);
};

export default GlobalState; 