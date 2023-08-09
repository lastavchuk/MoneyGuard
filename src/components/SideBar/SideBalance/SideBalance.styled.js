import styled from 'styled-components';

export const BalanceDiv = styled.div`
    margin: 0 auto;
    padding: 8px 0 11px 32px;
    width: 280px;

    background: var(--balance-background-color);
    box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    @media screen and (max-width: 767px) {
        margin-bottom: 32px;
    }

    @media screen and (min-width: 768px) {
        padding: 8px 0 11px 40px;
        width: 336px;
    }

    @media screen and (min-width: 1280px) {
        /* display: block !important; */
        padding: 6px 0 8px 56px;
        width: 480px;
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
