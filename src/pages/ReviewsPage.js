import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsPageContainer, ReviewList, ReviewItem, ReviewForm, SubmitButton, DeleteButton } from './ReviewsPage.styles';

const ReviewsPage = ({ reviews, onAddReview, onDeleteReview, products }) => {
  // Получаем productId из параметров URL с помощью хука useParams
  const { productId } = useParams();

  // useState для хранения данных нового отзыва и управления формой
  const [newReview, setNewReview] = useState({ text: '', rating: 5 });
  const [showForm, setShowForm] = useState(false);

  // Определяем отзывы для конкретного товара или все отзывы
  const productReviews = productId ? reviews[productId] || [] : [];
  const allReviews = !productId ? Object.keys(reviews).flatMap((id) => {
    // Преобразуем отзывы, добавляя productId к каждому отзыву
    return reviews[id].map(review => ({ ...review, productId: review.productId || id }));
  }) : [];

  // Функция для обработки отправки формы отзыва
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text.trim()) {
      onAddReview(productId || 'all', newReview);
      setNewReview({ text: '', rating: 5 });
      setShowForm(false);
    }
  };

  // Функция для обработки удаления отзыва
  const handleDelete = (productId, reviewIndex) => {
    onDeleteReview(productId, reviewIndex);
  };

  // Функция для получения названия товара по productId
  const getProductName = (productId) => {
    const product = products.find(p => p.id === productId);
    return product ? product.name : 'Неизвестный товар';
  };

  return (
    // Контейнер страницы отзывов
    <ReviewsPageContainer>
      {/* Заголовок страницы, отображающий название товара или "Все отзывы" */}
      <h1>{productId ? `Отзывы для товара ${productId}` : 'Все отзывы'}</h1>

      {/* Кнопка "Оставить отзыв", управляющая отображением формы */}
      <SubmitButton onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Закрыть форму' : 'Оставить отзыв'}
      </SubmitButton>

      {/* Условный рендеринг формы отзыва, если showForm равно true */}
      {showForm && (
        // Форма отзыва
        <ReviewForm onSubmit={handleSubmit}>
          {/* Текстовое поле для ввода отзыва */}
          <textarea
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            placeholder="Напишите ваш отзыв"
            required
          />
          {/* Выпадающий список для выбора рейтинга */}
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
          >
            {/* Создание опций для рейтинга от 5 до 1 звезды */}
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>{star} звезд</option>
            ))}
          </select>
          {/* Кнопка "Отправить" для отправки формы */}
          <SubmitButton type="submit">Отправить</SubmitButton>
        </ReviewForm>
      )}

      {/* Список отзывов */}
      <ReviewList>
        {/* Условный рендеринг отзывов, если они есть */}
        {(productId ? productReviews : allReviews).length > 0 ? (
          // Отображение каждого отзыва
          (productId ? productReviews : allReviews).map((review, index) => (
            // Карточка отзыва
            <ReviewItem key={index}>
              {/* Название товара, к которому относится отзыв */}
              <h3>{getProductName(review.productId)}</h3>
              {/* Текст отзыва */}
              <p>{review.text}</p>
              {/* Рейтинг отзыва */}
              <p>Рейтинг: {review.rating} звезд</p>
              {/* Кнопка "Удалить" для удаления отзыва */}
              <DeleteButton onClick={() => handleDelete(review.productId || productId || 'all', index)}>
                &#x2716;
              </DeleteButton>
            </ReviewItem>
          ))
        ) : (
          // Сообщение, если отзывов нет
          <p>Отзывов пока нет. Будьте первым!</p>
        )}
      </ReviewList>
    </ReviewsPageContainer>
  );
};

export default ReviewsPage;