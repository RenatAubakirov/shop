// Cart.js
import React, { useState } from 'react';
import axios from 'axios';
import {
  CartContainer,
  CartItems,
  CartItem,
  CartTotal,
  CartToggle,
  CartIcon,
  CloseButton,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
  QuantityControls,
  QuantityButton,
  QuantityDisplay,
  RemoveButton,
  SizeSelector,
  CheckoutButton,
  Modal,
  ModalContent,
  ModalCloseButton,
  Input,
  SubmitButton
} from './Cart.styles';
import cartIcon from '../../static/cart-icon.png';

// Компонент корзины, который принимает пропсы: cartItems, onRemoveFromCart, onUpdateQuantity
const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  // Состояние для управления открытием/закрытием корзины
  const [isOpen, setIsOpen] = useState(false);
  // Состояние для управления открытием/закрытием модального окна оформления заказа
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  // Состояние для хранения данных клиента (имя, телефон, email)
  const [customer, setCustomer] = useState({ name: '', phone: '', email: '' });

  // Вычисление общей стоимости товаров в корзине
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Функция для открытия/закрытия корзины
  const toggleCart = () => setIsOpen(!isOpen);
  // Функция для открытия/закрытия модального окна оформления заказа
  const toggleCheckout = () => setIsCheckoutOpen(!isCheckoutOpen);

  // Функция для изменения количества товара в корзине
  const handleQuantityChange = (item, change) => {
    onUpdateQuantity(item.id, item.size, change);
  };

  // Функция для удаления товара из корзины
  const handleRemoveItem = (itemId, itemSize) => {
    onRemoveFromCart(itemId, itemSize);
  };

  // Функция для обработки изменений в полях ввода данных клиента
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  // Функция для отправки заказа на сервер
  const handleOrderSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/order', { customer, cartItems });
      alert('Заказ оформлен! Мы свяжемся с вами.');
      setIsCheckoutOpen(false);
    } catch (error) {
      alert('Ошибка при оформлении заказа');
    }
  };

  return (
    <>
      {/* Кнопка для открытия/закрытия корзины */}
      <CartToggle onClick={toggleCart}>
        <CartIcon src={cartIcon} alt="Cart" />
      </CartToggle>
      {/* Контейнер корзины, который отображается, если isOpen === true */}
      <CartContainer isOpen={isOpen}>
        {/* Кнопка для закрытия корзины */}
        <CloseButton onClick={toggleCart}>X</CloseButton>
        <h2>Cart</h2>
        {/* Список товаров в корзине */}
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={`${item.id}-${item.size}`}>
              {/* Изображение товара */}
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                {/* Название товара */}
                <ItemName>{item.name}</ItemName>
                {/* Цена товара с учетом количества */}
                <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
                {/* Выбранный размер товара */}
                <SizeSelector>Размер: {item.size}</SizeSelector>
                {/* Управление количеством товара */}
                <QuantityControls>
                  <QuantityButton onClick={() => handleQuantityChange(item, -1)}>
                    -
                  </QuantityButton>
                  <QuantityDisplay>{item.quantity}</QuantityDisplay>
                  <QuantityButton onClick={() => handleQuantityChange(item, 1)}>
                    +
                  </QuantityButton>
                </QuantityControls>
              </ItemDetails>
              {/* Кнопка для удаления товара из корзины */}
              <RemoveButton onClick={() => handleRemoveItem(item.id, item.size)}>
                Удалить
              </RemoveButton>
            </CartItem>
          ))}
        </CartItems>
        {/* Общая стоимость товаров в корзине */}
        <CartTotal>Total: ${total.toFixed(2)}</CartTotal>
        {/* Кнопка для открытия модального окна оформления заказа */}
        <CheckoutButton onClick={toggleCheckout}>Оформить заказ</CheckoutButton>
      </CartContainer>

      {/* Модальное окно для оформления заказа, отображается, если isCheckoutOpen === true */}
      {isCheckoutOpen && (
        <Modal>
          <ModalContent>
            {/* Кнопка для закрытия модального окна */}
            <ModalCloseButton onClick={toggleCheckout}>×</ModalCloseButton>
            <h2>Введите данные</h2>
            {/* Поля для ввода данных клиента */}
            <Input
              type="text"
              name="name"
              placeholder="Имя"
              onChange={handleInputChange}
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Телефон"
              onChange={handleInputChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
            {/* Кнопка для отправки заказа */}
            <SubmitButton onClick={handleOrderSubmit}>Отправить заказ</SubmitButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Cart;