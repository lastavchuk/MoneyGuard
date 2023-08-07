import { NavLink } from 'react-router-dom';
import {
    NavDiv,
    NavList,
    NavItem,
    StyledLink,
    SvgHome,
    SvgStat,
    SideNavText,
} from './SideNav.styled';

const SideNav = () => {
    return (
        <NavDiv>
            <ul>
                <li>
                    <StyledLink to="/">
                        <SvgHome />
                        <SideNavText>Home</SideNavText>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="statistics">
                        <SvgStat />
                        <SideNavText>Statistics</SideNavText>
                    </StyledLink>
                </li>
            </ul>
        </NavDiv>
    );
};

export default SideNav;
