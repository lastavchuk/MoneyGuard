import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    createTransaction,
    delTransaction,
    fetchAllTransactions,
    getSummaryTransaction,
    getTransactionCategories,
    updTransaction,
} from 'services/api';

export const createTransactionThunk = createAsyncThunk(
    'finance/createTransactionThunk',
    async (transaction, thunkAPI) => {
        try {
            return await createTransaction(transaction);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchAllTransactionsThunk = createAsyncThunk(
    'finance/fetchAllTransactionsThunk',
    async (_, thunkAPI) => {
        try {
            return await fetchAllTransactions();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updTransactionThunk = createAsyncThunk(
    'finance/updTransactionThunk',
    async (transaction, thunkAPI) => {
        try {
            return await updTransaction(transaction);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const delTransactionThunk = createAsyncThunk(
    'finance/delTransactionThunk',
    async (id, thunkAPI) => {
        try {
            return await delTransaction(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getTransactionCategoriesThunk = createAsyncThunk(
    'finance/getTransactionCategoriesThunk',
    async (_, thunkAPI) => {
        try {
            return await getTransactionCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getSummaryTransactionThunk = createAsyncThunk(
    'finance/getSummaryTransactionThunk',
    async (date, thunkAPI) => {
        try {
            return await getSummaryTransaction(date);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
