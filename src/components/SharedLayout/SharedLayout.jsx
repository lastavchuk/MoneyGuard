import { Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { StyledSharedLayout } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';

function SharedLayout() {

    return (
        <StyledSharedLayout>
            <Header />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            {/* <Footer /> */}
        </StyledSharedLayout>
    );
}
export default SharedLayout;
