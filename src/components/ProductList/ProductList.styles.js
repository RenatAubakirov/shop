import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr)); 
  gap: 20px;
  padding: 20px;
  justify-content: center; 
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto; 
`;

export const SizeSelector = styled.select`
  margin-top: 10px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  background-color: white;
  cursor: pointer;
`;
