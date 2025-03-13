import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffd700;
    color: black;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 1;
  display: flex;
  top: 0; /* Позиционирование на уровне кнопки */
  left: 100%; /* Открытие справа */
  margin-left: 5px; /* Отступ от кнопки */
`;

export const DropdownItem = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: black;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffd700;
    color: black;
  }
`;