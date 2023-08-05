import HomeTab from '../components/HomeTab/HomeTab';
import { fetchAllTransactionsThunk } from 'redux/finance/financeThunks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
    getTransactionCategoriesThunk,
    delTransactionThunk,
} from 'redux/finance/financeThunks';
import { openModalAddTransaction } from 'redux/globalSlice';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTransactionsThunk());
        dispatch(getTransactionCategoriesThunk());
    }, [dispatch]);

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
        <HomeTab
            onOpenModal={handleOpenModal}
            onEditTransaction={handlerEditTransaction}
            onDeleteTransaction={handlerDeleteTransaction}
        />
    );
}

export default Home;
