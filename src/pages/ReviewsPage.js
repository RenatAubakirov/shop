import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsPageContainer, ReviewList, ReviewItem, ReviewForm, SubmitButton, DeleteButton } from './ReviewsPage.styles';

const ReviewsPage = ({ reviews, onAddReview, onDeleteReview, products }) => {
  const { productId } = useParams();
  const [newReview, setNewReview] = useState({ text: '', rating: 5 });
  const [showForm, setShowForm] = useState(false);

  const productReviews = productId ? reviews[productId] || [] : [];
  const allReviews = !productId ? Object.keys(reviews).flatMap((id) => {
    return reviews[id].map(review => ({ ...review, productId: review.productId || id })); // Используем productId из отзыва или id как запасной вариант
  }) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text.trim()) {
      onAddReview(productId || 'all', newReview);
      setNewReview({ text: '', rating: 5 });
      setShowForm(false);
    }
  };

  const handleDelete = (productId, reviewIndex) => {
    onDeleteReview(productId, reviewIndex);
  };

  const getProductName = (productId) => {
    const product = products.find(p => p.id === productId);
    return product ? product.name : 'Неизвестный товар';
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
              <h3>{getProductName(review.productId)}</h3> {/* Используем productId из отзыва */}
              <p>{review.text}</p>
              <p>Рейтинг: {review.rating} звезд</p>
              <DeleteButton onClick={() => handleDelete(review.productId || productId || 'all', index)}>
                &#x2716;
              </DeleteButton>
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