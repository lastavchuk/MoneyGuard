import { StyledTransactionsList } from './TransactionsList.styled';

function TransactionsList({transactions}) {

    //filter
    return (
        <StyledTransactionsList>
            {/* {transactions.map(({id, transactionDate, type, categoryId, comment, amount})=>
                 <tr key={id}>
                 <td>{transactionDate}</td>
                 <td>{type}</td>
                 <td>{categoryId}</td>
                 <td>{comment}</td>
                 <td>{amount}</td>
                 <td>
                     <button>edit</button>
                     <button>Delete</button>
                 </td>
             </tr>
            )} */}
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
