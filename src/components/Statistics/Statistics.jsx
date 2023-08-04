import StatisticsDiagram from 'components/StatisticsDiagram/StatisticsDiagram';
import StatisticsInput from 'components/StatisticsSelect/StatisticsSelect';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import React from 'react';
import { StyledStatistics } from './Statistics.styled';

const Statistics = () => {
    return (
        <StyledStatistics>
            <h2>Statistics</h2>
            <StatisticsDiagram />
            <StatisticsInput />
            <StatisticsTable />
        </StyledStatistics>
    );
};

export default Statistics;
