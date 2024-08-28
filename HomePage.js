import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-page">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
