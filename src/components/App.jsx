// import HomeTab from "./HomeTab/HomeTab";

import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { refreshUserThunk } from 'redux/auth/userThunks';
import { selectLoading, selectUserToken } from 'redux/selectors';
import { useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import Home from 'pages/Home';
import SummaryPage from 'pages/SummaryPage';

const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));

export const App = () => {
    const dispatch = useDispatch();

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
                            <Route
              element={
                <PrivateRoute
                  component={<DashboardPage />}
                  redirectTo="/login"
                />
              }
            ></Route>
                {/* <Route path="/home" element={<Home />} /> */}
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
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            {isLoading && <Loader />}
        </>
    );
};
