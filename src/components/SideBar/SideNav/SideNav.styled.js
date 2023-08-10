import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdHome } from 'react-icons/io';
import { MdOutlineAutoGraph } from 'react-icons/md';
import { BiDollar } from 'react-icons/bi';

export const NavDiv = styled.nav`
    @media screen and (min-width: 320px) {
        margin-top: 12px;
        margin-bottom: 12px;
        width: 280px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 768px) {
        margin: 35px 0 23px 0px;
    }

    @media screen and (min-width: 1280px) {
        display: flex;
        margin: 0 auto 28px 16px;
        padding-top: 40px;
    }
`;

export const List = styled.ul`
    @media screen and (min-width: 320px) {
        display: flex;
        justify-content: space-around;
    }
`;

export const StyledLink = styled(NavLink)`
    @media screen and (min-width: 320px) {
    }

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #fbfbfb;

        &:first-child {
            margin-bottom: 12px;
        }

        &.active {
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
        }
    }

    @media screen and (min-width: 1280px) {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #fbfbfb;

        &.active {
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
        }
    }
`;

export const SvgHome = styled(IoMdHome)`
    @media screen and (min-width: 320px) {
        background-color: rgba(255, 255, 255, 0.4);
        fill: #302e8e;
        border-radius: 8px;
        width: 32px;
        height: 32px;
        margin-right: 0;
    }
    @media screen and (min-width: 768px) {
        background-color: rgba(255, 255, 255, 0.4);
        fill: #302e8e;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
    }

    @media screen and (min-width: 1280px) {
        background-color: rgba(255, 255, 255, 0.4);
        fill: #302e8e;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
    }
`;

export const SvgHomeActive = styled(IoMdHome)`
    @media screen and (min-width: 320px) {
        background-color: #734aef;
        fill: white;
        border-radius: 8px;
        width: 32px;
        height: 32px;
        margin-right: 0;
    }
    @media screen and (min-width: 768px) {
        background-color: #734aef;
        fill: white;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
    }

    @media screen and (min-width: 1280px) {
        background-color: #734aef;
        fill: white;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
    }
`;

export const SvgStat = styled(MdOutlineAutoGraph)`
    @media screen and (min-width: 320px) {
        background-color: rgba(255, 255, 255, 0.4);
        fill: #302e8e;
        border-radius: 8px;
        width: 32px;
        height: 32px;
        margin-right: 0;
    }
    @media screen and (min-width: 768px) {
        background-color: rgba(255, 255, 255, 0.4);
        fill: #302e8e;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
    }

    @media screen and (min-width: 1280px) {
        background-color: rgba(255, 255, 255, 0.4);
        fill: #302e8e;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
    }
`;

export const SvgStatActive = styled(MdOutlineAutoGraph)`
    @media screen and (min-width: 320px) {
        background-color: #734aef;
        fill: white;
        border-radius: 8px;
        width: 32px;
        height: 32px;
        margin-right: 0;
    }
    @media screen and (min-width: 768px) {
        background-color: #734aef;
        fill: white;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
    }

    @media screen and (min-width: 1280px) {
        background-color: #734aef;
        fill: white;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
    }
`;

export const SvgDollar = styled(BiDollar)`
    background-color: rgba(255, 255, 255, 0.4);
    fill: #302e8e;
    border-radius: 8px;
    width: 32px;
    height: 32px;
`;

export const SvgDollarActive = styled(BiDollar)`
    background-color: #734aef;
    fill: white;
    border-radius: 8px;
    width: 32px;
    height: 32px;
`;
