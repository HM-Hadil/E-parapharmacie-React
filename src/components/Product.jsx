import React from 'react';
function Product({ product, addToCart }) {
    return (
      <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />

        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  }
  export default Product;
