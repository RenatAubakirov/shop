import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  margin-top: 20px; 
  width: 100%;
  max-width: 1400px; 
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px; 
`;

export const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
  max-height: calc(100vh - 40px); 
  width: 100%;
`;

export const Sidebar = styled.div`
  width: 250px; 
  flex-shrink: 0; 
  margin-right: 20px; 
`;

export const ProductSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
