import { createAsyncThunk } from '@reduxjs/toolkit';
import { closeModalAddTransaction, closeModalEditTransaction,} from 'redux/global/globalSlice';
import {  fetchCategories, fetchTransactionsSummary, addNewTransaction, deleteTransaction, getTransaction, updateTransaction,} from 'services/api/api';

export const getTransactionsCategoriesThunk = createAsyncThunk(
  'transactions/fetchCategories',
  async (_, { rejectedWithValue }) => {
    try {
      const data = await fetchCategories();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const getAllTransactionsThunk = createAsyncThunk(
  'transactions/fetchAll',
  async (_, { rejectedWithValue }) => {
    try {
      const data = await getTransaction();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, { rejectedWithValue, dispatch }) => {
    try {
      const data = await addNewTransaction(transaction);
      dispatch(closeModalAddTransaction());
      dispatch(getAllTransactionsThunk());
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const editTransactionThunk = createAsyncThunk(
  'transactions/editTransaction',
  async ({ transactionId, transaction }, { rejectedWithValue, dispatch }) => {
    try {
      const data = await updateTransaction({ transactionId, transaction });
      dispatch(closeModalEditTransaction());
      dispatch(getAllTransactionsThunk());
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const delTransactionThunk = createAsyncThunk(
  'transactions/delTransaction',
  async (id, { rejectedWithValue, dispatch }) => {
    try {
      await deleteTransaction(id);
      dispatch(getAllTransactionsThunk());
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const loading = getState().transaction.isLoading;
      if (loading) {
        return false;
      }
    },
  }
);

export const getSummaryThunk = createAsyncThunk(
  'transactions/getSummary',
  async ({ month, year }, { rejectedWithValue }) => {
    try {
      const data = await fetchTransactionsSummary({ month, year });
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
