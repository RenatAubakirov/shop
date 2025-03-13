import styled from 'styled-components';

export const ReviewsPageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ReviewList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ReviewItem = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 600px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  width: 100%;
  border-radius: 5px;

  &:hover {
    background-color: #ffd700;
    color: black;
  }
`;
