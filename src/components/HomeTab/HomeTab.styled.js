import styled from 'styled-components';

export const StyledHomeTab = styled.table`
    border-spacing: 0px;
    border-collapse: collapse;

    thead {
        height: 56px;
        background-color: var(--balance-background-color);
        backdrop-filter: var(--backdrop-filter);
    }

    th {
        padding: 0;
        font-weight: 600;
    }

    th:nth-child(5) {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    th:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        width: 119px !important;
        text-align: left;
        padding-left: 20px;
    }
`;
