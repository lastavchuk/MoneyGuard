import SideNav from './SideNav/SideNav';
import SideBalance from './SideBalance/SideBalance';
import SideCurrency from './SideCurrency/SideCurrency';
import { useMediaQuery } from '@react-hook/media-query';
import {
    MainContainer,
    UpperContainer,
    DownContainer,
    Graphics,
    Line,
} from './SideBar.styled';
import { useLocation } from 'react-router-dom';

const SideBar = () => {
    const isSmallScreen = useMediaQuery('(max-width: 767px)');
    const location = useLocation();

    return (
        <MainContainer>
            <UpperContainer>
                <SideNav />
                {location.pathname === '/currency' ? null : <SideBalance />}
            </UpperContainer>
            <DownContainer>
                {isSmallScreen === true ? (
                    <></>
                ) : (
                    <>
                        <SideCurrency />
                        <Graphics />
                        <Line />
                    </>
                )}
            </DownContainer>
        </MainContainer>
    );
};

export default SideBar;
