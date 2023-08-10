import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { StyledSelectors, selectStyles } from './StatisticsSelect.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectFinanceData, selectUserIsAuth } from 'redux/selectors';

import { getSummaryTransactionThunk } from 'redux/finance/financeThunks';
import { optionsMonth } from 'services/helpers';

const StatisticsSelect = () => {
    const isAuth = useSelector(selectUserIsAuth);
    const financeData = useSelector(selectFinanceData);

    const dispatch = useDispatch();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    const [month, setMonth] = useState(currentMonth + 1);
    const [year, setYear] = useState(currentYear);

    useEffect(() => {
        if (!isAuth) return;
        dispatch(getSummaryTransactionThunk({ month, year }));
    }, [dispatch, isAuth, month, year]);

    function getYears(date) {
        return date.slice(0, 4);
    }

    function getAllYears() {
        let years = [];
        for (const { transactionDate } of financeData) {
            const year = getYears(transactionDate);
            if (!years.includes(year)) {
                years.push(year);
            }
        }
        years.sort();
        return years.map(y => {
            return { value: Number(y), label: y };
        });
    }

    const optionsYear = getAllYears();

    const getMonth = () => {
        return month ? optionsMonth.find(month => month.value === month) : '';
    };
    const getYear = () => {
        return year ? optionsYear.find(year => year.value === year) : '';
    };
    const onChangeMonth = newData => {
        setMonth(newData.value);
    };
    const onChangeYear = newData => {
        setYear(newData.value);
    };

    return (
        <StyledSelectors>
            <Select
                // name="month"
                styles={selectStyles}
                value={getMonth()}
                onChange={onChangeMonth}
                classNamePrefix="react-select"
                options={optionsMonth}
                placeholder={optionsMonth[currentMonth].label}
            />
            <Select
                // name="year"
                styles={selectStyles}
                value={getYear()}
                onChange={onChangeYear}
                classNamePrefix="react-select"
                options={optionsYear}
                placeholder={currentYear}
            />
        </StyledSelectors>
    );
};

export default StatisticsSelect;
