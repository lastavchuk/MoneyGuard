import { NavLink, useLocation } from 'react-router-dom';
import {
    NavDiv,
    StyledLink,
    SvgHome,
    SvgStat,
    SvgHomeActive,
    SvgStatActive,
    SvgDollar,
    SvgDollarActive,
    List
} from './SideNav.styled';
import { useMediaQuery } from '@react-hook/media-query';

const SideNav = () => {
    const location = useLocation();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <NavDiv>
            {isSmallScreen === true ? (
                <List>
                    <li>
                        <StyledLink to="/">
                            {location.pathname === '/' ? (
                                <SvgHomeActive />
                            ) : (
                                <SvgHome />
                            )}
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="statistics">
                            {location.pathname === '/statistics' ? (
                                <SvgStatActive />
                            ) : (
                                <SvgStat />
                            )}
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="currency">
                            {location.pathname === '/currency' ? (
                                <SvgDollarActive />
                            ) : (
                                <SvgDollar />
                            )}
                        </StyledLink>
                    </li>
                </List>
            ) : (
                <ul>
                    <li>
                        <StyledLink to="/">
                            {location.pathname === '/' ? (
                                <SvgHomeActive />
                            ) : (
                                <SvgHome />
                            )}
                            Home
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="statistics">
                            {location.pathname === '/statistics' ? (
                                <SvgStatActive />
                            ) : (
                                <SvgStat />
                            )}
                            Statistics
                        </StyledLink>
                    </li>
                </ul>
            )}
        </NavDiv>
    );
};

export default SideNav;
