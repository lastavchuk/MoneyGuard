import styled from 'styled-components';

export const BalanceDiv = styled.div`
    @media screen and (min-width: 320px) {
        background: var(--balance-background-color);
        box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
        padding: 8px 0 11px 32px;
        margin: 0 auto;
        border-radius: 8px;
        width: 280px;
    }

    @media screen and (min-width: 768px) {
        background: var(--balance-background-color);
        box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
        padding: 8px 0 11px 40px;
        border-radius: 8px;
        margin: 0;
        width: 336px;
    }

    @media screen and (min-width: 1280px) {
        display: block !important;
        background: var(--balance-background-color);
        box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
        padding: 6px 0 8px 56px;
        border-radius: 0;
        margin: 0;
        width: 480px;
    }
`;

export const BalanceText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 8px;
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
