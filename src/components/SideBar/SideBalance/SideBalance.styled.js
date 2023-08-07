import styled from 'styled-components';

export const BalanceDiv = styled.div`
    background: var(--balance-background-color);
    box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
    padding: 8px 0 11px 56px;
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
