import { Button } from 'components/Button/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { closeModalLogout } from 'redux/global/globalSlice';
import { ButtonWrapper, ModalContainer, ModalWraper, Title } from './ModalLogOut.styled';

export const ModalLogOut = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  return (
    <ModalWraper>
      <ModalContainer>
        <Title>{user.username}, are you sure that you want to logout? 🧐</Title>
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => dispatch(closeModalLogout())}
            text="Cancel"
            variant={'secondary'}
          />
        </ButtonWrapper>
      </ModalContainer>
    </ModalWraper>
  );
};
