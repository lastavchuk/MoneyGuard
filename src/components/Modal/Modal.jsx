import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
    ExitModalBtn,
    IconCloseModal,
    Backdrop,
    ModalStyled,
} from './Modal.styled';
import { useEffect } from 'react';

const modalContainer = document.getElementById('modal');

export const Modal = ({ children, closeReducer }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const onCloseModalEsc = evt => {
            if (evt.code === 'Escape') {
                dispatch(closeReducer());
            }
        };

        window.addEventListener('keydown', onCloseModalEsc);
        return () => {
            window.removeEventListener('keydown', onCloseModalEsc);
        };
    }, [closeReducer, dispatch]);

    const onCloseModal = evt => {
        if (evt.currentTarget === evt.target) {
            dispatch(closeReducer());
        }
    };
    const handleCloseModal = () => {
        dispatch(closeReducer());
    };

    return createPortal(
        <Backdrop onClick={onCloseModal}>
            <ModalStyled>
                <IconCloseModal onClick={handleCloseModal}>
                    <ExitModalBtn />
                </IconCloseModal>
                {children}
            </ModalStyled>
        </Backdrop>,
        modalContainer
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    closeReducer: PropTypes.func.isRequired,
};
