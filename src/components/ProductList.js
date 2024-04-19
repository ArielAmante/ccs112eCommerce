// ProductList.js
import React from 'react';
import yellowPad from '../images/yellow_pad.jpg';
import scissors from '../images/scissors.jpg';
import longBondPaper from '../images/long_bond_paper.jpg';
import shortBondPaper from '../images/short_bond_paper.jpg';
import blackBallpen from '../images/black_ballpen.jpg';
import blueBallpen from '../images/blue_ballpen.jpg';
import highlighter from '../images/highlighter.jpg';
import assortedCartolina from '../images/assorted_cartolina.jpg';
import assortedArtPaper from '../images/assorted_art_paper.jpg';
import plasticCover from '../images/plastic_cover.jpg';
import pencilSharpener from '../images/pencil_sharpener.jpg';
import calculator from '../images/calculator.jpg';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Yellow Pad Paper', description: '1 pad', price: 26, image: yellowPad },
    { id: 2, name: '1 pair of Scissors', description: 'HBW', price: 13, image: scissors },
    { id: 3, name: 'Long Bond Paper', description: 'Orion', price: 30, image: longBondPaper },
    { id: 4, name: 'Short Bond Paper', description: 'Orion', price: 28, image: shortBondPaper },
    { id: 5, name: '1 pc Black Ballpen', description: 'G-Tech', price: 65, image: blackBallpen },
    { id: 6, name: '1 pc. Blue Ballpen', description: 'Panda', price: 8, image: blueBallpen },
    { id: 7, name: '1 pc Highlighter', description: 'Yellow', price: 26, image: highlighter },
    { id: 8, name: 'Assorted Cartolina', description: 'with border', price: 13, image: assortedCartolina },
    { id: 9, name: 'Assorted Art Paper', description: '1 rim', price: 11, image: assortedArtPaper },
    { id: 10, name: 'Clear Plastic Cover', description: '2ft', price: 16, image: plasticCover },
    { id: 11, name: 'Pencil Sharpener', description: 'Manual', price: 3, image: pencilSharpener },
    { id: 12, name: 'Scientific Calculator', description: 'Scientific', price: 50, image: calculator }
  ];

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-details">
              <img src={product.image} alt={product.name} className="product-image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
