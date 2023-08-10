import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { useMediaQuery } from 'react-responsive';

import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';

import { refreshUserThunk } from 'redux/auth/userThunks';
import { selectLoading, selectUserToken } from 'redux/selectors';
import Loader from './Loader/Loader';

import SharedLayout from './SharedLayout/SharedLayout';
import Notification from './Notification/Notification';

import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
const Home = lazy(() => import('pages/Home'));
const Currency = lazy(() => import('pages/Currency'));
const SummaryPage = lazy(() => import('pages/SummaryPage'));

export const App = () => {
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const isLoading = useSelector(selectLoading);
    const token = useSelector(selectUserToken);

    useEffect(() => {
        if (!token) return;
        dispatch(refreshUserThunk());
    }, [dispatch, token]);

    return (
        <>
            <Routes>
                <Route
                    path="login"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path="register"
                    element={
                        <PublicRoute>
                            <RegistrationPage />
                        </PublicRoute>
                    }
                />
                <Route path="/" element={<SharedLayout />}>
                    <Route
                        index
                        element={<PrivateRoute>{<Home />}</PrivateRoute>}
                    />
                    <Route
                        path="statistics"
                        element={
                            <PrivateRoute>
                                <SummaryPage />
                            </PrivateRoute>
                        }
                    />
                    {isMobile && (
                        <Route
                            path="currency"
                            element={
                                <PrivateRoute>
                                    <Currency />
                                </PrivateRoute>
                            }
                        />
                    )}
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Notification />
            {isLoading && <Loader />}
        </>
    );
};
