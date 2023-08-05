import styled from 'styled-components';

export const StyledTransactionsList = styled.tbody`
font-size: 14px;

tr{
    height: 53px;
}

td.income {
font-weight: 600;
color: var(--yellow);
    }
td.expense {
    font-weight: 600;   
    color: var(--dashboard-text);
}
button.edit{
width: 14px;
height: 14px;
}
button.delete{
    color: var(--white);
    background: var(--gradient-button);
    width: 69px;
    height: 29px;
    border-radius: 20px;
}
`;