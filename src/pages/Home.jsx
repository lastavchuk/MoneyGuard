import HomeTab from '../components/HomeTab/HomeTab';
import { fetchAllTransactionsThunk } from 'redux/finance/financeThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    getTransactionCategoriesThunk,
    delTransactionThunk,
} from 'redux/finance/financeThunks';
import { openModalAddTransaction } from 'redux/globalSlice';
import { selectUserData } from 'redux/selectors';


function Home() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

    useEffect(() => {
      if (userData){
        dispatch(fetchAllTransactionsThunk());
        dispatch(getTransactionCategoriesThunk());}
    }, [dispatch, userData]);

    function handleOpenModal() {
        dispatch(openModalAddTransaction());
    }
    function handlerEditTransaction(id) {
        dispatch(openModalAddTransaction(id));
    }
    function handlerDeleteTransaction(id) {
        dispatch(delTransactionThunk(id));
        // console.log("home", id);
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
