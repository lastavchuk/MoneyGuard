import React from 'react';
import Select from 'react-select';
import { StyledSelectors } from './StatisticsSelect.styled';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const StatisticsSelect = () => {
    return (
        <StyledSelectors>
            <Select classNamePrefix="react-select" options={options} />
            <Select classNamePrefix="react-select" options={options} />
        </StyledSelectors>
    );
};

export default StatisticsSelect;
