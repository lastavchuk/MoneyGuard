import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { StyledSelectors } from './StatisticsSelect.styled';
import { getAllYears } from 'services/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectUserToken } from 'redux/selectors';
import { refreshUserThunk } from 'redux/auth/userThunks';

const optionsMonth = [
    { value: 'january', label: 'January' },
    { value: 'february', label: 'February' },
    { value: 'march', label: 'March' },
    { value: 'april', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'june', label: 'June' },
    { value: 'july', label: 'July' },
    { value: 'august', label: 'August' },
    { value: 'september', label: 'September' },
    { value: 'october', label: 'October' },
    { value: 'november', label: 'November' },
    { value: 'december', label: 'December' },
];

const optionsYear = [
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
];

const StatisticsSelect = () => {
    const token = useSelector(selectUserToken);
    const isLoading = useSelector(selectLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return;
        dispatch(refreshUserThunk());
        // dispatch(getTransactionCategoriesThunk());
        // dispatch(fetchAllTransactionsThunk());
    }, [dispatch, token]);

    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const period = { month, year };
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

    const optionsYear = () => {
        dispatch(getAllYears());
    };
    console.log(optionsYear);
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
            />
        </StyledSelectors>
    );
};

export default StatisticsSelect;
