import React from 'react';
import { PlusBtn, RoundedWrap } from './RoundButton.styled';
import { openModalAddTransaction } from 'redux/globalSlice';
import { useDispatch } from 'react-redux';

export const RoundButton = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModalAddTransaction());
  };
  return (
    <RoundedWrap onClick={handleOpenModal}>
      <PlusBtn />
    </RoundedWrap>
  );
};
