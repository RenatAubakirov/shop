import React, { useState } from 'react';
import { List, SizeSelector } from './ProductList.styles';
import ProductCard from '../ProductCard/ProductCard';
import { useLocation } from 'react-router-dom';

const ProductList = ({ products, onAddToCart, reviews, onAddReview }) => {
  // useState для управления выбранными размерами товаров
  const [selectedSizes, setSelectedSizes] = useState({});

  // Хук useLocation для получения информации о текущем URL
  const location = useLocation();

  // Определяем, нужно ли показывать селектор размеров, в зависимости от текущего маршрута
  const showSizeSelector = !['/reviews', '/contacts'].includes(location.pathname);

  // Функция для обработки изменения выбранного размера товара
  const handleSizeChange = (productId, size) => {
    // Обновляем состояние выбранных размеров, сохраняя предыдущие значения
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  // Функция для обработки добавления товара в корзину с учетом выбранного размера
  const handleAddToCartWithSize = (product) => {
    // Получаем выбранный размер товара
    const selectedSize = selectedSizes[product.id];

    // Проверяем, выбран ли размер
    if (!selectedSize) {
      // Если размер не выбран, выводим предупреждение и прерываем выполнение функции
      alert('Выберите нужный размер');
      return;
    }

    // Вызываем функцию onAddToCart, переданную через props, для добавления товара в корзину
    // Передаем товар и выбранный размер
    onAddToCart(product, selectedSize);
  };

  return (
    // Контейнер списка товаров
    <List>
      {/* Отображаем каждый товар из массива products */}
      {products.map((product) => (
        // Оборачиваем каждый товар в div с уникальным ключом
        <div key={product.id}>
          {/* Компонент карточки товара */}
          <ProductCard
            product={product}
            // Передаем функцию для добавления товара в корзину с учетом размера
            onAddToCart={() => handleAddToCartWithSize(product)}
            // Передаем отзывы
            reviews={reviews}
            // Передаем функцию для добавления отзыва
            onAddReview={onAddReview}
          />

          {/* Условный рендеринг селектора размеров, если showSizeSelector равен true */}
          {showSizeSelector && (
            // Селектор размеров
            <SizeSelector
              // Устанавливаем значение выбранного размера
              value={selectedSizes[product.id] || ''}
              // Передаем функцию для обработки изменения выбранного размера
              onChange={(e) => handleSizeChange(product.id, e.target.value)}
            >
              {/* Опция "Размер одежды" */}
              <option value="">Размер одежды</option>

              {/* Отображаем доступные размеры товара */}
              {product.sizes.map((size) => (
                // Создаем опцию для каждого размера
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