import styled from 'styled-components';

export const StyledTransactionsList = styled.div`
    margin: 0 auto;
    width: 280px;
    position: relative;
    overflow: hidden;

    &.expense::before {
        content: '';
        position: absolute;
        left: 0;
        height: 300px;
        width: 5px;
        background-color: var(--dashboard-text);
    }

    &.income::before {
        content: '';
        position: absolute;
        left: 0;
        height: 300px;
        width: 5px;
        background-color: var(--yellow);
    }

    li {
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    li:nth-child(4) p {
        text-align: right;
    }

    li:not(:last-child)::after {
        content: '';
        position: absolute;
        left: -20px;
        right: -20px;
        bottom: -1px;
        height: 1px;
        border-bottom: 1px solid white;
        opacity: 0.2;
    }

    li:last-child {
        height: 53px;
    }

    &.expense li:nth-child(5) p {
        font-weight: 600;
        color: var(--dashboard-text);
        text-align: right;
    }

    &.income li:nth-child(5) p {
        font-weight: 600;
        color: var(--yellow);
        text-align: right;
    }

    b {
        font-weight: 600;
        margin-right: 27px;
    }

    button.edit {
        width: 48px;
        height: 24px;
        background-color: transparent;
        color: var(--white-60);
        box-shadow: none;
    }

    button.edit:hover {
        color: var(--white);
    }

    button.delete {
        color: var(--white);
        background: var(--gradient-button);
        width: 69px;
        height: 29px;
        border-radius: 20px;
        font-size: 14px;
        box-shadow: var(--button-shadow);
    }

    @media only screen and (max-width: 767px) {
        padding: 0 20px;
        height: 293px;
        margin-bottom: 8px;
        border-radius: 10px;
        height: 293px;
        background: rgba(255, 255, 255, 0.1);

        button.edit {
            display: flex;
            justify-content: space-between;
        }
    }

    @media only screen and (min-width: 768px) {
        display: block;
        max-height: 318px;
        overflow: auto;
        width: 704px;
        &::-webkit-scrollbar {
            width: 8px;
            border-radius: 4px;
            background-color: #734aef;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--balance-background-color);
            border-radius: 4px;
        }

        .income {
            font-weight: 600;
            color: var(--yellow);
            text-align: right;
        }
        .expense {
            font-weight: 600;
            color: var(--dashboard-text);
            text-align: right;
        }

        table {
            width: 100%;
            border-spacing: 0px;
            border-collapse: collapse;
            max-height: 308px;
        }

        thead {
            height: 56px;
            background-color: var(--balance-background-color);
            backdrop-filter: var(--backdrop-filter);
            position: sticky;
            top: 0;
            z-index: 2;
        }

        tbody {
            height: 265px;
            overflow: hidden;
        }

        th {
            padding: 0;
            font-weight: 600;
            text-align: left;
        }
        th:first-child {
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            text-align: left;
            padding-left: 20px;
            width: 91px;
        }

        th:nth-child(2) {
            text-align: center;
        }

        th:nth-child(3) {
            width: 146px;
        }

        th:nth-child(4) {
            width: 135px;
        }

        th:nth-child(5) {
            text-align: right;
        }

        th:last-child {
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            width: 141px;
        }

        tbody {
            font-size: 14px;
        }

        tr {
            position: relative;
            height: 53px;
        }

        tr:not(:last-child)::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -1px;
            height: 1px;
            border-bottom: 1px solid white;
            opacity: 0.2;
        }

        td {
            text-align: left;
            padding: 0;
        }

        td:first-child {
            padding-left: 20px;
        }

        td:nth-child(2) {
            width: 123px;
            text-align: center;
        }

        /* td:nth-child(4) {
            text-transform: capitalize;
        } */

        td:last-child {
            text-align: right;
            padding-right: 6px;
        }

        button.edit {
            width: 14px;
            height: 14px;
            margin-right: 8px;
        }
    }

    @media only screen and (min-width: 1280px) {
        margin: 0;
        min-width: 715px;

        th:last-child {
            width: 130px;
        }
        tr:not(:last-child)::after {
            left: 10px;
            right: 0;
        }

        td:last-child {
            padding-right: 10px;
        }
    }
`;
