// import HomeTab from "./HomeTab/HomeTab";

import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { refreshUserThunk } from 'redux/auth/userThunks';
import { selectLoading, selectUserIsAuth } from 'redux/selectors';
import { useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';

export const App = () => {
    const dispatch = useDispatch();
    const userIsAuth = useSelector(selectUserIsAuth);
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        if (!userIsAuth) return;
        dispatch(refreshUserThunk());
    }, [dispatch, userIsAuth]);

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
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<SharedLayout />}>
                    <Route
                        index
                        element={<PrivateRoute>{<Home />}</PrivateRoute>}
                        // element={<Home />}
                    />
                    {/* <Route
                        path="statistic"
                        element={
                            <PrivateRoute><Statistic /></PrivateRoute>
                        }
                    /> */}
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            {isLoading && <Loader />}
        </>
    );
};
