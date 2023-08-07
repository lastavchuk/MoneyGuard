import Statistics from './Statistics/Statistics';

// import HomeTab from "./HomeTab/HomeTab";

import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import SharedLayout from 'layout/SharedLayout';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { loginUserThunk } from 'redux/auth/userThunks';
import { fetchAllTransactionsThunk } from 'redux/finance/financeThunks';
import HomeTab from './HomeTab/HomeTab';

export const App = () => {
    const dispatch = useDispatch();
    function foo1() {
        dispatch(
            loginUserThunk({
                email: 'komp458@ukr.cc',
                password: 'komp458',
            })
        );
    }
    foo1();
    // function foo2() {
    //     dispatch(fetchAllTransactionsThunk());
    // }

    return (
        <div>
            <h1>Money Guard</h1>
            <Statistics />
        </div>
        // <>
        //     <h1 onClick={foo1}>login</h1>
        //     <h1 onClick={foo2}>All cat</h1>
        // </>
        // <Routes>
        //     <Route path="/" element={<SharedLayout />}>
        //         <Route
        //             index
        //             element={<PrivateRoute>{<HomeTab />}</PrivateRoute>}
        //         />
        //         <Route
        //             path="statistic"
        //             element={<PrivateRoute>{/* <Statistic /> */}</PrivateRoute>}
        //         />
        //         <Route
        //             path="login"
        //             element={<PublicRoute>{/* <Login /> */}</PublicRoute>}
        //         />
        //         <Route
        //             path="register"
        //             element={<PublicRoute>{/* <Register /> */}</PublicRoute>}
        //         />
        //     </Route>
        //     <Route path="*" element={<Navigate to="/" replace />} />
        // </Routes>
    );
};
