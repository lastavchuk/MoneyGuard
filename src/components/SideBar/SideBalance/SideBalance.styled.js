import styled from 'styled-components';

export const BalanceDiv = styled.div`
    @media screen and (min-width: 320px) {
    }

    @media screen and (min-width: 768px) {
        background: var(--balance-background-color);
        box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
        padding: 8px 0 11px 40px;
        border-radius: 8px;
    }

    @media screen and (min-width: 1280px) {
        background: var(--balance-background-color);
        box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
        padding: 8px 0 11px 56px;
        border-radius: 0;
    }
`;

export const BalanceText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 12px;
`;

export const Balance = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    display: flex;
    align-items: center;
    color: #fbfbfb;
`;
