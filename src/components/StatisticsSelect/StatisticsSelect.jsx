import React from 'react';
import Select from 'react-select';
import { StyledSelectors } from './StatisticsSelect.styled';
import { getAllYears } from 'services/helpers';

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

const StatisticsSelect = () => {
    const optionsYear = getAllYears();
    console.log(optionsYear);
    // const optionsYear = [];

    return (
        <StyledSelectors>
            <Select classNamePrefix="react-select" options={optionsMonth} />
            <Select classNamePrefix="react-select" options={optionsYear} />
        </StyledSelectors>
    );
};

export default StatisticsSelect;
