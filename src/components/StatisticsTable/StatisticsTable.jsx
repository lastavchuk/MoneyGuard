import React from 'react';
import {
    StyledStatisticsList,
    StyledStatisticsTable,
} from './StatisticsTable.styled';

const StatisticsTable = () => {
    return (
        <StyledStatisticsTable>
            <div className="statistics-header">
                <p>Category</p>
                <p>Sum</p>
            </div>
            <StyledStatisticsList>
                <li>
                    <div className="category-color"></div>
                    <p className="category-item">Products</p>
                    <p className="category-sum">3 800.74</p>
                </li>
                <div className="gradient"></div>
            </StyledStatisticsList>
        </StyledStatisticsTable>
    );
};

export default StatisticsTable;
