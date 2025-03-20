import React, { useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import products from './data/products';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Filters from './components/Filters/Filters';
import Menu from './components/Menu/Menu';
import ReviewsPage from './pages/ReviewsPage';
import ContactsPage from './pages/ContactsPage';
import { AppContainer, MainContent, Sidebar, ProductSection } from './App.styles';

function App() {
  // useState для управления состоянием корзины, отфильтрованных товаров и отзывов
  const [cartItems, setCartItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [reviews, setReviews] = useState({});

  // Хук useLocation для получения информации о текущем URL
  const location = useLocation();

  // Функция для добавления товара в корзину
  const handleAddToCart = (product, size) => {
    // Проверяем, есть ли уже такой товар в корзине с тем же размером
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );
    if (existingItem) {
      // Если товар уже есть, увеличиваем его количество
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Если товара нет, добавляем его в корзину
      setCartItems([...cartItems, { ...product, quantity: 1, size: size }]);
    }
  };

  // Функция для удаления товара из корзины
  const handleRemoveFromCart = (itemId, itemSize) => {
    // Фильтруем корзину, удаляя товар с указанным id и размером
    setCartItems(
      cartItems.filter((item) => !(item.id === itemId && item.size === itemSize))
    );
  };

  // Функция для обновления количества товара в корзине
  const handleUpdateQuantity = (itemId, itemSize, change) => {
    // Обновляем количество товара, но не меньше 1
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.size === itemSize
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Функция для фильтрации товаров по выбранным размерам
  const handleFilter = (selectedSizes) => {
    if (selectedSizes.length === 0) {
      // Если размеры не выбраны, показываем все товары
      setFilteredProducts(products);
    } else {
      // Фильтруем товары, оставляя только те, которые имеют все выбранные размеры
      const filtered = products.filter((product) =>
        selectedSizes.every((size) => product.sizes.includes(size))
      );
      setFilteredProducts(filtered);
    }
  };

  // Функция для добавления отзыва
  const handleAddReview = (productId, review) => {
    setReviews((prevReviews) => {
      const updatedReviews = { ...prevReviews };
      if (!updatedReviews[productId]) {
        updatedReviews[productId] = [];
      }
      updatedReviews[productId].push({ ...review, productId: productId });
      return updatedReviews;
    });
  };

  // Функция для удаления отзыва
  const handleDeleteReview = (productId, reviewIndex) => {
    setReviews((prevReviews) => {
      const updatedReviews = { ...prevReviews };
      if (updatedReviews[productId]) {
        updatedReviews[productId].splice(reviewIndex, 1);
        if (updatedReviews[productId].length === 0) {
          delete updatedReviews[productId];
        }
      }
      return updatedReviews;
    });
  };

  // Получаем все уникальные размеры товаров
  const allSizes = [...new Set(products.flatMap((product) => product.sizes))];

  return (
    // Контейнер приложения
    <AppContainer>
      {/* Боковая панель с меню и фильтрами */}
      <Sidebar>
        {/* Компонент меню */}
        <Menu />
        {/* Условный рендеринг фильтров на главной странице */}
        {location.pathname === '/' && (
          <Filters
            sizes={allSizes}
            onFilter={handleFilter}
            productCount={filteredProducts.length}
          />
        )}
      </Sidebar>

      {/* Основное содержимое приложения */}
      <MainContent>
        {/* Маршрутизация страниц */}
        <Routes>
          {/* Главная страница */}
          <Route
            path="/"
            element={
              <ProductSection>
                <ProductList
                  products={filteredProducts}
                  onAddToCart={handleAddToCart}
                  onAddReview={handleAddReview}
                />
              </ProductSection>
            }
          />
          {/* Страница отзывов */}
          <Route
            path="/reviews/:productId?"
            element={<ReviewsPage reviews={reviews} onAddReview={handleAddReview} onDeleteReview={handleDeleteReview} products={products} />}
          />
          {/* Страница контактов */}
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        {/* Компонент корзины */}
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          products={products}
        />
      </MainContent>
    </AppContainer>
  );
}

export default App;