// ProductList.js
import React from 'react';
// import Product from './Product'; // Remove or comment out the import statement

const ProductList = ({ addToCart }) => {
    const products = [
      { id: 1, name: 'Intermediate Pad', description: '1 whole', price: 10 },
      { id: 2, name: '1 pair of Scissors', description: 'HBW', price: 15 },
      { id: 3, name: 'Long Bond Paper', description: 'Orion', price: 30 },
      { id: 4, name: 'Short Bond Paper', description: 'Orion', price: 25 },
      { id: 5, name: '1 pc Black Ballpen', description: 'G-Tech', price: 5 },
      { id: 6, name: '1 pc. Blue Ballpen', description: 'Panda', price: 8 },
      { id: 7, name: '1 pc Manila Paper', description: 'with border', price: 25 },
      { id: 8, name: 'Assorted Cartolina', description: 'with border', price: 25 },
      { id: 9, name: 'Assorted Art Paper', description: '1 rim', price: 25 },
      { id: 10, name: 'Plastic Cover', description: '2ft', price: 16 },
      // Added items
      { id: 11, name: 'Pencil Sharpener', description: 'Manual', price: 3 },
      { id: 12, name: 'Eraser', description: 'Rubber', price: 2 },
      // Modified item
      { id: 13, name: 'Calculator', description: 'Scientific', price: 50 },
    ];


  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₱ {product.price}</p>
              <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
