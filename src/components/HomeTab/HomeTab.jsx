import { StyledHomeTab } from './HomeTab.styled';
import { useSelector } from 'react-redux';
import { selectFinanceData } from 'redux/selectors';
import { AiOutlinePlus } from 'react-icons/ai';
import PropTypes from 'prop-types';
import TransactionsList from 'components/TransactionsList/TransactionsList';

function HomeTab({ onOpenModal, onEditTransaction, onDeleteTransaction }) {
    const transactions = useSelector(selectFinanceData);

    return (
        <StyledHomeTab>
            {transactions?.length > 0 && (
                <TransactionsList
                    transactions={transactions}
                    onEditTransaction={onEditTransaction}
                    onDeleteTransaction={onDeleteTransaction}
                />
            )}
            {transactions?.length === 0 && (
                <p className="animationText">Let's get started!</p>
            )}
            <button className="add" onClick={() => onOpenModal()}>
                <AiOutlinePlus />
            </button>
        </StyledHomeTab>
    );
}

HomeTab.propTypes = {
    onOpenModal: PropTypes.func.isRequired,
    onEditTransaction: PropTypes.func.isRequired,
    onDeleteTransaction: PropTypes.func.isRequired,
};

export default HomeTab;
