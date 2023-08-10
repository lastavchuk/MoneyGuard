import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        isModalAddTransactionOpen: false,
        isModalLogoutOpen: false,
        modalData: null,
    },
    reducers: {
        openModalAddTransaction: (state, action) => {
            state.isModalAddTransactionOpen = true;
            state.modalData = action.payload ? action.payload : null;
        },
        closeModalAddTransaction: state => {
            state.isModalAddTransactionOpen = false;
            state.modalData = null;
        },
        openModalLogout: state => {
            state.isModalLogoutOpen = true;
        },
        closeModalLogout: state => {
            state.isModalLogoutOpen = false;
        },
    },
});

export const {
    openModalAddTransaction,
    closeModalAddTransaction,
    openModalLogout,
    closeModalLogout,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
