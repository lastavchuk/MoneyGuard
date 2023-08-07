import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { StyledSelectors } from './StatisticsSelect.styled';
import { getAllYears } from 'services/helpers';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectLoading,
    selectUserIsAuth,
    selectUserToken,
} from 'redux/selectors';
import { refreshUserThunk } from 'redux/auth/userThunks';
import { getSummaryTransactionThunk } from 'redux/finance/financeThunks';

const optionsMonth = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
];

const optionsYear = [
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
];

const StatisticsSelect = () => {
    // const isAuth = useSelector(selectUserIsAuth);
    const token = useSelector(selectUserToken);

    const dispatch = useDispatch();
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const period = { month, year };

    useEffect(() => {
        if (!token) return;
        // dispatch(getSummaryTransactionThunk({ month: 8, year: 2023 }));
        dispatch(getSummaryTransactionThunk({ month, year }));
    }, [dispatch, token, month, year]);

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
    console.log(period);
    // const onInputChange = e => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     console.log(name);
    //     if (name === 'month') {
    //         setMonth(value);
    //     } else {
    //         setYear(value);
    //     }
    // };
    // // useEffect(() => {
    // //     if (!token) return;
    // //     dispatch(getAllYears());
    // // }, [dispatch, token]);

    // const optionsYear = () => {
    //     dispatch(getAllYears());
    // };
    // console.log(optionsYear);
    // const optionsYear = [];

    return (
        <StyledSelectors>
            <Select
                name="month"
                value={getMonth()}
                onChange={onChangeMonth}
                classNamePrefix="react-select"
                options={optionsMonth}
            />
            <Select
                name="year"
                value={getYear()}
                onChange={onChangeYear}
                classNamePrefix="react-select"
                options={optionsYear}
                placeholder=""
            />
        </StyledSelectors>
    );
};

export default StatisticsSelect;
