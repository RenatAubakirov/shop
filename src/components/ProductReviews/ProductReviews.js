import React, { useState } from 'react';
import { ReviewsContainer, ReviewItem, ReviewForm, RatingFilter } from './ProductReviews.styles';

const ProductReviews = ({ productId, reviews, onAddReview }) => {
  const [newReview, setNewReview] = useState({ text: '', rating: 5 });
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(productId, newReview);
    setNewReview({ text: '', rating: 5 });
  };

  const filteredReviews = ratingFilter
    ? reviews.filter((review) => review.rating === ratingFilter)
    : reviews;

  return (
    <ReviewsContainer>
      <h3>Отзывы</h3>
      <RatingFilter>
        <label>Фильтр по рейтингу:</label>
        <select value={ratingFilter} onChange={(e) => setRatingFilter(Number(e.target.value))}>
          <option value={0}>Все</option>
          <option value={5}>5 звезд</option>
          <option value={4}>4 звезды</option>
          <option value={3}>3 звезды</option>
          <option value={2}>2 звезды</option>
          <option value={1}>1 звезда</option>
        </select>
      </RatingFilter>
      {filteredReviews.map((review, index) => (
        <ReviewItem key={index}>
          <p>{review.text}</p>
          <p>Рейтинг: {review.rating} звезд</p>
        </ReviewItem>
      ))}
      <ReviewForm onSubmit={handleSubmit}>
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
          <option value={5}>5 звезд</option>
          <option value={4}>4 звезды</option>
          <option value={3}>3 звезды</option>
          <option value={2}>2 звезды</option>
          <option value={1}>1 звезда</option>
        </select>
        <button type="submit">Добавить отзыв</button>
      </ReviewForm>
    </ReviewsContainer>
  );
};

export default ProductReviews;