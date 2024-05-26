import React from 'react';

function Cart({ cart }) {
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No products in the cart</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      )}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;