import styled from 'styled-components';

export const StyledStatistics = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;

    & h2 {
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .stat-diag {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 288px;
        margin: 0 auto;
    }
    .stat-cont {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    .stat-table {
        margin: 32px auto 0;
    }
    @media only screen and (min-width: 768px) {
        & h2 {
            margin-left: 16px;
        }
        .stat-cont {
            flex-direction: row;
        }
        .stat-table {
            margin: 0 32px;
        }
        .stat-diag {
            width: 336px;
            position: relative;
            top: -20px;
            margin-left: 12px;
        }
    }
    @media only screen and (min-width: 1280px) {
        padding: 0;
        padding-top: 97px;
        padding-left: 69px;
        .stat-diag {
            margin-left: 0;
            width: 288px;
            /* position: relative; */
            top: -65px;
        }
        .stat-table {
            margin-right: 0;
            margin-left: 32px;
        }
    }
`;
