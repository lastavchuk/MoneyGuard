import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdHome } from 'react-icons/io';
import { MdOutlineAutoGraph } from 'react-icons/md';
import { BiDollar } from 'react-icons/bi';

export const NavDiv = styled.nav`
    @media screen and (min-width: 320px) {
    }

    @media screen and (min-width: 768px) {
        margin: 40px 0 28px 32px;
    }

    @media screen and (min-width: 1280px) {
        display: flex;
        margin: 0 auto 28px 16px;
        padding-top: 40px;
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
    @media screen and (min-width: 768px) {
        background-color: rgba(255, 255, 255, 0.4);
        fill: #302e8e;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
        margin-bottom: 13px;
    }

    @media screen and (min-width: 1280px) {
        background-color: rgba(255, 255, 255, 0.4);
        fill: #302e8e;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
        margin-bottom: 0px;
    }
`;

export const SvgHomeActive = styled(IoMdHome)`
    @media screen and (min-width: 768px) {
        background-color: #734aef;
        fill: white;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
        margin-bottom: 13px;
    }

    @media screen and (min-width: 1280px) {
        background-color: #734aef;
        fill: white;
        border-radius: 2px;
        width: 18px;
        height: 18px;
        margin-right: 20px;
        margin-bottom: 0px;
    }
`;

export const SvgStat = styled(MdOutlineAutoGraph)`
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
    background-color: #734aef;
    fill: white;
    border-radius: 2px;
    width: 18px;
    height: 18px;
    margin-right: 20px;
`;

export const SvgDollar = styled(BiDollar)``;

export const SvgDollarActive = styled(BiDollar)``;
