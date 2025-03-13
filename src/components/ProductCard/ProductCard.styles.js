import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 10px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const HoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  height: auto;

  &:hover {
    opacity: 1;
  }
`;

export const ProductName = styled.h3`
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  background-color: black; /* Черный цвет */
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #ffd700; /* Желтый цвет при наведении */
    color: black;
  }
`;

export const ReviewsButton = styled.button`
  background-color: black; /* Черный цвет */
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #ffd700; /* Желтый цвет при наведении */
    color: black;
  }
`;