import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    closeModalAddTransaction,
    openModalAddTransaction,
} from 'redux/globalSlice';

import {
    getTransactionCategoriesThunk,
    delTransactionThunk,
    fetchAllTransactionsThunk,
    getSummaryTransactionThunk,
} from 'redux/finance/financeThunks';

import {
    selectIsModalAddTransactionOpen,
    selectUserData,
} from 'redux/selectors';

import HomeTab from 'components/HomeTab/HomeTab';
import { Modal } from 'components/Modal/Modal';
import { ModalTransaction } from 'components/Modal/ModalTransaction';

function Home() {
    const dispatch = useDispatch();
    const userData = useSelector(selectUserData);
    const isModalOpen = useSelector(selectIsModalAddTransactionOpen);

    useEffect(() => {
        if (userData) {
            dispatch(fetchAllTransactionsThunk());
            dispatch(getTransactionCategoriesThunk());
            dispatch(getSummaryTransactionThunk({}));
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
            {isModalOpen && (
                <Modal closeReducer={closeModalAddTransaction}>
                    <ModalTransaction />
                </Modal>
            )}
        </main>
    );
}

export default Home;
