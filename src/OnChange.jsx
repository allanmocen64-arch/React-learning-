import React, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleQuantiytChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input value={email} onChange={handleEmailChange} />
      <p>Email: {email}</p>
      <input value={quantity} type="number" onChange={handleQuantiytChange} />
      <p>Quantity:{quantity}</p>
      <textarea
        value={comment}
        placeholder="Enter delivery instructions"
        onChange={handleCommentChange}
      />
      <p>Comment:{comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
        <option value="cash">Cash on Delivery</option>
      </select>
      <p>Payment:{payment}</p>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping:{shipping}</p>
    </div>
  );
}
export default OnChange;
