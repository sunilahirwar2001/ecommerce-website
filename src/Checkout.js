// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements
// } from "@stripe/react-stripe-js";
// import axios from "axios";

// const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY");

// function Payment() {
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [succeeded, setSucceeded] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       setError(error.message);
//       setProcessing(false);
//     } else {
//       const { id } = paymentMethod;
//       try {
//         await axios.post("/api/charge", { id });
//         setSucceeded(true);
//         setError(null);
//         setProcessing(false);
//       } catch (e) {
//         setError(e.message);
//         setProcessing(false);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement options={{
//         style: {
//           base: {
//             fontSize: "16px",
//             color: "#424770",
//             "::placeholder": {
//               color: "#aab7c4",
//             },
//           },
//           invalid: {
//             color: "#9e2146",
//           },
//         },
//       }} />
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       <button
//         type="submit"
//         disabled={!stripe || processing}
//       >
//         Pay
//       </button>
//       {succeeded && <div>Payment succeeded!</div>}
//     </form>
//   );
// }

// function Checkout() {
//   return (
//     <Elements stripe={stripePromise}>
//       <Payment />
//     </Elements>
//   );
// }

// export default Checkout;
