import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
    name: 'global',
    initialState: { isModalAddTransactionOpen: false, modalData: null },
    reducers: {
        openModalAddTransaction: (state, action) => {
            state.isModalAddTransactionOpen = true;
            state.modalData = action.payload ? action.payload : null;
        },
        closeModalAddTransaction: state => {
            state.isModalAddTransactionOpen = false;
            state.modalData = null;
        },
    },
});

export const { openModalAddTransaction, closeModalAddTransaction } =
    globalSlice.actions;
export const globalReducer = globalSlice.reducer;
