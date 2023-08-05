import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

function SharedLayout() {
    return (
        <>
            {/* <Header /> */}
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            {/* <Footer /> */}
        </>
    );
}
export default SharedLayout;
