import Cart from "./Cart";
import React, { useState } from "react";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your payment logic here.
    // For demonstration purposes, we will simply set isPaymentSuccessful to true.
    setIsPaymentSuccessful(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Form</h2>
      <div>
        <label>
          <input
            type="radio"
            value="credit-card"
            checked={paymentMethod === "credit-card"}
            onChange={(event) => setPaymentMethod(event.target.value)}
          />
          Credit Card
          <Cart/>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={(event) => setPaymentMethod(event.target.value)}
          />
          PayPal
        </label>
      </div>
      <button type="submit">Submit Payment</button>
      {isPaymentSuccessful &&     {backgroudColor:"green"}}<p>Payment Submitted Successfully!</p>
    </form>
  );
};

export default PaymentForm;
