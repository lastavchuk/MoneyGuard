import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, ExitModalBtn, IconCloseModal, ModalStyled } from './Modal.styled';

const modalWrapper = document.getElementById('modal');
export const Modal = ({ children, closeReducer }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const onCloseModalEsc = evt => {
            if (evt.code === 'Escape') {
             dispatch(closeReducer());
            }
        };
        window.addEventListener('keydown', onCloseModalEsc);
        return() => {
            window.removeEventListener('keydown', onCloseModalEsc);
        };
    }, [closeReducer, dispatch]);
    const onCloseModal = evt => {
        if(evt.currentTarget === evt.target) {
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
          </IconCloseModal>{children}
          </ModalStyled>
        </Backdrop>,modalWrapper
      );
    };

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    closeReducer: PropTypes.func.isRequired,
};