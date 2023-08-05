import SideNav from './SideNav/SideNav';
import SideBalance from './SideBalance/SideBalance'
import SideCurrency from './SideCurrency/SideCurrency';
import {MainContainer} from './SideBar.styled'

const SideBar = () => {
    return (
        <MainContainer>
            <SideNav />
            <SideBalance />
            <SideCurrency />
        </MainContainer>
    );
};

export default SideBar;
