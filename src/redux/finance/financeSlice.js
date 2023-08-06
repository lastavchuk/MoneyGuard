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
    initialState: { totalBalance: 0, data: null, categories: null },
    extraReducers: builder => {
        builder
            .addCase(createTransactionThunk.fulfilled, (state, action) => {})
            .addCase(fetchAllTransactionsThunk.fulfilled, (state, action) => {state.data = action.payload})
            .addCase(updTransactionThunk.fulfilled, (state, action) => {})
            .addCase(delTransactionThunk.fulfilled, (state, action) => { state.data = state.data.filter(
                transaction => transaction.id !== action.payload.id); 
                // console.log(state.data);
            })
            .addCase(
                getTransactionCategoriesThunk.fulfilled,
                (state, action) => {state.categories = action.payload}
            )
            .addCase(
                getSummaryTransactionThunk.fulfilled,
                (state, action) => {state.totalBalance = action.payload}
            );
    },
});

export const financeReducer = financeSlice.reducer;
