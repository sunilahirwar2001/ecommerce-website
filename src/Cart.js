import React from 'react'

const Cart = () => {
  return (
    <div>
      <div>
        <label>Card number</label>
<input type='number' id='number' placehoder='Card number' required></input>

      </div>
      <div>
        <label>Expiry Date</label>
        <input type='date' id='number' required ></input>
      </div>

      <div>
        <label>CVV</label>
        <input type='number'></input> 
      </div>
      <label>Cardholder's Name</label>
      <input type='text' placeholder='Cardholder Name' required></input>
    </div>
  )
}

export default Cart
