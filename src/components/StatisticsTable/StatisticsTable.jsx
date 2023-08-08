import React from 'react';
import {
    StyledStatisticsList,
    StyledStatisticsTable,
    StyledStatisticsTotal,
} from './StatisticsTable.styled';
import { useSelector } from 'react-redux';
import { selectSummary } from 'redux/selectors';

const StatisticsTable = () => {
    const summary = useSelector(selectSummary);

    return (
        <StyledStatisticsTable>
            <div className="statistics-header">
                <p>Category</p>
                <p>Sum</p>
            </div>

            <StyledStatisticsList>
                {!!summary &&
                    summary.categoriesSummary.map((category, id) => {
                        console.log(id);
                        return (
                            <div key={id}>
                                <li>
                                    <div className="category-color"></div>
                                    <p className="category-item">
                                        {category.name}
                                    </p>
                                    <p className="category-sum">
                                        {category.total}
                                    </p>
                                </li>
                                <div className="gradient"></div>
                            </div>
                        );
                    })}
                <StyledStatisticsTotal>
                    {!!summary && summary.expenseSummary !== 0 && (
                        <li>
                            <p className="total-item">Expenses:</p>
                            <p className="total-sum-exp">
                                {summary.expenseSummary}
                            </p>
                        </li>
                    )}
                    {!!summary && summary.incomeSummary !== 0 && (
                        <li>
                            <p className="total-item">Income:</p>
                            <p className="total-sum-inc">
                                {summary.incomeSummary}
                            </p>
                        </li>
                    )}
                </StyledStatisticsTotal>
            </StyledStatisticsList>
        </StyledStatisticsTable>
    );
};

export default StatisticsTable;
