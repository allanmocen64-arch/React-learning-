import { useState } from "react";

function StateUpdates() {
  const [car, setCar] = useState({ year: 2024, make: "BMW", model: "M5" });
  function handleCarChange(event) {
    setCar({ ...car, year: event.target.value });
  }
  function handleMakeChange(event) {
    setCar({ ...car, make: event.target.value });
  }
  function handleModelChange(event) {
    setCar({ ...car, model: event.target.value });
  }
  return (
    <div>
      <p>
        Your Favorite Car is: {car.year} {car.make} {car.model}
        <br />
        <input type="number" value={car.year} onChange={handleCarChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.model} onChange={handleModelChange} />
        <br />
      </p>
    </div>
  );
}

export default StateUpdates;
