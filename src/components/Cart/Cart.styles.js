// cart.styles.js
import styled from 'styled-components';

export const CartToggle = styled.button`
  position: fixed;
  top: 40px;
  right: 20px;
  padding: 10px;
  background-color: black;
  border: none;
  cursor: pointer;
  z-index: 1000;
`;

export const CartIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: black;
  color: white;
  border-left: 1px solid #ccc;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
`;

export const CartItems = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;

export const ItemDetails = styled.div`
  flex-grow: 1;
`;

export const ItemName = styled.p`
  margin: 0;
`;

export const ItemPrice = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin: 0 5px;
`;

export const QuantityDisplay = styled.span`
  margin: 0 5px;
`;

export const RemoveButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
`;

export const CartTotal = styled.p`
  font-weight: bold;
`;

export const SizeSelector = styled.span`
  margin-bottom: 5px;
`;

export const CheckoutButton = styled.button`
  background-color: #ffd700;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px; 
  position: relative;
  box-sizing: border-box;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%; 
  max-width: 350px; 
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box; 
`;

export const SubmitButton = styled.button`
  background-color: #ffd700;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
`;
