import React, { useState } from 'react';
import products from './data/products'; // Импорт списка товаров
import ProductList from './components/ProductList/ProductList'; // Компонент списка товаров
import Cart from './components/Cart/Cart'; // Компонент корзины
import Filters from './components/Filters/Filters'; // Компонент фильтров
import { AppContainer, MainContent, Sidebar, ProductSection } from './App.styles'; // Стили для компонента App

function App() {
  // Состояние для хранения товаров в корзине
  const [cartItems, setCartItems] = useState([]);
  // Состояние для хранения отфильтрованных товаров
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Функция для добавления товара в корзину
  const handleAddToCart = (product, size) => {
    // Проверяем, есть ли товар с таким же ID и размером уже в корзине
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );
    if (existingItem) {
      // Если товар уже есть в корзине, увеличиваем его количество
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Если товара нет в корзине, добавляем его с количеством 1
      setCartItems([...cartItems, { ...product, quantity: 1, size: size }]);
    }
  };

  // Функция для удаления товара из корзины
  const handleRemoveFromCart = (itemId, itemSize) => {
    setCartItems(
      cartItems.filter((item) => !(item.id === itemId && item.size === itemSize))
    );
  };

  // Функция для обновления количества товара в корзине
  const handleUpdateQuantity = (itemId, itemSize, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.size === itemSize
          ? { ...item, quantity: Math.max(1, item.quantity + change) } // Убедимся, что количество не меньше 1
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
      // Фильтруем товары, оставляя только те, которые содержат все выбранные размеры
      const filtered = products.filter((product) =>
        selectedSizes.every((size) => product.sizes.includes(size))
      );
      setFilteredProducts(filtered);
    }
  };

  // Получаем все уникальные размеры из списка товаров
  const allSizes = [...new Set(products.flatMap((product) => product.sizes))];

  return (
    <AppContainer>
      {/* Боковая панель с фильтрами */}
      <Sidebar>
        <Filters
          sizes={allSizes} // Передаем все доступные размеры
          onFilter={handleFilter} // Функция для обработки фильтрации
          productCount={filteredProducts.length} // Количество отфильтрованных товаров
        />
      </Sidebar>
      {/* Основной контент */}
      <MainContent>
        {/* Секция с товарами */}
        <ProductSection>
          <ProductList
            products={filteredProducts} // Передаем отфильтрованные товары
            onAddToCart={handleAddToCart} // Функция для добавления товара в корзину
          />
        </ProductSection>
        {/* Компонент корзины */}
        <Cart
          cartItems={cartItems} // Передаем товары в корзине
          onRemoveFromCart={handleRemoveFromCart} // Функция для удаления товара из корзины
          onUpdateQuantity={handleUpdateQuantity} // Функция для обновления количества товара
          products={products} // Передаем список всех товаров (для дополнительной информации, если нужно)
        />
      </MainContent>
    </AppContainer>
  );
}

export default App;