import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsAuth } from 'redux/selectors';

export default function PrivateRoute({ children }) {

    const userIsAuth = useSelector( selectUserIsAuth );
    return !!userIsAuth ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
