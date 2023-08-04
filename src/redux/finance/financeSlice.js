import { createSlice } from '@reduxjs/toolkit';
import {
    createTransactionThunk,
    delTransactionThunk,
    fetchAllTransactionsThunk,
    getSummaryTransactionThunk,
    getTransactionCategoriesThunk,
    updTransactionThunk,
} from './financeThunks';

const financeSlice = createSlice({
    name: 'finance',
    initialState: { totalBalance: 0, data: null },
    extraReducers: builder => {
        builder
            .addCase(createTransactionThunk.fulfilled, (state, action) => {})
            .addCase(fetchAllTransactionsThunk.fulfilled, (state, action) => {})
            .addCase(updTransactionThunk.fulfilled, (state, action) => {})
            .addCase(delTransactionThunk.fulfilled, (state, action) => {})
            .addCase(
                getTransactionCategoriesThunk.fulfilled,
                (state, action) => {}
            )
            .addCase(
                getSummaryTransactionThunk.fulfilled,
                (state, action) => {}
            );
    },
});

export const financeReducer = financeSlice.reducer;
