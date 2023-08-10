import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsAuth} from 'redux/selectors';

export default function PublicRoute({ children }) {
    const userIsAuth = useSelector( selectUserIsAuth );
    return !userIsAuth ? children : <Navigate to="/" />;
}

PublicRoute.propTypes = {
    children: PropTypes.node,
};
