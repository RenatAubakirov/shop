import React, { useState } from 'react';
import { List, SizeSelector } from './ProductList.styles';
import ProductCard from '../ProductCard/ProductCard';
import { useLocation } from 'react-router-dom';

const ProductList = ({ products, onAddToCart, reviews, onAddReview }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const location = useLocation();

  const showSizeSelector = !['/reviews', '/contacts'].includes(location.pathname);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleAddToCartWithSize = (product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Выберите нужный размер');
      return;
    }
    onAddToCart(product, selectedSize);
  };

  return (
    <List>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            product={product}
            onAddToCart={() => handleAddToCartWithSize(product)}
            reviews={reviews}
            onAddReview={onAddReview}
          />
          {showSizeSelector && (
            <SizeSelector
              value={selectedSizes[product.id] || ''}
              onChange={(e) => handleSizeChange(product.id, e.target.value)}
            >
              <option value="">Размер одежды</option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </SizeSelector>
          )}
        </div>
      ))}
    </List>
  );
};

export default ProductList;