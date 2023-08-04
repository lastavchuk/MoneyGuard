import SideNav from './SideNav/SideNav';
import SideBalance from './SideBalance/SideBalance'
import SideCurrency from './SideCurrency/SideCurrency';

const SideBar = () => {
    return (
        <>
            <SideNav />
            <SideBalance />
            <SideCurrency />
        </>
    );
};

export default SideBar;
