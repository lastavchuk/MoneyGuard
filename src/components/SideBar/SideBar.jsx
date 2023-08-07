import SideNav from './SideNav/SideNav';
import SideBalance from './SideBalance/SideBalance';
import SideCurrency from './SideCurrency/SideCurrency';
import {
    MainContainer,
    UpperContainer,
    DownContainer,
    ElipceOne,
    ElipceTwo,
    Graphics,
    Line
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
                <ElipceTwo />
                <Graphics>
                    <Line />
                </Graphics>
            </DownContainer>
            <ElipceOne />
        </MainContainer>
    );
};

export default SideBar;
