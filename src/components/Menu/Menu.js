import React, { useState, useEffect, useRef } from 'react';
import { MenuContainer, MenuButton, DropdownContent, DropdownItem } from './Menu.styles';

const Menu = () => {
  // useState для управления состоянием открытия/закрытия выпадающего меню
  const [isOpen, setIsOpen] = useState(false);

  // useRef для получения доступа к DOM-элементу контейнера меню
  const menuRef = useRef(null);

  // useEffect для добавления и удаления слушателя событий клика вне меню
  useEffect(() => {
    // Функция для обработки клика вне меню
    const handleClickOutside = (event) => {
      // Проверяем, существует ли ссылка на контейнер меню и не содержит ли контейнер элемент, на который кликнули
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Если клик был вне меню, закрываем его
        setIsOpen(false);
      }
    };

    // Добавляем слушатель события клика мыши на документ
    document.addEventListener('mousedown', handleClickOutside);

    // Функция для удаления слушателя события при размонтировании компонента
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []); // Пустой массив зависимостей означает, что эффект выполняется только при монтировании и размонтировании компонента

  return (
    // Контейнер меню, использующий useRef для получения доступа к DOM-элементу
    <MenuContainer ref={menuRef} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {/* Кнопка меню */}
      <MenuButton>Меню</MenuButton>

      {/* Условный рендеринг выпадающего меню, если isOpen равно true */}
      {isOpen && (
        <DropdownContent>
          {/* Пункты выпадающего меню, использующие DropdownItem */}
          <DropdownItem to="/">Главная</DropdownItem>
          <DropdownItem to="/reviews">Отзывы</DropdownItem>
          <DropdownItem to="/contacts">Контакты</DropdownItem>
        </DropdownContent>
      )}
    </MenuContainer>
  );
};

export default Menu;