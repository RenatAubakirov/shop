import React, { useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom'; // useLocation импортирован
import products from './data/products';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Filters from './components/Filters/Filters';
import Menu from './components/Menu/Menu';
import ReviewsPage from './pages/ReviewsPage';
import ContactsPage from './pages/ContactsPage';
import { AppContainer, MainContent, Sidebar, ProductSection } from './App.styles';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [reviews, setReviews] = useState({});

  const location = useLocation(); // Хук useLocation используется правильно здесь

  const handleAddToCart = (product, size) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1, size: size }]);
    }
  };

  const handleRemoveFromCart = (itemId, itemSize) => {
    setCartItems(
      cartItems.filter((item) => !(item.id === itemId && item.size === itemSize))
    );
  };

  const handleUpdateQuantity = (itemId, itemSize, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.size === itemSize
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleFilter = (selectedSizes) => {
    if (selectedSizes.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        selectedSizes.every((size) => product.sizes.includes(size))
      );
      setFilteredProducts(filtered);
    }
  };

  const handleAddReview = (productId, review) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [productId]: [...(prevReviews[productId] || []), review],
    }));
  };

  const allSizes = [...new Set(products.flatMap((product) => product.sizes))];

  return (
    <AppContainer>
      <Sidebar>
        <Menu />
        {/* Условное отображение фильтра */}
        {location.pathname === '/' && (
          <Filters
            sizes={allSizes}
            onFilter={handleFilter}
            productCount={filteredProducts.length}
          />
        )}
      </Sidebar>

      <MainContent>
        <Routes>
          <Route
            path="/"
            element={
              <ProductSection>
                <ProductList
                  products={filteredProducts}
                  onAddToCart={handleAddToCart}
                  reviews={reviews}
                  onAddReview={handleAddReview}
                />
              </ProductSection>
            }
          />
          <Route
            path="/reviews"
            element={<ReviewsPage reviews={reviews} onAddReview={handleAddReview} />}
          />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
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
