import Home from '../pages/Home';
import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import SharedLayout from 'layout/SharedLayout';
// import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
// import { loginUserThunk} from '../redux/auth/userThunks';

export const App = () => {
    // const dispatch = useDispatch();
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
    // }

    return (

        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route
                    index
                    element={<PrivateRoute>{<Home />}</PrivateRoute>}
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
    );
};
