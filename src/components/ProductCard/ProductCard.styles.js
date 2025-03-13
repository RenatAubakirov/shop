import styled from 'styled-components';

export const Card = styled.div`
  padding: 10px;
  width: 250px; 
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #ddd; 
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.05); 
  }
`;

export const ImageContainer = styled.div`
  width: 100%; 
  height: 250px; 
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; 
  transition: opacity 0.3s ease;
`;

export const HoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; 
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const ProductName = styled.h3`
  margin-top: 10px;
  font-size: 16px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

export const AddToCartButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  transition: background-color 0.3s ease;
  outline: none; 

  &:hover {
    background-color: #ffd700; 
  }
`;

export const CardContainer = styled.div`
  width: 100%; 
  display: flex;
  justify-content: center; 

  // При наведении на CardContainer
  &:hover {
    ${ProductImage} {
      opacity: 0;
    }
    ${HoverImage} {
      opacity: 1;
    }

    ${AddToCartButton} {
      background-color: #ffd700; 
    }
  }
`;
