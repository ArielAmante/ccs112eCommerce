// ProductList.js
import React from 'react';
// import Product from './Product'; // Remove or comment out the import statement

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Intermediate Pad', description: '1 whole', price: 10, image: 'intermediate_pad.jpg' },
    { id: 2, name: '1 pair of Scissors', description: 'HBW', price: 15, image: 'scissors.jpg' },
    { id: 3, name: 'Long Bond Paper', description: 'Orion', price: 30, image: 'long_bond_paper.jpg' },
    { id: 4, name: 'Short Bond Paper', description: 'Orion', price: 25, image: 'short_bond_paper.jpg' },
    { id: 5, name: '1 pc Black Ballpen', description: 'G-Tech', price: 5, image: 'black_ballpen.jpg' },
    { id: 6, name: '1 pc. Blue Ballpen', description: 'Panda', price: 8, image: 'blue_ballpen.jpg' },
    { id: 7, name: '1 pc Manila Paper', description: 'with border', price: 25, image: 'manila_paper.jpg' },
    { id: 8, name: 'Assorted Cartolina', description: 'with border', price: 25, image: 'assorted_cartolina.jpg' },
    { id: 9, name: 'Assorted Art Paper', description: '1 rim', price: 25, image: 'assorted_art_paper.jpg' },
    { id: 10, name: 'Plastic Cover', description: '2ft', price: 16, image: 'plastic_cover.jpg' },
    { id: 11, name: 'Pencil Sharpener', description: 'Manual', price: 3, image: 'pencil_sharpener.jpg' },
    { id: 12, name: 'Eraser', description: 'Rubber', price: 2, image: 'eraser.jpg' },
    { id: 13, name: 'Calculator', description: 'Scientific', price: 50, image: 'calculator.jpg' },
  ];

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-details">
            <img src={require(`./images/${product.image}`).default} alt={product.name} className="product-image" />
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