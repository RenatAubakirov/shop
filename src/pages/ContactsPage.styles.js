/* ContactsPage.styles.js */
import styled from 'styled-components';

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Высота на весь экран */
  width: 100%; /* Обеспечивает центрирование по горизонтали */
  text-align: center; /* Центрирование текста */
`;

export const ContactBox = styled.div`
  border: 2px solid black;
  padding: 20px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрирование контента */
  justify-content: center; /* Центрирование внутри рамки */
  margin: auto; /* Центрирование блока */
`;
