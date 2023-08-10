import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { StyledSharedLayout } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import Footer from 'components/Footer/Footer';
import SideNav from 'components/SideBar/SideNav/SideNav';
import SideBalance from 'components/SideBar/SideBalance/SideBalance';
import { useMediaQuery } from 'react-responsive';

function SharedLayout() {
    const location = useLocation();
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <StyledSharedLayout>
            <Header />
            <div className="container">
                {location.pathname === "/statistics" && isMobile && <SideNav />}
                {location.pathname === "/" && isMobile && <><SideNav /><SideBalance/></>}
                {!isMobile && <SideBar />}
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </StyledSharedLayout>
    );
}
export default SharedLayout;
