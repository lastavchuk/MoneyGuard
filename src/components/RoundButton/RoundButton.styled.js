import { BsPlusLg } from 'react-icons/bs';
import styled from 'styled-components';

export const RoundedWrap = styled.button`
  width: ${({ theme }) => theme.spacing(11)};
  height: ${({ theme }) => theme.spacing(11)};
  background: ${({ theme }) => theme.colors.btnGradient};
  color: currentColor;
  border-radius: 50%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    outline: none;
    border-radius: 50%;
    border: 2px solid yellow;
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (min-width: 768px) {
    bottom: ${({ theme }) => theme.spacing(10)};
    right: ${({ theme }) => theme.spacing(10)};
  }
`;

export const PlusBtn = styled(BsPlusLg)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  &:hover {
    cursor: pointer;
  }
`;
