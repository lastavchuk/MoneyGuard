import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';

import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';

import { refreshUserThunk } from 'redux/auth/userThunks';
import { selectLoading, selectUserToken } from 'redux/selectors';
import Loader from './Loader/Loader';

import SharedLayout from './SharedLayout/SharedLayout';
import Notification from './Notification/Notification';
import Currency from 'pages/Currency';
import { useMediaQuery } from 'react-responsive';

const Home = lazy(() => import('../pages/Home'));
const SummaryPage = lazy(() => import('../pages/SummaryPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
    import('../pages/RegistrationPage/RegistrationPage')
);

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
                  {isMobile &&  <Route
                        path="currency"
                        element={
                            <PrivateRoute>
                              <Currency/>
                            </PrivateRoute>
                        }
                    />} 
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Notification />
            {isLoading && <Loader />}
        </>
    );
};
