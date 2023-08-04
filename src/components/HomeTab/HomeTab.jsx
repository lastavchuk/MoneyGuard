import { StyledHomeTab } from './HomeTab.styled';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import { useSelector } from 'react-redux';
import { selectFinanceData } from 'redux/selectors';

function HomeTab() {

    const transactions = useSelector(selectFinanceData);

    return (
        <StyledHomeTab>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Comment</th>
                    <th>Sum</th>
                    <th></th>
                </tr>
            </thead>
            <TransactionsList transactions={transactions} />
        </StyledHomeTab>
    );
}

export default HomeTab;
