import React, { useState, useEffect, useRef } from 'react';
import { MenuContainer, MenuButton, DropdownContent, DropdownItem } from './Menu.styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <MenuContainer ref={menuRef} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <MenuButton>Меню</MenuButton>
      {isOpen && (
        <DropdownContent>
          <DropdownItem to="/">Главная</DropdownItem>
          <DropdownItem to="/reviews">Отзывы</DropdownItem>
          <DropdownItem to="/contacts">Контакты</DropdownItem>
        </DropdownContent>
      )}
    </MenuContainer>
  );
};

export default Menu;
