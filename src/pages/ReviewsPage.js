import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsPageContainer, ReviewList, ReviewItem, ReviewForm, SubmitButton } from './ReviewsPage.styles';

const ReviewsPage = ({ reviews, onAddReview }) => {
  const { productId } = useParams(); // Получаем id товара из URL, если он есть
  const [newReview, setNewReview] = useState({ text: '', rating: 5 });
  const [showForm, setShowForm] = useState(false);

  // Если есть id товара, показываем только его отзывы
  const productReviews = productId ? reviews[productId] || [] : []; // Отзывы для конкретного товара
  const allReviews = !productId ? Object.keys(reviews).flatMap((id) => reviews[id]) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text.trim()) {
      onAddReview(productId || 'all', newReview); // Добавляем отзыв для конкретного товара или для всех товаров
      setNewReview({ text: '', rating: 5 });
      setShowForm(false);
    }
  };

  return (
    <ReviewsPageContainer>
      <h1>{productId ? `Отзывы для товара ${productId}` : 'Все отзывы'}</h1>

      <SubmitButton onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Закрыть форму' : 'Оставить отзыв'}
      </SubmitButton>

      {showForm && (
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
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>{star} звезд</option>
            ))}
          </select>
          <SubmitButton type="submit">Отправить</SubmitButton>
        </ReviewForm>
      )}

      <ReviewList>
        {(productId ? productReviews : allReviews).length > 0 ? (
          (productId ? productReviews : allReviews).map((review, index) => (
            <ReviewItem key={index}>
              <p>{review.text}</p>
              <p>Рейтинг: {review.rating} звезд</p>
            </ReviewItem>
          ))
        ) : (
          <p>Отзывов пока нет. Будьте первым!</p>
        )}
      </ReviewList>
    </ReviewsPageContainer>
  );
};

export default ReviewsPage;
