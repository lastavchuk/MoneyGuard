import HomeTab from '../components/HomeTab/HomeTab';
import { fetchAllTransactionsThunk } from 'redux/finance/financeThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    getTransactionCategoriesThunk,
    delTransactionThunk,
} from 'redux/finance/financeThunks';
import { openModalAddTransaction } from 'redux/globalSlice';
import {
    selectIsModalAddTransactionOpen,
    selectUserData,
} from 'redux/selectors';
import { ModalAddTransaction } from 'components/ModaAddlTransaction/ModaAddlTransaction';
// import { ModalAddTransaction } from 'components/ModaAddlTransaction/ModaAddlTransaction';

function Home() {
    const dispatch = useDispatch();
    const userData = useSelector(selectUserData);
    const isModalOpen = useSelector(selectIsModalAddTransactionOpen);

    useEffect(() => {
        if (userData) {
            dispatch(fetchAllTransactionsThunk());
            dispatch(getTransactionCategoriesThunk());
        }
    }, [dispatch, userData]);

    function handleOpenModal() {
        dispatch(openModalAddTransaction());
    }
    function handlerEditTransaction(id) {
        dispatch(openModalAddTransaction(id));
    }
    function handlerDeleteTransaction(id) {
        dispatch(delTransactionThunk(id));
    }

    return (
        <main>
            <HomeTab
                onOpenModal={handleOpenModal}
                onEditTransaction={handlerEditTransaction}
                onDeleteTransaction={handlerDeleteTransaction}
            />
            {isModalOpen && <ModalAddTransaction />}
        </main>
    );
}

export default Home;
