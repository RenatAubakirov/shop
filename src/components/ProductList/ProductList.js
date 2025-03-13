// src/components/ProductList/ProductList.js
import React, { useState } from 'react';
import { List, SizeSelector } from './ProductList.styles';
import ProductCard from '../ProductCard/ProductCard';

// Компонент ProductList, который принимает пропсы: products (список товаров) и onAddToCart (функция для добавления товара в корзину)
const ProductList = ({ products, onAddToCart }) => {
  // Состояние для хранения выбранных размеров для каждого товара
  const [selectedSizes, setSelectedSizes] = useState({});

  // Функция для обработки изменения выбранного размера
  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size, // Обновляем выбранный размер для конкретного товара
    }));
  };

  // Функция для добавления товара в корзину с выбранным размером
  const handleAddToCartWithSize = (product) => {
    const selectedSize = selectedSizes[product.id]; // Получаем выбранный размер для товара
    if (!selectedSize) {
      alert('Please select a size'); // Если размер не выбран, показываем предупреждение
      return;
    }
    onAddToCart(product, selectedSize); // Передаем товар и выбранный размер в функцию onAddToCart
  };

  return (
    <List>
      {/* Отображение списка товаров */}
      {products.map((product) => (
        <div key={product.id}>
          {/* Карточка товара */}
          <ProductCard
            product={product}
            onAddToCart={() => handleAddToCartWithSize(product)} // Передаем функцию для добавления в корзину
          />
          {/* Селектор для выбора размера */}
          <SizeSelector
            value={selectedSizes[product.id] || ''} // Текущий выбранный размер
            onChange={(e) => handleSizeChange(product.id, e.target.value)} // Обработчик изменения размера
          >
            <option value="">Размер одежды</option> {/* Плейсхолдер для селектора */}
            {/* Отображение доступных размеров для товара */}
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </SizeSelector>
        </div>
      ))}
    </List>
  );
};

export default ProductList;