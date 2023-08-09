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
        margin: auto 0;
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
            margin-top: 20px;
        }
        .stat-table {
            margin-left: 32px;
        }
    }
    @media only screen and (min-width: 1280px) {
    }
`;
