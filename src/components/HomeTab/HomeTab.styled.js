import styled from 'styled-components';

export const StyledHomeTab = styled.div`
    width: 100%;

    div {
        display: block;
        margin: 0 auto;
        max-height: 318px;
        overflow: scroll;
        width: 704px;
    }
    
    table {
        width: 100%;
        border-spacing: 0px;
        border-collapse: collapse;
    }

    thead {
        height: 56px;
        background-color: var(--balance-background-color);
        backdrop-filter: var(--backdrop-filter);
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

    button.add {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 40px;
        right: 40px;
        width: 44px;
        height: 44px;
        background: var(--gradient-button);
        border-radius: 50%;
        font-size: 30px;
        color: var(--white);
    }

    @media only screen and (min-width: 1280px) {
        width: 800px;
        padding: 46px 16px 46px 69px;

        div {
            margin: 0;
            min-width: 715px;
        }

        th:last-child {
            width: 130px;
        }
    }
`;
