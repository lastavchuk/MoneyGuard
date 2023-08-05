import { StyledTransactionsList } from './TransactionsList.styled';

function TransactionsList({ transactions }) {

    const sortedTransactions = transactions.sort((a, b) =>
        b.transactionDate.localeCompare(a.transactionDate)
    );

    function formatDate(date) {
        const dateObj = new Date(date);
        const day = String(dateObj.getDate() + 1).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Месяцы в JS начинаются с 0, поэтому добавляем 1
        const year = String(dateObj.getFullYear()).slice(-2);
        return `${day}.${month}.${year}`;
    }

    return (
        <StyledTransactionsList>
            {sortedTransactions.map(
                ({
                    id,
                    transactionDate,
                    type,
                    categoryId,
                    comment,
                    amount,
                }) => (
                    <tr key={id}>
                        <td>{formatDate(transactionDate)}</td>
                        <td>{type === "EXPENSE" ? "-" : "+"}</td>
                        <td>{categoryId}</td>
                        <td>{comment}</td>
                        <td className={type.toLowerCase()}>{amount}</td>
                        <td>
                            <button className='edit'>edit</button>
                            <button className='delete'>Delete</button>
                        </td>
                    </tr>
                )
            )}
        </StyledTransactionsList>
    );
}

export default TransactionsList;
