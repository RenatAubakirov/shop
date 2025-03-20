import React, { useState } from 'react';
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

const ProductCard = ({ product, onAddToCart, onAddReview }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ text: '', rating: 5 });

  const handleReviewsClick = () => {
    setShowReviewForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text.trim()) {
      onAddReview(product.id, newReview); // Передаем product.id
      setNewReview({ text: '', rating: 5 });
      setShowReviewForm(false);
    }
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
        <ReviewsButton onClick={handleReviewsClick}>Оставить отзыв</ReviewsButton>
        {showReviewForm && (
          <form onSubmit={handleSubmit}>
            <h3>Отзыв о товаре: {product.name}</h3>
            <textarea
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              placeholder="Напишите ваш отзыв"
              required
            />
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
            >
              {[5, 4, 3, 2, 1].map((star) => (
                <option key={star} value={star}>{star} звезд</option>
              ))}
            </select>
            <button type="submit">Отправить</button>
          </form>
        )}
      </Card>
    </CardContainer>
  );
};

export default ProductCard;