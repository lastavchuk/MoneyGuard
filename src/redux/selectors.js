export const selectLoading = state => state.root.isLoading;
export const selectError = state => state.root.error;

export const selectFinanceData = state => state.finance.data;
export const selectFinanceTotalBalance = state => state.finance.totalBalance;
