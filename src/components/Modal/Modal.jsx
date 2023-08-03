import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
const modalContainer = document.getElementById('modal');

export const Modal = ({ children }) => {
  return createPortal(<div>{children}</div>, modalContainer);
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};