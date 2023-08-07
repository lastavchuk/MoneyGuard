import styled from 'styled-components';

export const ModalWraper = styled.div``; 

export const ModalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 50px;
  margin-top: 70px;
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
`;

export const CloseBtn = styled.button``;
