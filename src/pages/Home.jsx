import HomeTab from "../components/HomeTab/HomeTab";
import { fetchAllTransactionsThunk } from "redux/finance/financeThunks";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getTransactionCategoriesThunk } from "redux/finance/financeThunks";

function Home() {
const dispatch = useDispatch();

useEffect(()=>{
dispatch(fetchAllTransactionsThunk())
dispatch(getTransactionCategoriesThunk())
}, [dispatch]);

  return (
 <HomeTab/>
  )
}

export default Home