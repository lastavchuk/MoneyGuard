import styled from 'styled-components';

export const ModalWraper = styled.div``;

export const ModalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
`;

export const Title = styled.p`
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`;

export const CloseBtn = styled.button``;
