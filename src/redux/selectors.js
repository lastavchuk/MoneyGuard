export const selectLoading = state => state.root.isLoading;
export const selectError = state => state.root.error;

export const selectFinanceData = state => state.finance.data;
export const selectFinanceTotalBalance = state => state.finance.totalBalance;
export const selectCategories = state => state.finance.categories;

export const selectIsModalAddTransactionOpen = state =>
    state.global.isModalAddTransactionOpen;
export const selectModalData = state => state.global.modalData;

export const selectIncomeSummary = state => state.transaction.incomeSummary;
export const selectExpenseSummary = state => state.transaction.expenseSummary;
export const selectPeriodTotal = state => state.transaction.periodTotal;

export const selectTransactions = state => state.transaction.transactions;
export const selectCategoriesSummary = state =>
    state.transaction.categoriesSummary;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;

export const selectUserData = state => state.user.userData;

export const selectUserToken = state => state.user.token;

export const selectUserIsAuth = state => state.user.isAuth;
export const selectSummary = state => state.finance.summary;
