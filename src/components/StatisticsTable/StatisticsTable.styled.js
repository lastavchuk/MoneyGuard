import styled from 'styled-components';

export const StyledStatisticsTable = styled.div`
    margin-bottom: 46px;
    .statistics-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 395px;
        height: 56px;
        margin-top: 20px;

        border-radius: 8px;
        background-color: rgba(82, 59, 126, 0.6);
        box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(50px);
        & p {
            color: #fbfbfb;
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            padding: 16px;
        }
    }
`;

export const StyledStatisticsList = styled.ul`
    display: flex;
    flex-direction: column;
    & li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        width: 395px;
        padding: 16px;
        color: #fbfbfb;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .category-color {
        width: 24px;
        height: 24px;
        border-radius: 2px;
        background-color: rgba(110, 120, 232, 1);
    }
    .category-sum {
        margin-left: auto;
    }
    .category-item {
        padding-left: 16px;
    }

    .gradient {
        height: 2px;
        width: 395px;
        /* Gradient starts from rgba(255, 255, 255, 0.2) at the top to rgba(255, 255, 255, 0.41) at the bottom. */
        background: linear-gradient(
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.41)
        );
    }
`;

export const StyledStatisticsTotal = styled.ul`
    display: flex;
    flex-direction: column;
    & li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        width: 395px;
        padding: 16px 0 0 0;
        color: #fbfbfb;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .total-sum-exp {
        margin-left: auto;

        color: var(--dashboard-text);
        text-align: right;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .total-sum-inc {
        margin-left: auto;

        color: var(--yellow);
        text-align: right;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .total-item {
        color: var(--white);
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;
