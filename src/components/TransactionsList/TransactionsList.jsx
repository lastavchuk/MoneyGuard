import { StyledTransactionsList } from './TransactionsList.styled';

function TransactionsList() {
    return (
        <StyledTransactionsList>
            <tr>
                <td>04.01.19</td>
                <td>-</td>
                <td>Other</td>
                <td>Gift for your wife</td>
                <td>300.00</td>
                <td>
                    <button>edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </StyledTransactionsList>
    );
}

export default TransactionsList;
