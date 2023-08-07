import styled from 'styled-components';

export const StyledStatistics = styled.div`
    display: flex;
    flex-direction: column;
    & h2 {
        color: #fbfbfb;
        font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-left: 16px;
    }
    .stat-cont {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
    }
    .stat-table {
        margin-left: 32px;
    }
`;
