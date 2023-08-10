import styled from 'styled-components';

export const Table = styled.table`
    @media screen and (min-width: 320px) {
        margin: 0 auto;
    }

    @media screen and (min-width: 768px) {
        margin: 0 auto;
    }

    @media screen and (min-width: 1280px) {
        margin-left: 84px;
        margin-right: 131px;
    }
`;

export const Category = styled.div`
    @media screen and (min-width: 320px) {
        display: flex;
        background: rgba(255, 255, 255, 0.2);
        padding: 13px 20px 13px 20px;
        justify-content: space-around;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        background: rgba(255, 255, 255, 0.2);
        padding: 12px 20px 12px 20px;
    }

    @media screen and (min-width: 1280px) {
        display: flex;
        background: rgba(255, 255, 255, 0.2);
        padding: 16px 131px 16px 62px;
    }
`;

export const Currency = styled.p`
    @media screen and (min-width: 320px) {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-right: 26px;
    }

    @media screen and (min-width: 768px) {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-right: 34px;
    }

    @media screen and (min-width: 1280px) {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-right: 50px;
    }
`;

export const Purchase = styled.p`
    @media screen and (min-width: 320px) {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-right: 66px;
    }

    @media screen and (min-width: 768px) {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-right: 74px;
    }

    @media screen and (min-width: 1280px) {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-right: 50px;
    }
`;

export const Sale = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`;

export const CurrencyTable = styled.td`
    @media screen and (min-width: 320px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding-right: 88px;
        padding-top: 8px;
    }

    @media screen and (min-width: 768px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding-right: 90px;
        padding-top: 8px;
    }

    @media screen and (min-width: 1280px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding-right: 88px;
        padding-top: 24px;
    }
`;

export const CurrencyBuy = styled.td`
    @media screen and (min-width: 320px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding-right: 76px;
        padding-top: 8px;
    }

    @media screen and (min-width: 768px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding-right: 80px;
        padding-top: 8px;
    }

    @media screen and (min-width: 1280px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding-right: 61px;
        padding-top: 24px;
    }
`;

export const CurrencySell = styled.td`
    @media screen and (min-width: 320px) {
        padding-top: 8px;
    }

    @media screen and (min-width: 768px) {
        padding-top: 8px;
    }

    @media screen and (min-width: 1280px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding-top: 24px;
    }
`;
