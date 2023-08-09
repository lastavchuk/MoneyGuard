import SideNav from './SideNav/SideNav';
import SideBalance from './SideBalance/SideBalance';
import SideCurrency from './SideCurrency/SideCurrency';
import {
    MainContainer,
    UpperContainer,
    DownContainer,
    Graphics,
    Line,
} from './SideBar.styled';

const SideBar = () => {

    return (
        <MainContainer>
            <UpperContainer>
                <SideNav />
                <SideBalance />
            </UpperContainer>
            <DownContainer>
                <SideCurrency />
                <Graphics />
                <Line />
            </DownContainer>
        </MainContainer>
    );
};

export default SideBar;
