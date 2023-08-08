import StatisticsDiagram from 'components/StatisticsDiagram/StatisticsDiagram';
import StatisticsInput from 'components/StatisticsSelect/StatisticsSelect';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import React, { useEffect } from 'react';
import { StyledStatistics } from './Statistics.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchAllTransactionsThunk,
    getSummaryTransactionThunk,
    getTransactionCategoriesThunk,
} from 'redux/finance/financeThunks';
import {
    selectFinanceData,
    selectFinanceTotalBalance,
    selectUserData,
    selectUserToken,
} from 'redux/selectors';

const Statistics = () => {
    const userData = useSelector(selectUserData);
    const financeData = useSelector(selectFinanceData);
    const totalBalanceData = useSelector(selectFinanceTotalBalance);
    const token = useSelector(selectUserToken);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return;
        // dispatch(getTransactionCategoriesThunk());
        dispatch(fetchAllTransactionsThunk());
    }, [dispatch, token]);

    console.log(userData);
    console.log(financeData);

    console.log(token);

    // function getYear(date) {
    //     return date.slice(0, 4);
    // }

    // function getAllYears() {
    //     let years = [];
    //     for (const { transactionDate } of resp) {
    //         if (!years.includes(getYear(transactionDate))) {
    //             years.push(getYear(transactionDate));
    //         }
    //     }
    //     return years.sort();
    // }

    return (
        <StyledStatistics>
            <h2>Statistics</h2>
            <div className="stat-cont">
                <StatisticsDiagram />
                <div className="stat-table">
                    <StatisticsInput />
                    <StatisticsTable />
                </div>
            </div>
        </StyledStatistics>
    );
};

export default Statistics;
