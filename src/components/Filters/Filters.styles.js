// src/components/Filters/Filters.styles.js
import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 200px;
  position: sticky;
  top: 20px; 
  height: fit-content; 
`;

export const FilterHeader = styled.h3`
  margin-bottom: 10px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? 'black' : '#f0f0f0')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: black;
  }
`;

export const ProductsCount = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;