import React, { useState } from "react";
import "../css/styles-order.css";

// This component manages a user's favorite order selection using React state.
// It initializes the order to "pancakes" and dynamically generates buttons for different food items.
// When a button  is clicked, the state updates with the selected order,
// and the button receives a "selected" class for styling. The selected order is displayed dynamically.

function Order() {
  const [order, setOrder] = useState("pancakes");
  const foodItems = ["pancakes", "waffles", "eggs", "bacon", "toast"];

  return (
    <div className="container">
      <h1 className="text-center">Your Favorite Order</h1>
      <div className="row justify-content-center">
        {foodItems.map((item) => (
          <button
            key={item}
            className={`btn btn-outline-primary m-2 ${
              order === item ? "selected" : ""
            }`}
            onClick={() => setOrder(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <h2 className="text-center mt-4">You selected: {order}</h2>
    </div>
  );
}
export default Order;
