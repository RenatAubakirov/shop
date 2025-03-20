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
  // useState для управления состоянием отображения формы отзыва
  const [showReviewForm, setShowReviewForm] = useState(false);

  // useState для хранения данных нового отзыва
  const [newReview, setNewReview] = useState({ text: '', rating: 5 });

  // Функция для открытия формы отзыва
  const handleReviewsClick = () => {
    setShowReviewForm(true);
  };

  // Функция для обработки отправки формы отзыва
  const handleSubmit = (e) => {
    // Предотвращаем перезагрузку страницы при отправке формы
    e.preventDefault();

    // Проверяем, что текст отзыва не пустой после удаления пробелов
    if (newReview.text.trim()) {
      // Вызываем функцию onAddReview, переданную через props, для добавления отзыва
      // Передаем id товара и данные нового отзыва
      onAddReview(product.id, newReview);

      // Очищаем данные отзыва и закрываем форму
      setNewReview({ text: '', rating: 5 });
      setShowReviewForm(false);
    }
  };

  return (
    // Контейнер карточки товара
    <CardContainer>
      {/* Карточка товара */}
      <Card>
        {/* Контейнер для изображений товара */}
        <ImageContainer>
          {/* Основное изображение товара */}
          <ProductImage src={product.image} alt={product.name} />

          {/* Изображение, отображаемое при наведении курсора */}
          <HoverImage src={product.hoverImage} alt={`${product.name} Hover`} />
        </ImageContainer>

        {/* Название товара */}
        <ProductName>{product.name}</ProductName>

        {/* Цена товара */}
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>

        {/* Кнопка "Купить товар", вызывающая функцию onAddToCart при клике */}
        <AddToCartButton onClick={onAddToCart}>Купить товар</AddToCartButton>

        {/* Кнопка "Оставить отзыв", вызывающая функцию handleReviewsClick при клике */}
        <ReviewsButton onClick={handleReviewsClick}>Оставить отзыв</ReviewsButton>

        {/* Условный рендеринг формы отзыва, если showReviewForm равно true */}
        {showReviewForm && (
          // Форма отзыва, обрабатывающая отправку с помощью handleSubmit
          <form onSubmit={handleSubmit}>
            {/* Заголовок формы, отображающий название товара */}
            <h3>Отзыв о товаре: {product.name}</h3>

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
            <button type="submit">Отправить</button>
          </form>
        )}
      </Card>
    </CardContainer>
  );
};

export default ProductCard;