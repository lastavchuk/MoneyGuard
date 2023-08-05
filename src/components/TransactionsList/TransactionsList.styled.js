import styled from 'styled-components';

export const StyledTransactionsList = styled.tbody`
    font-size: 14px;

    tr {
        height: 53px;
    }

    td {
        text-align: left;
    }

    td:first-child {
        padding-left: 20px;
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

    td {
    }
    button.edit {
        width: 14px;
        height: 14px;
    }
    button.delete {
        color: var(--white);
        background: var(--gradient-button);
        width: 69px;
        height: 29px;
        border-radius: 20px;
    }
`;
