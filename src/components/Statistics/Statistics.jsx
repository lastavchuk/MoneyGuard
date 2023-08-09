import StatisticsDiagram from 'components/StatisticsDiagram/StatisticsDiagram';
import StatisticsInput from 'components/StatisticsSelect/StatisticsSelect';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import React from 'react';
import { StyledStatistics } from './Statistics.styled';
import { useSelector } from 'react-redux';
import { useCategoriesType } from 'hooks/categoriesFilter';
import { selectSummary } from 'redux/selectors';

const Statistics = () => {
    const summary = useSelector(selectSummary);
    const [expenseCategories] = useCategoriesType(summary);
    // console.log(expenseCategories);
    return (
        <StyledStatistics>
            <div className="stat-cont">
                <div className="stat-diag">
                    <h2>Statistics</h2>
                    <StatisticsDiagram expenseCategories={expenseCategories} />
                </div>
                <div className="stat-table">
                    <StatisticsInput />
                    <StatisticsTable expenseCategories={expenseCategories} />
                </div>
            </div>
        </StyledStatistics>
    );
};

export default Statistics;
