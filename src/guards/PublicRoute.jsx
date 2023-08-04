import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserToken } from 'redux/selectors';

export default function PublicRoute({ children }) {
    const token = useSelector(selectUserToken);
    return !token ? children : <Navigate to="/" />;
}

PublicRoute.propTypes = {
    children: PropTypes.node,
};
