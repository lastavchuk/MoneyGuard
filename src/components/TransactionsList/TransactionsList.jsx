import { StyledTransactionsList } from './TransactionsList.styled';
import { GoPencil } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectCategories } from 'redux/selectors';
import PropTypes from 'prop-types';

// const categories = [
//     {
//         id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
//         name: 'Main expenses',
//         type: 'EXPENSE',
//     },
//     {
//         id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
//         name: 'Products',
//         type: 'EXPENSE',
//     },
//     {
//         id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
//         name: 'Car',
//         type: 'EXPENSE',
//     },
//     {
//         id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4',
//         name: 'Self care',
//         type: 'EXPENSE',
//     },
//     {
//         id: '76cc875a-3b43-4eae-8fdb-f76633821a34',
//         name: 'Child care',
//         type: 'EXPENSE',
//     },
//     {
//         id: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
//         name: 'Household products',
//         type: 'EXPENSE',
//     },
//     {
//         id: '1272fcc4-d59f-462d-ad33-a85a075e5581',
//         name: 'Education',
//         type: 'EXPENSE',
//     },
//     {
//         id: 'c143130f-7d1e-4011-90a4-54766d4e308e',
//         name: 'Leisure',
//         type: 'EXPENSE',
//     },
//     {
//         id: '719626f1-9d23-4e99-84f5-289024e437a8',
//         name: 'Other expenses',
//         type: 'EXPENSE',
//     },
//     {
//         id: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
//         name: 'Entertainment',
//         type: 'EXPENSE',
//     },
//     {
//         id: '063f1132-ba5d-42b4-951d-44011ca46262',
//         name: 'Income',
//         type: 'INCOME',
//     },
// ];

function TransactionsList({
    transactions,
    onEditTransaction,
    onDeleteTransaction,
}) {
    const categories = useSelector(selectCategories);

    const isDesktopOrTablet = useMediaQuery({
        query: '(min-width: 768px)',
    });

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const sortedTransactions = [...transactions].sort((a, b) =>
        b.transactionDate.localeCompare(a.transactionDate)
    );

    function findCategoryName(id) {
        return categories?.find(category => category.id === id).name;
    }

    function formatDate(date) {
        const dateObj = new Date(date);
        const day = String(dateObj.getDate() + 1).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = String(dateObj.getFullYear()).slice(-2);
        return `${day}.${month}.${year}`;
    }

    function formatComment(comment) {
        return comment.length > 25
            ? comment.split('').splice(0, 25).join('') + '...'
            : comment;
    }

    return (
        <>
            {isMobile &&
                sortedTransactions.map(
                    ({
                        id,
                        transactionDate,
                        type,
                        categoryId,
                        comment,
                        amount,
                    }) => (
                        <StyledTransactionsList
                            key={id}
                            className={type.toLowerCase()}
                        >
                            <ul>
                                <li>
                                    <b>Date</b>
                                    <p>{formatDate(transactionDate)}</p>
                                </li>
                                <li>
                                    <b>Type</b>
                                    <p>{type === 'EXPENSE' ? '-' : '+'}</p>
                                </li>
                                <li>
                                    <b>Category</b>
                                    <p>{findCategoryName(categoryId)}</p>
                                </li>
                                <li>
                                    <b>Comment</b>
                                    <p>{formatComment(comment)}</p>
                                </li>
                                <li>
                                    <b>Sum</b>
                                    <p>{Math.abs(amount)}</p>
                                </li>
                                <li>
                                    <button
                                        className="delete"
                                        type="button"
                                        onClick={() => onDeleteTransaction(id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="edit"
                                        type="button"
                                        onClick={() =>
                                            onEditTransaction({
                                                id,
                                                transactionDate,
                                                type,
                                                categoryId,
                                                comment,
                                                amount,
                                            })
                                        }
                                    >
                                        <GoPencil />
                                        Edit
                                    </button>
                                </li>
                            </ul>
                        </StyledTransactionsList>
                    )
                )}
            {isDesktopOrTablet && (
                <StyledTransactionsList>
                    <table>
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
                        <tbody>
                            {transactions &&
                                sortedTransactions.map(
                                    ({
                                        id,
                                        transactionDate,
                                        type,
                                        categoryId,
                                        comment,
                                        amount,
                                    }) => (
                                        <tr key={id}>
                                            <td>
                                                {formatDate(transactionDate)}
                                            </td>
                                            <td>
                                                {type === 'EXPENSE' ? '-' : '+'}
                                            </td>
                                            <td>
                                                {findCategoryName(categoryId)}
                                            </td>
                                            <td>{formatComment(comment)}</td>
                                            <td className={type.toLowerCase()}>
                                                {Math.abs(amount)}
                                            </td>
                                            <td>
                                                <button
                                                    className="edit"
                                                    type="button"
                                                    onClick={() =>
                                                        onEditTransaction({
                                                            id,
                                                            transactionDate,
                                                            type,
                                                            categoryId,
                                                            comment,
                                                            amount,
                                                        })
                                                    }
                                                >
                                                    <GoPencil />
                                                </button>
                                                <button
                                                    className="delete"
                                                    type="button"
                                                    onClick={() =>
                                                        onDeleteTransaction(id)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                        </tbody>
                    </table>
                </StyledTransactionsList>
            )}
        </>
    );
}

TransactionsList.propTypes = {
    onEditTransaction: PropTypes.func.isRequired,
    onDeleteTransaction: PropTypes.func.isRequired,
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            transactionDate: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            categoryId: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
        })
    ),
};

export default TransactionsList;
