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
  ReviewsButton,
} from './ProductCard.styles';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, onAddReview }) => {
  const navigate = useNavigate();

  const handleReviewsClick = () => {
    navigate(`/reviews/${product.id}`); // Переход на страницу отзывов для конкретного товара
  };

  return (
    <CardContainer>
      <Card>
        <ImageContainer>
          <ProductImage src={product.image} alt={product.name} />
          <HoverImage src={product.hoverImage} alt={`${product.name} Hover`} />
        </ImageContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <AddToCartButton onClick={onAddToCart}>Купить товар</AddToCartButton>
        <ReviewsButton onClick={handleReviewsClick}>Отзывы</ReviewsButton>
      </Card>
    </CardContainer>
  );
};

export default ProductCard;