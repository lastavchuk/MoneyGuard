import { StyledTransactionsList } from './TransactionsList.styled';
import { GoPencil } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectCategories } from 'redux/selectors';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
    delTransactionThunk,
    getSummaryTransactionThunk,
} from 'redux/finance/financeThunks';

function TransactionsList({
    transactions,
    onEditTransaction,
    onDeleteTransaction,
}) {
    const dispatch = useDispatch();
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
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = String(dateObj.getFullYear()).slice(-2);
        return `${day}.${month}.${year}`;
    }

    function formatComment(comment) {
        return comment.length > 21
            ? comment.split('').splice(0, 21).join('') + '...'
            : comment;
    }
    function onDelete(id) {
        dispatch(delTransactionThunk(id))
            .unwrap()
            .then(
                toast.success(
                    'The transaction has been removed from your list.'
                )
            )
            .catch(error =>
                toast.error('Something went wrong, please try again!')
            );
        dispatch(getSummaryTransactionThunk({}));
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
                                        onClick={() => onDelete(id)}
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
                                                    onClick={() => onDelete(id)}
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
