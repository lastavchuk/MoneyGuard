import React from 'react';
import {
    StyledStatisticsList,
    StyledStatisticsTable,
    StyledStatisticsTotal,
} from './StatisticsTable.styled';
import { useSelector } from 'react-redux';
import { selectExpenseSummary, selectIncomeSummary } from 'redux/selectors';
import { colors } from 'services/helpers';

const StatisticsTable = ({ expenseCategories }) => {
    const incomeSummary = useSelector(selectIncomeSummary);
    const expenseSummary = useSelector(selectExpenseSummary);

    return (
        <StyledStatisticsTable>
            <div className="statistics-header">
                <p>Category</p>
                <p>Sum</p>
            </div>

            <StyledStatisticsList>
                {!!expenseCategories &&
                    expenseCategories.map((category, id) => {
                        return (
                            <div key={id}>
                                <li>
                                    <div
                                        style={{ backgroundColor: colors[id] }}
                                        className="category-color"
                                    ></div>
                                    <p className="category-item">
                                        {category.name}
                                    </p>
                                    <p className="category-sum">
                                        {Number(category.total).toFixed(2) * -1}
                                    </p>
                                </li>
                                <div className="gradient"></div>
                            </div>
                        );
                    })}
                <StyledStatisticsTotal>
                    {!!expenseSummary && expenseSummary !== 0 && (
                        <li>
                            <p className="total-item">Expenses:</p>
                            <p className="total-sum-exp">
                                {Number(expenseSummary).toFixed(2) * -1}
                            </p>
                        </li>
                    )}
                    {!!incomeSummary && incomeSummary !== 0 && (
                        <li>
                            <p className="total-item">Income:</p>
                            <p className="total-sum-inc">
                                {Number(incomeSummary).toFixed(2)}
                            </p>
                        </li>
                    )}
                </StyledStatisticsTotal>
            </StyledStatisticsList>
        </StyledStatisticsTable>
    );
};

export default StatisticsTable;
