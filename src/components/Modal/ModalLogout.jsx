import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { logOutUserThunk } from 'redux/auth/userThunks';
import { closeModalLogout } from 'redux/globalSlice';
import {
    ButtonWrapper,
    LogotipStyled,
    ModalContainer,
    ModalWraper,
    Title,
} from './ModalLogout.styled';
import Logotip from '../../assests/img/logo.svg';

export const ModalLogout = () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOutUserThunk());
        dispatch(closeModalLogout());
    };

    return (
        <ModalWraper>
            <ModalContainer>
                <LogotipStyled>
                    <img
                        src={Logotip}
                        alt="Logo MoneyGuard"
                        width="36px"
                        height="36px"
                    />
                    <h3>MoneyGuard</h3>
                </LogotipStyled>
                <Title>Are you sure you want to log out?</Title>

                <ButtonWrapper>
                    <Button
                        type="button"
                        onClick={handleLogOut}
                        text="Logout"
                    />
                    <Button
                        type="button"
                        onClick={() => dispatch(closeModalLogout())}
                        text="Cancel"
                        $variant={'secondary'}
                    />
                </ButtonWrapper>
            </ModalContainer>
        </ModalWraper>
    );
};
