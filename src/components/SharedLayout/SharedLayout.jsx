import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledSharedLayout } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import Footer from 'components/Footer/Footer';

function SharedLayout() {
    return (
        <StyledSharedLayout>
            <Header />
            <div className="container">
                <SideBar />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </StyledSharedLayout>
    );
}
export default SharedLayout;
