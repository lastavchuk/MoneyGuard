import { Button } from 'components/Button/Button';
import React from 'react';
import { ModalContainer, ButtonWrapper, ModalWraper, Title } from './ModalLogOut.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logOutThunk } from 'redux/auth/userThunks';
import { closeModalLogout } from 'redux/auth/userSlice';
import { toast } from 'react-toastify';

export const ModalLogOut = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOutThunk())
  .unwrap()
  .then(data => {
    toast.success(`You have successfully logged out. We hope to see you back soon!`);
  });
    dispatch(closeModalLogout());
  };
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
          <Button type="button" onClick={handleLogOut} text="Yeah, Exit" />
        </ButtonWrapper>
      </ModalContainer>
    </ModalWraper>
  );
};
