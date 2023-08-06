import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalEditTransactionOpen: false,
  editTransaction: null,
  isModalAddTransactionOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalAddTransaction(state) {
      state.isModalAddTransactionOpen = true;
    },
    closeModalAddTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    setUpdatedTransaction: (state, { payload }) => {
      state.editTransaction = payload;
    },
    openModalDeleteTransaction(state) {
      state.isModalDeleteTransactionOpen = true;
    },
    closeModalDeleteTransaction(state) {
      state.isModalDeleteTransactionOpen = false;
    },
  },
});

export const globalReducer = globalSlice.reducer;
export const {
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalLogout,
  closeModalLogout,
  setIsLoading,
  openModalEditTransaction,
  closeModalEditTransaction,
  setUpdatedTransaction,
  openModalDeleteTransaction,
  closeModalDeleteTransaction,
} = globalSlice.actions;
