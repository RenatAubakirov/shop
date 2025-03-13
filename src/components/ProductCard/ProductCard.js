// src/components/ProductCard/ProductCard.js
import React from 'react';
import {
  Card,
  ProductImage,
  ProductName,
  ProductPrice,
  AddToCartButton,
  HoverImage,
  CardContainer,
  ImageContainer,
} from './ProductCard.styles';

// Компонент ProductCard, который принимает пропсы: product (данные о товаре) и onAddToCart (функция для добавления товара в корзину)
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <CardContainer>
      {/* Основная карточка товара */}
      <Card>
        {/* Контейнер для изображений товара */}
        <ImageContainer>
          {/* Основное изображение товара */}
          <ProductImage src={product.image} alt={product.name} />
          {/* Изображение при наведении (hover) */}
          <HoverImage src={product.hoverImage} alt={`${product.name} Hover`} />
        </ImageContainer>
        {/* Название товара */}
        <ProductName>{product.name}</ProductName>
        {/* Цена товара, отформатированная до двух знаков после запятой */}
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        {/* Кнопка для добавления товара в корзину */}
        <AddToCartButton onClick={onAddToCart}>Купить товар</AddToCartButton>
      </Card>
    </CardContainer>
  );
};

export default ProductCard;