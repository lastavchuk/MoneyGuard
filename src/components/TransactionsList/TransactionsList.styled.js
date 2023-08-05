import styled from 'styled-components';

export const StyledTransactionsList = styled.tbody`
    font-size: 14px;

    tr {
        position: relative;
        width: 700px;
        height: 53px;
    }

    tr:not(:last-child)::after {
        content: '';
        position: absolute;
        left: 10px;
        right: 0;
        bottom: -1px;
        height: 1px;
       border-bottom: 1px solid white;
       opacity: 0.2;
    }

    td {
        text-align: left;
    }

    td:first-child {
        padding-left: 15px;
    }

    td:nth-child(2) {
        width: 123px;
        text-align: center;
    }

    td:last-child {
        text-align: right;
        padding-right: 6px;
    }

    td.income {
        font-weight: 600;
        color: var(--yellow);
        text-align: right;
    }
    td.expense {
        font-weight: 600;
        color: var(--dashboard-text);
        text-align: right;
    }
    
    button.edit {
        width: 14px;
        height: 14px;
        background-color: transparent;
        color: var(--white-60);
        margin-right: 8px;
    }
    button.delete {
        color: var(--white);
        background: var(--gradient-button);
        width: 69px;
        height: 29px;
        border-radius: 20px;
        box-shadow: var(--button-shadow);
    }
`;
