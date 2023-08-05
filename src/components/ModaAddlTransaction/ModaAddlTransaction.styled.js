import { Field, Form } from 'formik';
import { HiOutlineMinus } from 'react-icons/hi';
import { BsPlusLg } from 'react-icons/bs';
import styled from 'styled-components';

export const ModalTransactionTitle = styled.h2`
  font-size: ${({ customName }) => customName.fontSizes.xl};
  font-weight: ${({ customName }) => customName.fontWeights.regular};
  margin-bottom: ${({ customName }) => customName.spacing(10)};
`;

export const ModalAddWrapper = styled.div`
  text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const RadioWrapperChoose = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ customName }) => customName.spacing(5)};
`;

export const RadioWrapper = styled.span`
  width: ${({ customName }) => customName.spacing(20)};
  height: ${({ customName }) => customName.spacing(10)};
  border-radius: ${({ customName }) => customName.spacing(7.5)};
  background-color: white;
  display: flex;
  position: relative;
`;
export const StyledInp = styled.input`
  display: none;
`;


export const StyledLabelWrapper = styled.span`
  display: inline-block;
  width: 50%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;
export const IncomeSpan = styled.span`
  color: ${({ isSelected }) =>
    isSelected === true ? '#ffb627' : 'rgb(251, 251, 251)'};
`;

export const RoundedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ customName }) => customName.spacing(11)};
  height: ${({ customName }) => customName.spacing(11)};
  border-radius: 50%;
  background-color: ${({ type }) => (type === 'true' ? '#ffb627' : '#ff868d')};
  box-shadow: 0px 0px 7px 5px rgba(255, 182, 39, 0.33);
  position: absolute;
  left: -3%;
  top: -5%;

  transform: ${({ type }) =>
    type === 'true' ? 'translateX(0) rotateY(180deg)' : 'translateX(100%) '};
  transition: ${({ customName }) => customName.transitions.color};
`;

export const PlusButton = styled(BsPlusLg)`
  width: ${({ customName }) => customName.spacing(7)};
  height: ${({ customName }) => customName.spacing(7)};
`;
export const ExpenseSpan = styled.span`
  color: ${({ isSelected }) =>
    isSelected === true ? '#ff868d' : 'rgb(251, 251, 251)'};
`;

export const MinusButton = styled(HiOutlineMinus)`
  width: ${({ customName }) => customName.spacing(7)};
  height: ${({ customName }) => customName.spacing(7)};
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const StyledField = styled(Field)`
  height: ${({ customName }) => customName.spacing(10)};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid currentColor;
  color: ${({ customName }) => customName.colors.secondaryFont};
  width: 100%;
  padding: ${({ customName }) => customName.spacing(2)};
  font-weight: ${({ weight }) => weight};
  appearance: none;
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: currentColor;
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(0.6);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
