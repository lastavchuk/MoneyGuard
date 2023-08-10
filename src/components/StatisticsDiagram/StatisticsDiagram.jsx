import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Colors } from 'chart.js';
import { selectFinanceTotalBalance } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { StyledDiagram, StyledSpan } from './StatisticsDiagram.styled';
import { colors } from 'services/helpers';

ChartJS.register(ArcElement, Tooltip, Legend, Title, Colors);

const StatisticsDiagram = ({ expenseCategories }) => {
    const totalBalanceData = useSelector(selectFinanceTotalBalance);

    const data = {
        labels: [],
        datasets: [
            {
                label: '',
                backgroundColor: colors,
                borderColor: colors,
                data:
                    !!expenseCategories && !expenseCategories.length
                        ? [1]
                        : expenseCategories.map(item => item.total),
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: '70%',

        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <StyledDiagram>
            <StyledSpan>₴ {Number(totalBalanceData).toFixed(2)}</StyledSpan>
            <Doughnut data={data} options={options}></Doughnut>
        </StyledDiagram>
    );
};

export default StatisticsDiagram;
