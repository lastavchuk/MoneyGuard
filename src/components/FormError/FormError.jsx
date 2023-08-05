import PropTypes from 'prop-types';
import { ErrorText } from 'components/FormError/FormError.styled';
import { ErrorMessage } from 'formik';

export const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>}/>;
}

FormError.propTypes = {
    name: PropTypes.string.isRequired,
};