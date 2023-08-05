import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdHome } from 'react-icons/io';
import { MdOutlineAutoGraph } from 'react-icons/md';

export const NavDiv = styled.div`
    display: flex;
    margin: 40px auto 28px 16px;
`;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
`;

export const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
`;

export const SvgHome = styled(IoMdHome)`
    background-color: rgba(255, 255, 255, 0.4);
    fill: #302e8e;
    border-radius: 2px;
    width: 18px;
    height: 18px;
    margin-right: 20px;

    &:active {
        background-color: #734aef;
    }
`;

export const SideNavText = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
`;

export const SvgStat = styled(MdOutlineAutoGraph)`
    background-color: rgba(255, 255, 255, 0.4);
    fill: #302e8e;
    border-radius: 2px;
    width: 18px;
    height: 18px;
    margin-right: 20px;

    &:active {
        background-color: #734aef;
    }
`;
