import HomeTab from "../components/HomeTab/HomeTab";
import { fetchAllTransactionsThunk } from "redux/finance/financeThunks";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

function Home() {
const dispatch = useDispatch();

useEffect(()=>{
dispatch(fetchAllTransactionsThunk)
}, [dispatch]);

  return (
 <HomeTab/>
  )
}

export default Home