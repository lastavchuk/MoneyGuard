import { NavLink } from 'react-router-dom';
import { NavDiv, NavList, NavItem, StyledLink } from './SideNav.styled';
import home from '../../../assests/images/symbol-defs.svg';

const SideNav = () => {
    console.log(home + "#home");

    return (
        <NavDiv>
            <ul>
                <li>
                    <svg width="24" height="24">
                        <use href={home + "#home"}></use>
                    </svg>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="statistic">Statistics</StyledLink>
                </li>
            </ul>
        </NavDiv>
    );
};

export default SideNav;
