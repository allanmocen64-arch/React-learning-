import React, { useState } from "react";

function UpdateArrayState() {
  const [food, setFoods] = useState(["Banana", "Orange", "Apple"]);
  function handleAddFood() {}
  function handleRemoveFood() {}
  return (
    <div>
      <h1>Food List</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
}
export default UpdateArrayState;
