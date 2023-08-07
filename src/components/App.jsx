import Home from '../pages/Home';
import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { refreshUserThunk } from 'redux/auth/userThunks';
import { selectLoading, selectUserToken } from 'redux/selectors';
import { useSelector} from "react-redux";
import Loader from './Loader/Loader';
// import { loginUserThunk} from '../redux/auth/userThunks';

export const App = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectUserToken);
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        if (!token) return;
        dispatch(refreshUserThunk());
        // dispatch(getTransactionCategoriesThunk());
        // dispatch(fetchAllTransactionsThunk());
    }, [dispatch, token]);

    // function foo1() {
    //     dispatch(
    //         loginUserThunk({
    //             email: 'komp458@ukr.cc',
    //             password: 'komp458',
    //         })
    //     );
    // }
    // function foo2() {
    //     dispatch(fetchAllTransactionsThunk());

    return (
        <>
        {/* //     <h1 onClick={foo1}>login</h1>
        //     <h1 onClick={foo2}>All cat</h1> */}
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route
                    index
                    // element={<PrivateRoute>{<Home />}</PrivateRoute>}
                    element={<Home/>}
                />
                <Route
                    path="statistic"
                    element={<PrivateRoute>{/* <Statistic /> */}</PrivateRoute>}
                />
                <Route
                    path="login"
                    element={<PublicRoute>{/* <Login /> */}</PublicRoute>}
                />
                <Route
                    path="register"
                    element={<PublicRoute>{/* <Register /> */}</PublicRoute>}
                />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
         {isLoading && <Loader/>}
        </>
    );
};
