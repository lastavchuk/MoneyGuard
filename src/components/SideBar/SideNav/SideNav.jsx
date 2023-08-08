import { NavLink, useLocation } from 'react-router-dom';
import {
    NavDiv,
    StyledLink,
    SvgHome,
    SvgStat,
    SvgHomeActive,
    SvgStatActive
} from './SideNav.styled';

const SideNav = () => {
    const location = useLocation();
    

    return (
        
        <NavDiv>
            <ul>
                <li>
                    <StyledLink to="/">
                        {location.pathname === '/' ? <SvgHomeActive /> : <SvgHome />} 
                        Home
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="statistics">
                        {location.pathname === '/statistics' ? <SvgStatActive /> : <SvgStat />}
                        Statistics
                    </StyledLink>
                </li>
            </ul>
        </NavDiv>
    );
};

export default SideNav;
