import React, { useState } from 'react';

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
  });
  const [products, setProducts] = useState([
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
  ]);

  const handleAddButtonClick = () => {
    setIsAdding(true);
  };

  const handleAddProduct = () => {
    // Validate the new product
    if (newProduct.id && newProduct.name && newProduct.price) {
      // Add the new product to the products list
      setProducts([...products, newProduct]);
      // Clear the form fields
      setNewProduct({
        id: '',
        name: '',
        description: '',
        price: '',
      });
      // Hide the add form after adding the product
      setIsAdding(false);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

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
      {isAdding ? (
        <div className="add-product-form">
          <h2>Add New Product</h2>
          <label>
            ID:
            <input type="text" name="id" value={newProduct.id} onChange={handleInputChange} />
          </label>
          <label>
            Name:
            <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} />
          </label>
          <label>
            Price:
            <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} />
          </label>
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      ) : (
        <button onClick={handleAddButtonClick}>Add</button>
      )}
    </div>
  );
}

export default ProductList;
