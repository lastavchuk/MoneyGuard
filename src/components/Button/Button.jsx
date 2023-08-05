import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick = null, text, type = 'button', variant = 'primary' }) => {
  return (
    <ButtonStyled type={type} onClick={onClick} variant={variant}>
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
};
